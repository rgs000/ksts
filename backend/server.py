from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# SMTP Email configuration
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'mail.privateemail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', '465'))
SMTP_EMAIL = os.environ.get('SMTP_EMAIL', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'contact@karansinghtransport.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Inquiry Models
class ContactInquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    company: Optional[str] = Field(None, max_length=200)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    service_type: str = Field(..., min_length=2)
    message: str = Field(..., min_length=10, max_length=2000)

class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: Optional[str] = None
    email: str
    phone: Optional[str] = None
    service_type: str
    message: str
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Routes
@api_router.get("/")
async def root():
    return {"message": "Karan Singh Transport Services API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Email sending helper using SMTP
async def send_contact_notification(inquiry: ContactInquiry):
    """Send email notification for new contact inquiry via SMTP"""
    if not SMTP_EMAIL or not SMTP_PASSWORD:
        logger.warning("SMTP credentials not configured, skipping email notification")
        return None
    
    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #0f172a; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #f97316;">New Contact Inquiry</h1>
            <p style="margin: 10px 0 0 0; color: #94a3b8;">Karan Singh Transport Services</p>
        </div>
        
        <div style="padding: 20px; background-color: #f8fafc; border: 1px solid #e2e8f0;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b; width: 120px;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">{inquiry.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Company:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">{inquiry.company or 'Not provided'}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:{inquiry.email}" style="color: #f97316;">{inquiry.email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Phone:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">{inquiry.phone or 'Not provided'}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #64748b;">Service Type:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">{inquiry.service_type}</td>
                </tr>
            </table>
            
            <h3 style="color: #0f172a; margin-top: 20px;">Message:</h3>
            <div style="background-color: white; padding: 15px; border: 1px solid #e2e8f0; border-left: 4px solid #f97316;">
                <p style="margin: 0; color: #334155; line-height: 1.6;">{inquiry.message}</p>
            </div>
        </div>
        
        <div style="background-color: #0f172a; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This is an automated notification from your website contact form.</p>
            <p style="margin: 5px 0 0 0;">Inquiry ID: {inquiry.id}</p>
        </div>
    </body>
    </html>
    """
    
    def send_smtp_email():
        try:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f"New Inquiry: {inquiry.service_type} - {inquiry.name}"
            msg['From'] = SMTP_EMAIL
            msg['To'] = NOTIFICATION_EMAIL
            
            html_part = MIMEText(html_content, 'html')
            msg.attach(html_part)
            
            # Connect with SSL
            with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
                server.login(SMTP_EMAIL, SMTP_PASSWORD)
                server.sendmail(SMTP_EMAIL, NOTIFICATION_EMAIL, msg.as_string())
            
            return True
        except Exception as e:
            logger.error(f"SMTP error: {str(e)}")
            return False
    
    try:
        result = await asyncio.to_thread(send_smtp_email)
        if result:
            logger.info(f"Email notification sent for inquiry {inquiry.id}")
        return result
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        return None

# Contact Inquiry Routes
@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact_inquiry(input: ContactInquiryCreate):
    inquiry_dict = input.model_dump()
    inquiry_obj = ContactInquiry(**inquiry_dict)
    
    doc = inquiry_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contact_inquiries.insert_one(doc)
    
    # Send email notification (non-blocking)
    asyncio.create_task(send_contact_notification(inquiry_obj))
    
    return inquiry_obj

@api_router.get("/contact", response_model=List[ContactInquiry])
async def get_contact_inquiries():
    inquiries = await db.contact_inquiries.find({}, {"_id": 0}).to_list(1000)
    
    for inquiry in inquiries:
        if isinstance(inquiry.get('created_at'), str):
            inquiry['created_at'] = datetime.fromisoformat(inquiry['created_at'])
    
    return inquiries


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

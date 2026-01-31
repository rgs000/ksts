# Karan Singh Transport Services - Deployment Guide

## Domain & Hosting Information
- **Domain:** https://www.karansinghtransport.com
- **Registrar:** Namecheap
- **Email:** contact@karansinghtransport.com
- **Mail Server:** mail.privateemail.com (Port 465, SSL)

---

## Project Structure
```
/app
├── backend/                 # FastAPI Backend (Python)
│   ├── server.py           # Main API server
│   ├── requirements.txt    # Python dependencies
│   └── .env                # Environment variables
├── frontend/               # React Frontend
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── package.json       # Node dependencies
│   └── .env               # Frontend environment
└── DEPLOYMENT.md          # This file
```

---

## Environment Variables

### Backend (.env)
```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="karan_transport"
CORS_ORIGINS="https://www.karansinghtransport.com,https://karansinghtransport.com"
SMTP_SERVER=mail.privateemail.com
SMTP_PORT=465
SMTP_EMAIL=contact@karansinghtransport.com
SMTP_PASSWORD=Ksts@123
NOTIFICATION_EMAIL=contact@karansinghtransport.com
```

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=https://www.karansinghtransport.com
```

---

## Deployment Options

### Option 1: VPS/Cloud Server (Recommended)

#### Requirements
- Ubuntu 22.04 LTS (or similar)
- 2GB RAM minimum
- Node.js 18+
- Python 3.10+
- MongoDB 6+
- Nginx
- SSL Certificate (Let's Encrypt)

#### Step-by-Step Deployment

```bash
# 1. Update system
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Install Python & pip
sudo apt install -y python3 python3-pip python3-venv

# 4. Install MongoDB
sudo apt install -y mongodb
sudo systemctl enable mongodb
sudo systemctl start mongodb

# 5. Install Nginx
sudo apt install -y nginx

# 6. Clone your repository
cd /var/www
git clone https://github.com/YOUR_USERNAME/karan-transport.git
cd karan-transport

# 7. Setup Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Create production .env file
nano .env
# Add the environment variables from above

# 8. Setup Frontend
cd ../frontend
npm install
npm run build

# 9. Install PM2 for process management
sudo npm install -g pm2

# 10. Start Backend with PM2
cd ../backend
pm2 start "uvicorn server:app --host 127.0.0.1 --port 8001" --name "karan-backend"
pm2 save
pm2 startup
```

#### Nginx Configuration

Create file: `/etc/nginx/sites-available/karansinghtransport.com`

```nginx
server {
    listen 80;
    server_name karansinghtransport.com www.karansinghtransport.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name karansinghtransport.com www.karansinghtransport.com;

    # SSL Configuration (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/karansinghtransport.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/karansinghtransport.com/privkey.pem;

    # Frontend (React build)
    root /var/www/karan-transport/frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API proxy
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/karansinghtransport.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### SSL Certificate (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d karansinghtransport.com -d www.karansinghtransport.com
```

---

### Option 2: Shared Hosting (cPanel)

If using Namecheap shared hosting:

1. **Frontend Only:** Upload `/frontend/build` contents to `public_html`
2. **Backend:** Shared hosting typically doesn't support Python - use a separate VPS or cloud service

---

### Option 3: Docker Deployment

#### docker-compose.yml
```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:6
    restart: always
    volumes:
      - mongodb_data:/data/db
    networks:
      - app-network

  backend:
    build: ./backend
    restart: always
    ports:
      - "8001:8001"
    environment:
      - MONGO_URL=mongodb://mongodb:27017
      - DB_NAME=karan_transport
      - CORS_ORIGINS=https://www.karansinghtransport.com
      - SMTP_SERVER=mail.privateemail.com
      - SMTP_PORT=465
      - SMTP_EMAIL=contact@karansinghtransport.com
      - SMTP_PASSWORD=Ksts@123
      - NOTIFICATION_EMAIL=contact@karansinghtransport.com
    depends_on:
      - mongodb
    networks:
      - app-network

  frontend:
    build: ./frontend
    restart: always
    ports:
      - "3000:80"
    depends_on:
      - backend
    networks:
      - app-network

volumes:
  mongodb_data:

networks:
  app-network:
    driver: bridge
```

#### Backend Dockerfile (`/backend/Dockerfile`)
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8001

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

#### Frontend Dockerfile (`/frontend/Dockerfile`)
```dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

Run with:
```bash
docker-compose up -d
```

---

## Namecheap DNS Configuration

Point your domain to your server:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | YOUR_SERVER_IP | Automatic |
| A | www | YOUR_SERVER_IP | Automatic |
| CNAME | www | karansinghtransport.com | Automatic |

---

## Post-Deployment Checklist

- [ ] DNS propagated (check with `nslookup karansinghtransport.com`)
- [ ] SSL certificate installed and working
- [ ] Frontend loads at https://www.karansinghtransport.com
- [ ] API responds at https://www.karansinghtransport.com/api/
- [ ] Contact form submits successfully
- [ ] Email notifications received at contact@karansinghtransport.com
- [ ] All 6 pages accessible (Home, About, Services, Routes, Network, Contact)
- [ ] Mobile responsive design working

---

## Useful Commands

```bash
# Check backend logs
pm2 logs karan-backend

# Restart backend
pm2 restart karan-backend

# Check nginx logs
sudo tail -f /var/log/nginx/error.log

# Renew SSL certificate
sudo certbot renew

# Update code from GitHub
cd /var/www/karan-transport
git pull
cd frontend && npm run build
pm2 restart karan-backend
```

---

## Support & Contact

- **Company:** Karan Singh Transport Services
- **GSTIN:** 09FPTPS9131F1Z4
- **Website:** https://www.karansinghtransport.com
- **Email:** contact@karansinghtransport.com
- **Phone:** +91 8440004260, +91 8433062315

---

## Recommended VPS Providers

1. **DigitalOcean** - $6/month (1GB RAM) - Easy setup
2. **Vultr** - $6/month - Good performance
3. **Linode** - $5/month - Reliable
4. **AWS Lightsail** - $5/month - AWS ecosystem
5. **Hostinger VPS** - $4/month - Budget friendly

All support the stack: Node.js + Python + MongoDB + Nginx

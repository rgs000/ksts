# Karan Singh Transport Services - PRD

## Original Problem Statement
Create a professional transportation & logistics services website for an Indian freight transport company using exact business details provided.

## Architecture
- **Frontend:** React with Tailwind CSS, Shadcn UI components
- **Backend:** FastAPI with MongoDB
- **Email:** SMTP integration (mail.privateemail.com:465 SSL)

## User Personas
1. **Manufacturing Companies** - Need regular freight transportation
2. **Industrial Businesses** - Require long-haul logistics
3. **Potential Partners** - Transport operators looking to join network

## Core Requirements (Static)
- Company name: Karan Singh Transport Services
- Tagline: Safe • Fast • Reliable Services
- GSTIN: 09FPTPS9131F1Z4
- Fleet: 10 Own Trucks + 50 Associate Trucks
- Routes: Ghaziabad NCR, Agra, Nagpur, Hyderabad, Bengaluru, Chennai

## What's Been Implemented (Jan 2026)

### Pages
- [x] Home - Hero, stats, services preview, routes preview, CTA
- [x] About Us - Company profile, mission/vision, core values
- [x] Services - FTL, Long-haul, Industrial, Dedicated, GST docs
- [x] Service Routes - SVG route map, corridor info
- [x] Associate Network - 2 broker details with contacts
- [x] Contact Us - Form with email notifications

### Features
- [x] Custom company logo (uploaded by user)
- [x] Contact form saves to MongoDB
- [x] SMTP email notifications on form submission
- [x] Responsive design (mobile menu)
- [x] Professional footer with GSTIN

### Technical
- [x] FastAPI backend with /api prefix
- [x] MongoDB for contact inquiries
- [x] SMTP email via mail.privateemail.com

## Prioritized Backlog

### P0 (Critical)
- None - MVP complete

### P1 (Important)
- SEO meta tags for all pages
- Google Analytics integration
- Sitemap.xml generation

### P2 (Nice to Have)
- Quote request calculator
- Testimonials section
- Blog/News section
- WhatsApp chat widget

## Next Tasks
1. Test email delivery by submitting contact form
2. Add SEO meta tags (title, description, Open Graph)
3. Configure Google Analytics

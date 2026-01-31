# Karan Singh Transport Services - Static Website Deployment

## Overview
This is a **static React website** with email functionality via Formspree.
No backend or database required!

## Domain & Hosting Information
- **Domain:** https://www.karansinghtransport.com
- **Registrar:** Namecheap
- **Email:** contact@karansinghtransport.com

---

## How It Works

### Contact Form → Email
The contact form uses **Formspree** (free service) to send emails directly to your inbox.
- Form submissions go to: contact@karansinghtransport.com
- No backend server needed
- No database needed

---

## Deployment Options

### Option 1: Namecheap Shared Hosting (Easiest)

1. **Build the website:**
```bash
cd frontend
yarn install
yarn build
```

2. **Upload to hosting:**
   - Login to Namecheap cPanel
   - Go to File Manager → public_html
   - Upload ALL contents from `frontend/build/` folder
   - Done! Your site is live.

### Option 2: Netlify (Free & Recommended)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Set build settings:
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`
6. Click Deploy!

**Custom Domain Setup on Netlify:**
- Go to Domain Settings → Add custom domain
- Add: `karansinghtransport.com` and `www.karansinghtransport.com`
- Update Namecheap DNS to point to Netlify

### Option 3: Vercel (Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Set root directory: `frontend`
5. Deploy!

### Option 4: GitHub Pages (Free)

1. Build locally: `cd frontend && yarn build`
2. Push `build` folder to `gh-pages` branch
3. Enable GitHub Pages in repo settings

---

## Namecheap DNS Configuration

### For Netlify:
| Type | Host | Value |
|------|------|-------|
| CNAME | @ | your-site.netlify.app |
| CNAME | www | your-site.netlify.app |

### For Your Own Server:
| Type | Host | Value |
|------|------|-------|
| A | @ | YOUR_SERVER_IP |
| A | www | YOUR_SERVER_IP |

---

## Formspree Setup (Already Configured)

The contact form is already set up with Formspree. Emails will be sent to your registered Formspree account.

**Current Formspree endpoint:** `https://formspree.io/f/xwpopwvl`

To change the email recipient:
1. Go to [formspree.io](https://formspree.io)
2. Create account with contact@karansinghtransport.com
3. Create new form
4. Update the endpoint in `frontend/src/pages/Contact.jsx`

---

## File Structure

```
frontend/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ui/       # Shadcn UI components
│   ├── pages/        # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceRoutes.jsx
│   │   ├── AssociateNetwork.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── App.css
│   └── index.css
├── package.json
└── tailwind.config.js
```

---

## Quick Deploy Commands

```bash
# Install dependencies
cd frontend
yarn install

# Development server
yarn start

# Build for production
yarn build

# The 'build' folder contains your static website
# Upload this folder to any static hosting
```

---

## Benefits of Static Hosting

✅ **Free hosting** - Netlify, Vercel, GitHub Pages all free  
✅ **Fast** - No server processing, just static files  
✅ **Secure** - No database to hack  
✅ **Simple** - Just upload files  
✅ **Reliable** - No server to maintain  
✅ **Global CDN** - Fast loading worldwide  

---

## Support & Contact

- **Company:** Karan Singh Transport Services
- **GSTIN:** 09FPTPS9131F1Z4
- **Website:** https://www.karansinghtransport.com
- **Email:** contact@karansinghtransport.com
- **Phone:** +91 8440004260, +91 8433062315

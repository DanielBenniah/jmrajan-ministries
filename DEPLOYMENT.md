# Website Deployment Guide

This guide explains how to deploy your J.M. Rajan Ministries website to make it publicly accessible on the internet.

## Option 1: Vercel (Recommended - Easiest)

Vercel is free for personal projects and perfect for React/Vite apps.

### Method A: Deploy via Command Line (Quick)

1. **Login to Vercel**
   ```bash
   cd /Users/danie/Development/jmrajan-ministries
   vercel login
   ```
   Follow the prompts to authenticate.

2. **Deploy**
   ```bash
   vercel
   ```
   - Answer prompts (accept defaults by pressing Enter)
   - It will deploy and give you a URL like `https://jmrajan-ministries.vercel.app`

3. **Add Environment Variables**
   ```bash
   vercel env add VITE_EMAILJS_SERVICE_ID
   vercel env add VITE_EMAILJS_TEMPLATE_ID
   vercel env add VITE_EMAILJS_PUBLIC_KEY
   ```
   Paste your values from `.env` file when prompted.

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method B: Deploy via Vercel Dashboard (Visual)

1. Go to https://vercel.com/signup
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import `DanielBenniah/jmrajan-ministries` from GitHub
5. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID` = (from your .env)
   - `VITE_EMAILJS_TEMPLATE_ID` = (from your .env)
   - `VITE_EMAILJS_PUBLIC_KEY` = (from your .env)
7. Click "Deploy"

Your site will be live at `https://jmrajan-ministries.vercel.app` (or similar)

### Custom Domain (Optional)

After deployment, you can add a custom domain like `jmrajanministries.com`:
1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your domain and follow DNS instructions

---

## Option 2: Netlify (Alternative - Also Free)

1. Go to https://app.netlify.com/signup
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select `jmrajan-ministries`
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add Environment Variables:
   - Go to Site Settings → Environment Variables
   - Add your three VITE_EMAILJS_* variables
7. Deploy

---

## Option 3: GitHub Pages (Free, but requires extra setup)

GitHub Pages is free but doesn't natively support environment variables, so you'd need to:
1. Build locally with your credentials
2. Push the built files

**Not recommended** for this project because of the environment variable complexity.

---

## Option 4: Traditional Web Hosting (cPanel, etc.)

If you have traditional web hosting:

1. **Build the site locally:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your web host via FTP/cPanel

3. **Important:** You'll need to replace environment variables with actual values before building since traditional hosting doesn't support environment variables easily.

---

## Recommended: Vercel

For your use case, **Vercel** is the best choice because:
- ✅ Free for personal/ministry use
- ✅ Automatic deployments when you push to GitHub
- ✅ Built-in SSL certificate (HTTPS)
- ✅ Environment variables support
- ✅ Fast global CDN
- ✅ Easy custom domain setup

## Quick Start (Vercel CLI)

Run these commands:
```bash
cd /Users/danie/Development/jmrajan-ministries
vercel login
vercel
```

Then add your environment variables and deploy to production:
```bash
vercel --prod
```

Done! Your website will be live on the internet. 🎉


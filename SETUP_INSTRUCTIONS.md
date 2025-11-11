# Setup Instructions for J.M. Rajan Ministries Website

This guide will help you deploy your website with automatic deployments on every commit to the main branch.

## What I've Set Up

✅ GitHub Actions workflow that automatically builds and deploys your site  
✅ Deployment happens every time you push to the `main` branch  
✅ Free hosting on GitHub Pages  
✅ Secure environment variable handling  

---

## Step-by-Step Setup Instructions

### Step 1: Add GitHub Secrets (Your EmailJS Credentials)

Your EmailJS credentials need to be added as GitHub Secrets so they're secure and not exposed in the code.

1. **Go to your GitHub repository**  
   https://github.com/DanielBenniah/jmrajan-ministries

2. **Navigate to Settings**  
   Click on "Settings" tab in your repository

3. **Go to Secrets and Variables**  
   - In the left sidebar, click "Secrets and variables"
   - Click "Actions"

4. **Add Repository Secrets**  
   Click "New repository secret" button and add these **three secrets** one by one:

   **Secret 1:**
   - Name: `VITE_EMAILJS_SERVICE_ID`
   - Value: `service_6ir5afl` (from your .env file)
   - Click "Add secret"

   **Secret 2:**
   - Name: `VITE_EMAILJS_TEMPLATE_ID`
   - Value: `template_ytw7mut` (from your .env file)
   - Click "Add secret"

   **Secret 3:**
   - Name: `VITE_EMAILJS_PUBLIC_KEY`
   - Value: `jycalm22PN1La3VCM` (from your .env file)
   - Click "Add secret"

### Step 2: Enable GitHub Pages

1. **Go to Settings → Pages**  
   In your repository, go to Settings → Pages (in left sidebar)

2. **Configure Source**  
   - Under "Build and deployment"
   - Source: Select **"GitHub Actions"**
   - Click "Save"

### Step 3: Enable GitHub Actions Permissions

1. **Go to Settings → Actions → General**

2. **Workflow permissions**  
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Click "Save"

### Step 4: Push the Workflow

Now push the GitHub Actions workflow to your repository:

```bash
cd /Users/danie/Development/jmrajan-ministries
git add .github/workflows/deploy.yml
git add vite.config.ts
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

### Step 5: Watch the Deployment

1. **Go to the Actions tab** in your GitHub repository  
   https://github.com/DanielBenniah/jmrajan-ministries/actions

2. You should see a workflow running called "Deploy to GitHub Pages"

3. Wait for it to complete (takes about 2-3 minutes)

4. Once complete, your website will be live at:  
   **https://danielbenniah.github.io/jmrajan-ministries/**

---

## Custom Domain Setup (Optional)

If you buy a custom domain like `jmrajanministries.com`, follow these steps:

### Step 1: Add Custom Domain in GitHub

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain: `jmrajanministries.com`
3. Click "Save"
4. Check "Enforce HTTPS" (after DNS propagates)

### Step 2: Configure DNS with Your Domain Registrar

Add these DNS records at your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Use Apex Domain (jmrajanministries.com)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Option B: Use www subdomain (www.jmrajanministries.com)**
```
Type: CNAME
Name: www
Value: danielbenniah.github.io
```

**For both www and non-www, add both above + this:**
```
Type: CNAME
Name: www
Value: danielbenniah.github.io

Type: A records (all 4 from Option A)
```

### Step 3: Update Vite Config (if using custom domain)

If you set up a custom domain, update `vite.config.ts` to use your domain:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // Keep as '/' for custom domain
});
```

---

## How It Works

1. **You make changes** to your website locally
2. **Commit and push** to the `main` branch
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. **GitHub Actions automatically**:
   - Builds your website
   - Injects your EmailJS credentials
   - Deploys to GitHub Pages
4. **Your website is live** in 2-3 minutes! ✨

---

## Testing the Deployment

After setup, test that everything works:

1. Visit your site: https://danielbenniah.github.io/jmrajan-ministries/
2. Test the contact form
3. Check that emails arrive at johnmanoharrajan@gmail.com

---

## Troubleshooting

### Workflow fails?
- Check that all three secrets are added correctly in GitHub
- Make sure GitHub Pages is set to "GitHub Actions" source

### Contact form not working?
- Verify the secrets match your EmailJS credentials
- Check browser console for errors

### Site not updating?
- Check the Actions tab to see if the workflow is running
- Wait 2-3 minutes after pushing

### Images not loading?
- Make sure Logo.jpg and profile.jpg are in the `public/` folder
- Check that they're committed to Git

---

## Need Help?

- Check workflow runs: https://github.com/DanielBenniah/jmrajan-ministries/actions
- View deployment status in Settings → Pages

---

## Summary

✅ Push to `main` branch → Automatic deployment  
✅ Free hosting on GitHub Pages  
✅ Secure credential storage  
✅ Custom domain support  
✅ SSL certificate included  

**Your site will be live at:** https://danielbenniah.github.io/jmrajan-ministries/

Enjoy your new ministry website! 🎉


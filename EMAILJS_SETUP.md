# Email Setup Guide for Contact Form

The contact form is configured to send emails to **johnmanoharrajan@gmail.com** using EmailJS, a free email service.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (johnmanoharrajan@gmail.com)
5. Copy the **Service ID** (looks like `service_xxxxxxx`)

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Message from {{from_name}} - Ministry Website
```

**Body:**
```
You have received a new message from your ministry website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the contact form on jmrajanministries.com
```

4. Copy the **Template ID** (looks like `template_xxxxxxx`)

### 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like a long string)
3. Copy it

### 5. Update the Website Code

Open `src/components/Contact.tsx` and replace these three values:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',        // Replace with your Service ID from step 2
  'YOUR_TEMPLATE_ID',       // Replace with your Template ID from step 3
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'johnmanoharrajan@gmail.com'
  },
  'YOUR_PUBLIC_KEY'         // Replace with your Public Key from step 4
);
```

### 6. Test the Form

1. Save the file
2. The website will automatically reload
3. Fill out the contact form and submit
4. Check johnmanoharrajan@gmail.com for the test email

## Example Configuration

After setup, your code should look like this (with your actual IDs):

```typescript
await emailjs.send(
  'service_abc1234',        // Your actual Service ID
  'template_xyz5678',       // Your actual Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'johnmanoharrajan@gmail.com'
  },
  'xK9mP2vQ8rT4nL6jH'      // Your actual Public Key
);
```

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

This should be sufficient for a ministry contact form.

## Troubleshooting

- **Emails not sending?** Check browser console for errors
- **Wrong email format?** Verify the template variable names match: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- **Service blocked?** Make sure you've verified your email in EmailJS dashboard

## Alternative: Direct Email Link

If you prefer a simpler solution without EmailJS setup, you can change the form to open the user's email client instead. Let me know if you'd like this option.


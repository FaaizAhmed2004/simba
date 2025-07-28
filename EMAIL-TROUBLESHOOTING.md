# Email System Troubleshooting Guide

## 🚨 Current Issues
1. **Logo not displaying in Google search/social sharing**
2. **Support page forms not sending emails**

## ✅ Fixes Applied

### Logo Display Issues
- [x] Updated Open Graph images to use absolute URLs
- [x] Added enhanced meta tags for better logo display
- [x] Updated Twitter Card images with absolute URLs
- [x] Added proper image dimensions and alt text
- [x] Created favicon setup guide

### Email System Improvements
- [x] Enhanced error logging in email service
- [x] Added email validation in API routes
- [x] Improved job queue logging
- [x] Created debug email endpoint
- [x] Added environment variable validation

## 🔧 Testing Email System

### 1. Check Email Configuration
Visit: `http://localhost:3000/api/debug-email`

This will show:
- Environment variable status
- Job queue information
- Available test actions

### 2. Test Email Connection
Visit: `http://localhost:3000/api/debug-email?action=test-connection`

This tests SMTP connection without sending emails.

### 3. Send Test Email (Direct)
Visit: `http://localhost:3000/api/debug-email?action=send-test`

This sends an email directly (bypassing queue) to test basic functionality.

### 4. Test Email Queue
Visit: `http://localhost:3000/api/debug-email?action=test-queue`

This tests the job queue system used by support forms.

### 5. Original Test Endpoint
Visit: `http://localhost:3000/api/test-email?send=true`

## 🔍 Common Email Issues & Solutions

### Issue 1: "Email credentials not configured"
**Solution:** Check `.env.local` file has:
```env
EMAIL_USER=Cs@simbadispatchservices.com
EMAIL_PASS=Simba@km
EMAIL_HOST=smtp.ionos.com
EMAIL_PORT=587
EMAIL_TO=Cs@simbadispatchservices.com
```

### Issue 2: "Connection timeout" or "ECONNREFUSED"
**Possible Causes:**
- IONOS SMTP server is down
- Firewall blocking port 587
- Incorrect SMTP settings

**Solutions:**
1. Try alternative SMTP settings:
   ```env
   EMAIL_HOST=smtp.ionos.com
   EMAIL_PORT=465
   EMAIL_SECURE=true
   ```

2. Test with Gmail SMTP (temporary):
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Issue 3: "Authentication failed"
**Solutions:**
1. Verify email credentials in IONOS control panel
2. Check if 2FA is enabled (may need app password)
3. Ensure SMTP is enabled for the email account

### Issue 4: Emails queued but not sent
**Check:**
1. Job queue status: `/api/debug-email`
2. Server logs for processing errors
3. Job queue is running (automatic in development)

## 📧 Support Form Email Flow

1. **User submits form** → Support page
2. **Form data validated** → API route
3. **Reference number generated** → Unique ID
4. **Emails queued** → Background processing
5. **Job queue processes** → Sends emails
6. **User gets confirmation** → Success message

## 🔧 Manual Email Testing

### Test Support Forms Manually

1. **Complaint Form:**
   ```bash
   curl -X POST http://localhost:3000/api/support/complaint \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "serviceType": "truck-dispatch",
       "complaintCategory": "service-quality",
       "description": "Test complaint description"
     }'
   ```

2. **Feedback Form:**
   ```bash
   curl -X POST http://localhost:3000/api/support/feedback \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "serviceUsed": "Truck Dispatching",
       "rating": 5,
       "feedbackType": "compliment",
       "comments": "Great service!",
       "recommendToOthers": true
     }'
   ```

3. **Account Form:**
   ```bash
   curl -X POST http://localhost:3000/api/support/account \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "accountNumber": "12345",
       "requestType": "billing-inquiry",
       "description": "Test account request",
       "preferredContactMethod": "email"
     }'
   ```

## 🚀 Production Deployment Checklist

### Before Deployment:
- [ ] Test all email endpoints locally
- [ ] Verify IONOS SMTP credentials
- [ ] Generate proper favicon files
- [ ] Test social media sharing
- [ ] Verify Google Search Console setup

### After Deployment:
- [ ] Test email functionality on production
- [ ] Submit sitemap to Google Search Console
- [ ] Test social media sharing with production URLs
- [ ] Monitor email delivery rates
- [ ] Check server logs for email errors

## 📊 Monitoring Email Health

### Key Metrics to Monitor:
1. **Email Queue Length** - Should stay low
2. **Failed Job Count** - Should be minimal
3. **Email Delivery Rate** - Track successful sends
4. **Response Times** - API should respond quickly

### Log Locations:
- **Development:** Console output
- **Production:** Server logs
- **Email Service:** IONOS control panel

## 🆘 Emergency Contacts

If email system fails completely:
1. **Temporary Solution:** Use contact form on main contact page
2. **Direct Email:** Cs@simbadispatchservices.com
3. **Phone Support:** +1 4107555627

## 📈 Performance Optimization

Current optimizations:
- ✅ Non-blocking email queue
- ✅ Fast API responses (< 100ms)
- ✅ Automatic retry logic
- ✅ Background job processing
- ✅ Connection pooling

The email system is designed to be fast and reliable. Forms should respond immediately while emails are processed in the background.
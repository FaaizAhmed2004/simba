# Google Analytics & Tag Manager Setup Guide

## 🎯 Getting Your Google Analytics ID (GA4)

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring" or "Get started today"
3. Sign in with your Google account

### Step 2: Set Up Your Property
1. **Account Setup:**
   - Account Name: `Simba Dispatch Services LLC`
   - Country: `United States`
   - Currency: `US Dollar`

2. **Property Setup:**
   - Property Name: `Simba Dispatch Services Website`
   - Reporting Time Zone: `(GMT-05:00) Eastern Time`
   - Currency: `US Dollar`

3. **Business Information:**
   - Industry Category: `Transportation and Logistics`
   - Business Size: `Small (1-100 employees)`
   - How you intend to use Analytics: Select relevant options

### Step 3: Set Up Data Stream
1. Choose "Web" as your platform
2. **Website URL:** `https://simbadispatchservices.com`
3. **Stream Name:** `Simba Dispatch Website`
4. Click "Create stream"

### Step 4: Get Your Measurement ID
After creating the data stream, you'll see:
- **Measurement ID:** `G-XXXXXXXXXX` (this is what you need!)
- Copy this ID for your environment variables

## 🏷️ Getting Your Google Tag Manager ID (Optional but Recommended)

### Step 1: Create GTM Account
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account"
3. Sign in with your Google account

### Step 2: Set Up Container
1. **Account Setup:**
   - Account Name: `Simba Dispatch Services LLC`
   - Country: `United States`

2. **Container Setup:**
   - Container Name: `simbadispatchservices.com`
   - Target Platform: `Web`

### Step 3: Get Your Container ID
After creating the container:
- **Container ID:** `GTM-XXXXXXX` (this is what you need!)
- Copy this ID for your environment variables

## 🔧 Configure Your Environment Variables

### Add to your `.env.local` file:
```env
# Google Analytics & Tag Manager
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

### Example with real IDs:
```env
# Google Analytics & Tag Manager
GOOGLE_ANALYTICS_ID=G-ABC123DEF4
GOOGLE_TAG_MANAGER_ID=GTM-ABC123D
```

## 📊 What Each Tool Does

### Google Analytics 4 (GA4)
- **Tracks website traffic** - Visitors, page views, sessions
- **User behavior** - What pages users visit, how long they stay
- **Conversion tracking** - Form submissions, quote requests
- **Audience insights** - Demographics, interests, location
- **Real-time data** - Live visitor activity

### Google Tag Manager (GTM)
- **Tag management** - Centralized control of tracking codes
- **Event tracking** - Button clicks, form submissions, downloads
- **Custom triggers** - Advanced tracking conditions
- **Third-party integrations** - Facebook Pixel, LinkedIn Insight, etc.
- **No code changes** - Add/modify tracking without developer

## 🎯 Recommended Setup Priority

### Essential (Do First):
1. ✅ **Google Analytics** - Basic website tracking
2. ✅ **Google Search Console** - SEO monitoring (already done)

### Advanced (Do Later):
3. **Google Tag Manager** - Advanced tracking and events
4. **Google Ads** - If you plan to run paid advertising
5. **Facebook Pixel** - For social media advertising

## 🔍 Verification Steps

### Test Google Analytics
1. Add your GA4 ID to `.env.local`
2. Restart your development server: `npm run dev`
3. Visit your website: `http://localhost:3000`
4. Check Google Analytics "Realtime" report
5. You should see your visit appear within minutes

### Test Google Tag Manager
1. Add your GTM ID to `.env.local`
2. Restart your development server
3. Visit your website
4. Check browser developer tools for GTM container load
5. Use GTM Preview mode to test

## 📋 Complete Setup Checklist

### Google Analytics Setup:
- [ ] Create Google Analytics account
- [ ] Set up GA4 property
- [ ] Create web data stream
- [ ] Copy Measurement ID (G-XXXXXXXXXX)
- [ ] Add to `.env.local`
- [ ] Test tracking is working

### Google Tag Manager Setup (Optional):
- [ ] Create GTM account
- [ ] Set up web container
- [ ] Copy Container ID (GTM-XXXXXXX)
- [ ] Add to `.env.local`
- [ ] Configure basic tags
- [ ] Test container is loading

### Integration with Your Website:
- [ ] Environment variables configured
- [ ] Development server restarted
- [ ] Analytics tracking verified
- [ ] Real-time data appearing
- [ ] Deploy to production
- [ ] Verify production tracking

## 🚀 Advanced Configuration (After Basic Setup)

### Google Analytics Goals
Set up conversion tracking for:
- **Contact form submissions**
- **Quote requests**
- **Phone number clicks**
- **Email clicks**
- **Service page visits**

### Google Tag Manager Events
Track important user actions:
- **Form submissions**
- **Button clicks**
- **File downloads**
- **External link clicks**
- **Scroll depth**

## 🔒 Privacy & Compliance

### Important Considerations:
- **Cookie consent** - Consider adding cookie banner
- **Privacy policy** - Update to mention analytics
- **Data retention** - Configure appropriate retention periods
- **IP anonymization** - Already enabled in GA4 by default

### GDPR Compliance:
- Analytics data is anonymized
- Users can opt-out via browser settings
- Consider cookie consent management

## 📞 Support Resources

### Google Analytics Help:
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GA4 Help Center](https://support.google.com/analytics/)

### Google Tag Manager Help:
- [GTM Setup Guide](https://support.google.com/tagmanager/answer/6103696)
- [GTM Help Center](https://support.google.com/tagmanager/)

## 🎯 Quick Start Summary

**Minimum Required:**
1. Get Google Analytics ID: `G-XXXXXXXXXX`
2. Add to `.env.local`: `GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX`
3. Restart server and test

**Recommended:**
1. Also get GTM ID: `GTM-XXXXXXX`
2. Add to `.env.local`: `GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX`
3. Configure advanced tracking later

Your website is already configured to use these IDs once you add them to your environment variables!
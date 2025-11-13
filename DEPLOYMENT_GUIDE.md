# 🚀 Cynea AI Website - Production Deployment Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Building for Production](#building-for-production)
4. [Deployment Options](#deployment-options)
5. [Post-Deployment Checklist](#post-deployment-checklist)
6. [Performance Optimization](#performance-optimization)
7. [Maintenance & Updates](#maintenance--updates)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Tools
- **Node.js**: v18 or later ([Download](https://nodejs.org/))
- **npm** or **pnpm**: Latest version
- **Git**: For version control
- **Domain Name**: Your custom domain (e.g., cynea.ai)
- **SSL Certificate**: For HTTPS (usually provided by hosting platform)

### Required Accounts
Choose one deployment platform:
- [Vercel](https://vercel.com) (Recommended for React/Vite)
- [Netlify](https://www.netlify.com)
- [GitHub Pages](https://pages.github.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

---

## Environment Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cynea-ai-website.git
cd cynea-ai-website
cd "Website Copy and Structure (1)"
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Environment Variables
Create a `.env.production` file in the root directory:

```bash
# Public Environment Variables
VITE_APP_URL=https://cynea.ai
VITE_API_URL=https://api.cynea.ai
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Form (if using backend API)
VITE_CONTACT_API_ENDPOINT=https://api.cynea.ai/contact

# Analytics
VITE_ENABLE_ANALYTICS=true

# Optional: Feature Flags
VITE_ENABLE_CHAT=false
VITE_ENABLE_BLOG=false
```

**⚠️ Important**:
- Only `VITE_` prefixed variables are exposed to the client
- Never commit `.env` files with sensitive data to Git
- Add `.env.production` to `.gitignore`

---

## Building for Production

### 1. Test Build Locally
```bash
# Run development server to test
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### 2. Verify Build Output
After running `npm run build`, check the `dist/` folder:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── [other-files]
```

### 3. Pre-Deployment Checklist
- [ ] All environment variables configured
- [ ] Build completes without errors
- [ ] No console errors when testing locally
- [ ] All links work correctly
- [ ] Forms submit properly (test validation)
- [ ] Cookie consent banner appears
- [ ] Legal pages accessible (/privacy-policy, /terms-of-service, /accessibility)
- [ ] SEO meta tags present (check with browser DevTools)
- [ ] Responsive design works on mobile, tablet, desktop

---

## Deployment Options

### Option A: Vercel (Recommended) ⭐

**Why Vercel?**
- Optimized for React/Vite
- Automatic HTTPS
- CDN included
- Excellent performance
- Zero-configuration deployment

**Step-by-Step Deployment:**

1. **Install Vercel CLI** (optional, for command-line deployment)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub (Recommended)**
   - Push your code to GitHub
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset**: Vite
     - **Root Directory**: `Website Copy and Structure (1)`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Add environment variables in Vercel dashboard
   - Click "Deploy"

3. **Deploy via CLI**
   ```bash
   cd "Website Copy and Structure (1)"
   vercel
   ```
   Follow the prompts to link your project and deploy.

4. **Custom Domain Setup**
   - In Vercel dashboard, go to "Settings" > "Domains"
   - Add your custom domain (e.g., `cynea.ai`)
   - Follow DNS configuration instructions
   - Vercel automatically provisions SSL certificate

**Vercel Environment Variables:**
```
Settings > Environment Variables > Add
```
Add all your `VITE_*` variables.

---

### Option B: Netlify

**Step-by-Step Deployment:**

1. **Build Configuration**
   Create `netlify.toml` in root directory:
   ```toml
   [build]
     base = "Website Copy and Structure (1)"
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"
       Permissions-Policy = "geolocation=(), microphone=(), camera=()"
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   cd "Website Copy and Structure (1)"
   netlify deploy --prod
   ```

3. **Deploy via Netlify UI**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your Git repository
   - Configure build settings (same as `netlify.toml`)
   - Deploy

4. **Custom Domain**
   - Netlify dashboard > "Domain settings"
   - Add custom domain
   - Update DNS records as instructed

---

### Option C: GitHub Pages

**Note**: GitHub Pages requires a bit more setup for client-side routing.

1. **Install `gh-pages` package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update Vite Config** (`vite.config.ts`)
   ```typescript
   export default defineConfig({
     base: '/repository-name/', // Your repo name
     // ... other config
   });
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Repository > Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` > `/root`
   - Save

---

### Option D: Custom Server (VPS/Cloud)

For deploying on your own server (DigitalOcean, AWS EC2, etc.):

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder to server**
   ```bash
   scp -r dist/* user@your-server.com:/var/www/cynea.ai/
   ```

3. **Nginx Configuration** (`/etc/nginx/sites-available/cynea.ai`)
   ```nginx
   server {
       listen 80;
       server_name cynea.ai www.cynea.ai;

       # Redirect to HTTPS
       return 301 https://$host$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name cynea.ai www.cynea.ai;

       ssl_certificate /etc/letsencrypt/live/cynea.ai/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/cynea.ai/privkey.pem;

       root /var/www/cynea.ai;
       index index.html;

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Security headers
       add_header X-Frame-Options "DENY" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header Referrer-Policy "strict-origin-when-cross-origin" always;
   }
   ```

4. **Enable site and restart Nginx**
   ```bash
   sudo ln -s /etc/nginx/sites-available/cynea.ai /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

5. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d cynea.ai -d www.cynea.ai
   ```

---

## Post-Deployment Checklist

### Immediate Actions

- [ ] **Test the live site**: Visit your production URL
- [ ] **Verify HTTPS**: Check for green padlock in browser
- [ ] **Test all pages**: Click through every page and link
- [ ] **Test forms**: Submit contact form (check spam folder for confirmation)
- [ ] **Test cookie consent**: Clear cookies and verify banner appears
- [ ] **Mobile testing**: Test on actual mobile devices
- [ ] **Cross-browser testing**: Test on Chrome, Firefox, Safari, Edge

### Analytics & Monitoring

1. **Setup Google Analytics** (or alternative)
   - Create GA4 property
   - Add tracking ID to `.env.production`
   - Rebuild and redeploy
   - Verify tracking in GA Real-Time reports

2. **Setup Google Search Console**
   - Add and verify your property
   - Submit sitemap: `https://cynea.ai/sitemap.xml`
   - Monitor indexing status

3. **Setup Monitoring**
   - [UptimeRobot](https://uptimerobot.com): Monitor uptime
   - [Sentry](https://sentry.io): Error tracking (optional)
   - [Hotjar](https://www.hotjar.com): User behavior analytics (optional)

---

## Performance Optimization

### 1. Lighthouse Audit
Run Google Lighthouse in Chrome DevTools:
```
DevTools > Lighthouse > Generate report
```

**Target Scores:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 90+
- SEO: 90+

### 2. Image Optimization

**Compress Images:**
```bash
# Install imagemin (optional)
npm install -g imagemin-cli

# Compress images
imagemin src/assets/*.{jpg,png} --out-dir=src/assets/optimized
```

**Recommended Tools:**
- [TinyPNG](https://tinypng.com): Online compression
- [Squoosh](https://squoosh.app): Google's image optimizer
- [ImageOptim](https://imageoptim.com): Mac app

**Use Modern Formats:**
- Convert images to WebP format for better compression
- Provide fallbacks for older browsers

### 3. Code Splitting

Vite automatically splits code, but you can optimize further:

```typescript
// Lazy load routes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
// etc.
```

### 4. CDN Configuration

Most modern platforms (Vercel, Netlify) include CDN by default. If using custom server:
- Use Cloudflare CDN (free tier available)
- Configure caching headers properly

### 5. Performance Monitoring

**Core Web Vitals to Monitor:**
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## Maintenance & Updates

### Regular Maintenance Schedule

**Weekly:**
- [ ] Check website uptime reports
- [ ] Review error logs (if monitoring setup)
- [ ] Test contact form

**Monthly:**
- [ ] Review analytics data
- [ ] Check for broken links
- [ ] Update dependencies: `npm outdated` then `npm update`
- [ ] Review and respond to user feedback

**Quarterly:**
- [ ] Run Lighthouse audit
- [ ] Review and update legal pages (Privacy Policy, Terms)
- [ ] Security audit: `npm audit` and fix vulnerabilities
- [ ] Review cookie consent compliance

**Annually:**
- [ ] Renew SSL certificate (usually automatic)
- [ ] Review entire content for accuracy
- [ ] Update copyright year in footer
- [ ] Conduct full accessibility audit

### Updating the Website

**For Content Changes:**
1. Make changes locally
2. Test thoroughly
3. Commit to Git: `git commit -m "Update: [description]"`
4. Push to GitHub: `git push`
5. Auto-deployment triggers (if setup with Vercel/Netlify)

**For Major Updates:**
1. Create a new branch: `git checkout -b feature/new-feature`
2. Make changes and test
3. Create pull request for review
4. Merge to main after approval
5. Deploy automatically or manually

### Backup Strategy

**What to Backup:**
- Codebase (Git handles this)
- Form submissions (if storing locally)
- Analytics data (export regularly)
- Configuration files

**Recommended:**
- Keep Git repository as single source of truth
- Export analytics monthly
- Keep environment variable backups in secure location (password manager)

---

## Troubleshooting

### Common Issues

**1. "404 Not Found" on Page Refresh**
**Cause**: Server not configured for client-side routing
**Solution**:
- **Vercel/Netlify**: Should work automatically
- **Nginx**: Add `try_files $uri /index.html;`
- **Apache**: Add `.htaccess` with rewrite rules

**2. Environment Variables Not Working**
**Cause**: Variables not prefixed with `VITE_` or not added to hosting platform
**Solution**:
- Ensure all client-side vars start with `VITE_`
- Re-add variables in hosting platform dashboard
- Rebuild and redeploy

**3. Slow Page Load**
**Cause**: Large images or unoptimized assets
**Solution**:
- Compress images
- Enable CDN
- Check Lighthouse report for specific issues

**4. Cookie Consent Not Showing**
**Cause**: localStorage already has consent stored
**Solution**:
- Clear browser localStorage: DevTools > Application > Local Storage > Clear
- Test in incognito mode

**5. Form Not Submitting**
**Cause**: CORS issues or API endpoint not configured
**Solution**:
- Update form to use correct endpoint
- Check browser console for errors
- Verify CORS configuration on backend

### Getting Help

**Resources:**
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Vercel Support](https://vercel.com/support)
- [Netlify Support](https://www.netlify.com/support/)

**Contact for Support:**
- GitHub Issues: [Your Repo Issues]
- Email: [Your Email]
- Documentation: This guide

---

## Security Best Practices

### 1. HTTPS Everywhere
- ✅ All platforms provide automatic HTTPS
- ✅ Force HTTPS redirects
- ✅ Use HSTS headers

### 2. Security Headers
Already configured in the deployment examples above:
- `X-Frame-Options`: Prevents clickjacking
- `X-Content-Type-Options`: Prevents MIME sniffing
- `Referrer-Policy`: Controls referrer information
- `Content-Security-Policy`: Prevents XSS attacks (optional, advanced)

### 3. Dependency Updates
```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Update all packages
npm update
```

### 4. Sensitive Data
- ❌ Never commit API keys, passwords, or secrets to Git
- ✅ Use environment variables
- ✅ Add `.env*` to `.gitignore`
- ✅ Use secrets management for production (Vercel/Netlify provide this)

---

## Compliance Checklist

### UK GDPR Compliance
- [x] Privacy Policy page created
- [x] Cookie consent banner implemented
- [x] Contact form GDPR checkboxes
- [x] Data processing transparency
- [x] Right to access/deletion mentioned
- [ ] Implement data deletion mechanism (if storing user data)
- [ ] Register with ICO (if applicable based on data processing)

### WCAG 2.1 AA Compliance
- [x] Semantic HTML structure
- [x] ARIA labels where needed
- [x] Keyboard navigation support
- [x] Color contrast ratios meet AA standard
- [x] Skip-to-content link
- [x] Accessibility Statement page
- [x] Screen reader compatible

### Additional Compliance
- [x] Terms of Service page
- [x] Accessibility Statement
- [ ] Cookie Policy (included in Privacy Policy)
- [ ] DMCA/Copyright policy (if hosting user content)

---

## Performance Benchmarks

### Target Metrics
- **Load Time**: < 3 seconds (on 3G connection)
- **Time to Interactive**: < 5 seconds
- **First Contentful Paint**: < 1.8 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Total Page Size**: < 3 MB

### Optimization Checklist
- [x] Images optimized and compressed
- [x] Code minified and bundled (Vite does this)
- [x] Gzip compression enabled
- [ ] Lazy loading for images (add as needed)
- [x] CSS and JS bundled
- [ ] Service Worker for offline support (optional, advanced)

---

## Final Pre-Launch Checklist

### Content
- [ ] All placeholder text replaced with final copy
- [ ] All "TODO" comments addressed
- [ ] Company information updated (address, phone, email)
- [ ] Social media links added (if applicable)
- [ ] Copyright year correct
- [ ] All images have alt text

### Technical
- [ ] SSL certificate installed
- [ ] Custom domain configured
- [ ] Redirects working (www → non-www or vice versa)
- [ ] 404 page exists and styled
- [ ] Sitemap generated and submitted
- [ ] robots.txt configured
- [ ] Favicon present and displays correctly
- [ ] Open Graph images for social sharing

### Legal & Compliance
- [ ] Privacy Policy reviewed by legal team (recommended)
- [ ] Terms of Service reviewed
- [ ] Cookie consent working
- [ ] GDPR compliance verified
- [ ] Accessibility tested

### Testing
- [ ] All forms tested and working
- [ ] All links checked (no broken links)
- [ ] Mobile responsive on all screen sizes
- [ ] Cross-browser testing complete
- [ ] Page load speed acceptable
- [ ] Analytics tracking verified

---

## Success! 🎉

Your Cynea AI website is now live and production-ready!

### Next Steps
1. Monitor analytics for user behavior
2. Collect user feedback
3. Plan iterative improvements
4. Keep content fresh and updated
5. Stay on top of security updates

**Questions or Issues?**
Refer to this guide or contact your development team.

---

**Last Updated**: November 2025
**Version**: 1.0
**Maintained by**: Cynea AI Development Team

# Cloudflare Pages Deployment Setup

This guide walks through deploying this Remix application to Cloudflare Pages.

## Option 1: Cloudflare Dashboard (Recommended)

### Step 1: Create a Cloudflare Pages Project

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
3. Select your GitHub repository
4. Click **Begin setup**

### Step 2: Configure Build Settings

In the "Set up builds and deployments" section, configure:

| Setting | Value |
|---------|-------|
| **Production branch** | `main` (or your default branch) |
| **Build command** | `npm run build` |
| **Build output directory** | `public` |

**IMPORTANT:** Leave the "Deploy command" field empty. Cloudflare Pages will automatically deploy after build.

### Step 3: Set Environment Variables

Click **Add variable** and add the following environment variables:

- `POK_ENVIRONMENT` = your Pokko environment ID
- `POK_PROJECT` = your Pokko project ID
- `POK_TOKEN` = your Pokko production token
- `POK_TOKEN_PREVIEW` = your Pokko preview token
- `NODE_VERSION` = `18` (optional, recommended)

### Step 4: Deploy

1. Click **Save and Deploy**
2. Cloudflare will:
   - Clone your repository
   - Run `npm install`
   - Run `npm run build`
   - Deploy the contents of `public/` directory
3. Wait for build to complete (~2-3 minutes)
4. Your site will be live at `https://<project-name>.pages.dev`

### Step 5: Configure Custom Domain (Optional)

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `www.bmck.au`)
4. Follow the DNS setup instructions
5. Wait for DNS propagation

---

## Option 2: Manual Deployment via CLI

### Prerequisites

```bash
npm install -g wrangler
wrangler login
```

### Build Locally

```bash
npm run build
```

This creates:
- `public/build/` - Client assets
- `functions/[[path]].js` - Server function

### Deploy

```bash
wrangler pages deploy ./public --project-name=your-project-name
```

On first deployment, Wrangler will:
1. Create a new Cloudflare Pages project
2. Upload your files
3. Deploy to production

### Set Environment Variables via CLI

```bash
wrangler pages secret put POK_ENVIRONMENT --project-name=your-project-name
wrangler pages secret put POK_PROJECT --project-name=your-project-name
wrangler pages secret put POK_TOKEN --project-name=your-project-name
wrangler pages secret put POK_TOKEN_PREVIEW --project-name=your-project-name
```

You'll be prompted to enter each value.

---

## Troubleshooting

### Build Fails with "Cannot find module"

**Solution:** Ensure all dependencies are in `package.json` dependencies, not just devDependencies. Run:
```bash
npm install
npm run build
```

### Environment Variables Not Working

**Solution:**
- For dashboard deployment: Check that variables are set in the Cloudflare Pages project settings
- For CLI deployment: Use `wrangler pages secret put` not `wrangler secret put`
- Variable names are case-sensitive

### "wrangler deploy" Error

**Solution:** Use `wrangler pages deploy` for Pages projects, not `wrangler deploy` (which is for Workers).

### Build Works Locally But Fails on Cloudflare

**Solution:**
- Check Node.js version matches (set `NODE_VERSION=18` environment variable)
- Ensure no Node.js built-in modules are being used (fs, path, etc.)
- Check build logs for specific error messages

### Functions Not Working

**Solution:**
- Verify `functions/[[path]].js` exists in build output
- Check that `serverBuildPath: "functions/[[path]].js"` is set in remix.config.js
- Ensure `server.ts` exports `onRequest` function

---

## Deployment Checklist

Before deploying to production:

- [ ] All environment variables are set in Cloudflare Pages settings
- [ ] Build succeeds locally with `npm run build`
- [ ] Test locally with `wrangler pages dev ./public`
- [ ] All routes work (home, posts, RSS, sitemap, etc.)
- [ ] GraphQL queries to Pokko CMS work
- [ ] Custom domain DNS is configured (if using)
- [ ] SSL/TLS certificate is active

---

## Continuous Deployment

Once set up via the Cloudflare Dashboard:

1. Push changes to your GitHub repository
2. Cloudflare Pages automatically:
   - Detects the push
   - Runs build
   - Deploys to production (if pushed to main branch)
   - Creates preview deployment (if pushed to other branches)

Every branch gets a unique preview URL: `https://<branch-name>.<project-name>.pages.dev`

---

## Production URLs

After successful deployment, your site will be available at:

- **Cloudflare Pages URL:** `https://<project-name>.pages.dev`
- **Custom Domain:** `https://www.bmck.au` (if configured)

---

## Updating the Deployment

### Via Git (Automatic)

Just push to your repository:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Cloudflare Pages will automatically rebuild and deploy.

### Via CLI (Manual)

```bash
npm run build
wrangler pages deploy ./public --project-name=your-project-name
```

---

## Monitoring

View deployment status and logs:

1. **Dashboard:** Cloudflare Pages project > **Deployments**
2. **CLI:** `wrangler pages deployment list --project-name=your-project-name`

View function logs:

1. **Dashboard:** Cloudflare Pages project > **Functions** > **Logs**
2. **Real-time:** Use `wrangler pages deployment tail` during deployment

---

## Cost

Cloudflare Pages is free for:
- Unlimited sites
- Unlimited requests
- Unlimited bandwidth
- 500 builds/month

Paid plans available for more builds and advanced features.

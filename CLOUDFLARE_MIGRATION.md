# Cloudflare Workers Migration Summary

This document summarizes the changes made to migrate this Remix application from Node.js to Cloudflare Workers.

## Remix Version

This project has been upgraded to **Remix v2.17.1** (latest stable) with Cloudflare Workers support.

## Changes Made

### 1. Package Dependencies

**Removed:**
- `@remix-run/node` - Node.js-specific Remix adapter (replaced with `@remix-run/cloudflare`)
- `@remix-run/serve` - Node.js HTTP server (no longer needed)
- `@types/node` - Node.js type definitions (no longer needed)
- `dotenv` - Environment variable loading (replaced with Wrangler `.dev.vars`)
- `rss` - RSS generation library (had Node.js dependencies)
- `sitemap` - Sitemap generation library (had Node.js dependencies)
- `@types/rss` - TypeScript types for rss package

**Added:**
- `@remix-run/cloudflare@^2.17.1` - Cloudflare Workers Remix adapter
- `@remix-run/cloudflare-pages@^2.17.1` - Cloudflare Pages integration
- `@cloudflare/workers-types@^4.20241022.0` - Cloudflare Workers type definitions (dev)
- `wrangler@^3.78.0` - Cloudflare Workers CLI (dev)
- `isbot@^5.1.0` - Bot detection (Remix v2 requirement)

**Updated to v2:**
- `@remix-run/react@^2.17.1` (from 1.17.1)
- `@remix-run/dev@^2.17.1` (from 1.17.1)

### 2. Configuration Files

**[remix.config.js](remix.config.js)**
- Changed `serverModuleFormat` from `"cjs"` to `"esm"`
- Added `server: "./server.ts"` - Points to Cloudflare Workers entry
- Set `serverBuildPath: "functions/[[path]].js"` - Cloudflare Pages function path
- Added `serverConditions: ["worker"]` - Use worker-compatible packages
- Set `serverDependenciesToBundle: "all"` - Bundle all dependencies
- Added `serverPlatform: "neutral"` - Platform-agnostic build
- Enabled `serverMinify: true` - Minify worker code

**[wrangler.toml](wrangler.toml)** (new)
- Configuration for Cloudflare Workers/Pages deployment
- Compatibility date set to 2024-01-01
- Production environment configured with custom domain support
- Environment variables documented (set via `wrangler secret put`)

**[tsconfig.json](tsconfig.json)**
- Added `"WebWorker"` to lib array
- Added `"@cloudflare/workers-types"` to types array

**[.gitignore](.gitignore)**
- Added `functions/` - Generated Cloudflare Workers functions
- Added `.dev.vars` - Local development environment variables
- Added `.wrangler/` - Wrangler cache directory

### 3. Source Code Changes

**[app/entry.server.tsx](app/entry.server.tsx)**
- Changed import from `@remix-run/node` to `@remix-run/cloudflare`

**[app/root.tsx](app/root.tsx)**
- Changed import from `@remix-run/node` to `@remix-run/cloudflare`

**All route files in [app/routes/](app/routes/)**
- Changed all imports from `@remix-run/node` to `@remix-run/cloudflare`
- Includes: loaders, actions, headers, meta functions

**[app/pokko/index.ts](app/pokko/index.ts)**
- Refactored to support Cloudflare Workers environment
- Created `createClient()` function to accept environment variables
- Maintains backward compatibility with `process.env` for development
- Supports both `process.env` style and Cloudflare env object style variables

### 4. New Files

**[server.ts](server.ts)**
- Cloudflare Workers entry point
- Uses `createPagesFunctionHandler` from `@remix-run/cloudflare-pages`
- Exports `onRequest` function for Cloudflare Pages Functions
- Passes environment context to loaders

**[.dev.vars](.dev.vars)**
- Local development environment variables for Wrangler
- Contains Pokko CMS credentials (POK_ENVIRONMENT, POK_PROJECT, POK_TOKEN, POK_TOKEN_PREVIEW)
- Git-ignored for security

### 5. Scripts Updated

**package.json scripts:**
- `dev`: Changed from `node -r dotenv/config node_modules/.bin/remix dev` to `remix dev`
- `start`: Changed from `node -r dotenv/config node_modules/.bin/remix-serve build` to `wrangler pages dev ./public`
- `deploy`: New script - `npm run build && wrangler pages deploy ./public`
- `model`: Simplified from `node -r dotenv/config node_modules/.bin/graphql-codegen` to `graphql-codegen`
- `cf-typegen`: New script - `wrangler types` (generates Cloudflare Workers types)

## Next Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all the new Cloudflare Workers dependencies.

### 2. Test Locally

```bash
npm run dev
```

The development server should start with Wrangler. Test all routes to ensure they work correctly:
- Home page: `/`
- Blog posts: `/posts/pages/1`, `/posts/2024/some-post`
- RSS feed: `/rss.xml`
- Sitemap: `/sitemap.xml`
- Flight calendar: `/flights.ics`
- QR code generator: `/qr`
- CV: `/cv`

### 3. Build for Production

```bash
npm run build
```

Verify that:
- `public/build/` contains client assets
- `functions/[[path]].js` is created (the Cloudflare Worker)

### 4. Deploy to Cloudflare Pages

#### Option A: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)
3. Click "Create a project"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `public`
6. Add environment variables in the dashboard:
   - `POK_ENVIRONMENT`
   - `POK_PROJECT`
   - `POK_TOKEN`
   - `POK_TOKEN_PREVIEW`
7. Deploy

#### Option B: Manual Deployment

```bash
# Set environment variables first
wrangler secret put POK_ENVIRONMENT
wrangler secret put POK_PROJECT
wrangler secret put POK_TOKEN
wrangler secret put POK_TOKEN_PREVIEW

# Deploy
npm run deploy
```

### 5. Configure Custom Domain (Optional)

1. Go to your Cloudflare Pages project in the dashboard
2. Navigate to "Custom domains"
3. Add your domain (e.g., `brendan.mckenzie.io`)
4. Update [wrangler.toml](wrangler.toml) routes section if needed

### 6. Monitor Performance

After deployment:
- Check Cloudflare Pages Analytics for traffic and performance
- Monitor error logs in Cloudflare Dashboard
- Test all routes in production
- Verify caching is working correctly (check Cache-Control headers)

## Potential Issues & Solutions

### Issue: Apollo Client Errors

If you see errors related to Apollo Client or GraphQL queries:
- Ensure environment variables are set correctly in Cloudflare
- Check that the Pokko CMS API is accessible from Cloudflare's network
- Verify authentication tokens are correct

### Issue: Build Fails

If the build fails:
- Check that all dependencies are installed: `npm install`
- Verify TypeScript types: `npm run typecheck`
- Look for Node.js-specific code that needs updating

### Issue: Routes Not Working

If specific routes fail:
- Check route loaders for Node.js-specific code (fs, path, etc.)
- Verify all imports use `@remix-run/cloudflare` not `@remix-run/node`
- Test the route locally with `npm run dev`

### Issue: Environment Variables Not Available

If environment variables are undefined:
- For local dev: Check `.dev.vars` file exists and has correct values
- For production: Verify secrets are set in Cloudflare Dashboard
- Update Apollo Client usage to use `context.env` in loaders

## Architecture Notes

### How It Works

1. **Request Flow:**
   - User requests a URL → Cloudflare CDN
   - Cloudflare Pages serves static assets from `public/`
   - Dynamic routes are handled by `functions/[[path]].js` (the Worker)
   - Worker runs Remix server-side rendering
   - Response includes HTML + hydration scripts
   - Client-side React takes over

2. **Environment Variables:**
   - Local: Loaded from `.dev.vars` by Wrangler
   - Production: Set in Cloudflare Dashboard or via `wrangler secret put`
   - Accessed in loaders via `context.env`

3. **Caching:**
   - Edge caching controlled by `Cache-Control` headers in route loaders
   - Current cache times:
     - Homepage: 5 minutes (300s)
     - Posts: 5 minutes (300s)
     - RSS/Sitemap: 1 hour (3600s)

4. **External Services:**
   - Pokko CMS GraphQL API: Called from Worker on each request
   - Flight Logger API: Proxied through `/flights.ics` route
   - Plausible Analytics: Client-side script

### Benefits of Cloudflare Workers

- **Global Edge Network:** Your app runs close to users worldwide
- **Instant Cold Starts:** No serverless cold start delays
- **Automatic Scaling:** Handles traffic spikes automatically
- **Cost Effective:** First 100k requests/day are free
- **DDoS Protection:** Cloudflare's security built-in

### Limitations

- **CPU Time:** Max 50ms CPU time per request (usually sufficient for SSR)
- **No File System:** Can't use fs, path, or other Node.js modules
- **Memory:** Limited memory per request (128MB)
- **External API Calls:** Count toward CPU time limit

## Rollback Plan

If you need to revert to Node.js deployment:

1. Checkout previous commit before this migration
2. Or manually revert by:
   - Changing imports back to `@remix-run/node`
   - Updating package.json dependencies
   - Restoring original remix.config.js
   - Using `npm run dev` and `npm run start` with original scripts

## Resources

- [Remix Cloudflare Documentation](https://remix.run/docs/en/main/guides/deployment#cloudflare-pages)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers Runtime APIs](https://developers.cloudflare.com/workers/runtime-apis/)

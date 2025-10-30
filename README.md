# Brendan McKenzie's Website

A personal website built with Remix and deployed on Cloudflare Workers.

- [Remix Docs](https://remix.run/docs)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Development

Install dependencies:

```sh
npm install
```

Start the Remix development server with Wrangler:

```sh
npm run dev
```

This will start the development server with hot module reloading.

### Environment Variables

For local development, environment variables are loaded from [.dev.vars](.dev.vars). This file should contain:

```
POK_ENVIRONMENT=your-environment-id
POK_PROJECT=your-project-id
POK_TOKEN=your-token
POK_TOKEN_PREVIEW=your-preview-token
```

## Build

Build the application for production:

```sh
npm run build
```

This will create optimized production builds in:
- `public/build/` - Client-side assets
- `functions/` - Cloudflare Workers function

## Deployment

### Cloudflare Pages (via Dashboard) - Recommended

1. Connect your Git repository to [Cloudflare Pages](https://dash.cloudflare.com/)
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `public`
3. Set environment variables in the Cloudflare Pages project settings:
   - `POK_ENVIRONMENT`
   - `POK_PROJECT`
   - `POK_TOKEN`
   - `POK_TOKEN_PREVIEW`
4. Every push to your main branch will automatically deploy

See [CLOUDFLARE_PAGES_SETUP.md](CLOUDFLARE_PAGES_SETUP.md) for detailed setup instructions.

### Manual Deployment via CLI

Deploy to Cloudflare Pages manually:

```sh
npm run deploy
```

Or:

```sh
npm run build
wrangler pages deploy ./public --project-name=your-project-name
```

Set environment variables using `wrangler pages secret`:

```sh
wrangler pages secret put POK_ENVIRONMENT --project-name=your-project-name
wrangler pages secret put POK_PROJECT --project-name=your-project-name
wrangler pages secret put POK_TOKEN --project-name=your-project-name
wrangler pages secret put POK_TOKEN_PREVIEW --project-name=your-project-name
```

## Project Structure

- `app/` - Remix application code
  - `routes/` - File-based routing
  - `pokko/` - GraphQL client for Pokko CMS
  - `components/` - React components
  - `styles/` - CSS stylesheets
- `public/` - Static assets
- `functions/` - Cloudflare Workers function (generated)
- `wrangler.toml` - Cloudflare Workers configuration
- `.dev.vars` - Local development environment variables

## GraphQL Code Generation

Generate TypeScript types from GraphQL schema:

```sh
npm run model
```

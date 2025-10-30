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

### Cloudflare Pages

Deploy to Cloudflare Pages:

```sh
npm run deploy
```

Or connect your Git repository to Cloudflare Pages for automatic deployments.

### Environment Variables (Production)

Set production environment variables using Wrangler secrets:

```sh
wrangler secret put POK_ENVIRONMENT
wrangler secret put POK_PROJECT
wrangler secret put POK_TOKEN
wrangler secret put POK_TOKEN_PREVIEW
```

Alternatively, set them in the Cloudflare Dashboard:
1. Go to your Cloudflare Pages project
2. Navigate to Settings > Environment Variables
3. Add the required variables for your production environment

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

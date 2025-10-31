# Remix to Next.js Migration

This project has been migrated from Remix.run to Next.js 15, maintaining all functionality while running on Cloudflare Workers using `@opennextjs/cloudflare`.

## What Was Migrated

### Routes
- ✅ Home page (`/`) with latest 10 posts
- ✅ Paginated posts list (`/posts/pages/[page]`)
- ✅ Individual blog posts (`/posts/[year]/[alias]`)
- ✅ Markdown export (`/posts/[year]/[alias].md`)
- ✅ CV page (`/cv`) with custom layout
- ✅ QR code generator (`/qr`) - client-side
- ✅ Woddle app pages (`/woddle`, `/woddle/terms`, `/woddle/privacy`)

### API Routes
- ✅ RSS feed (`/rss.xml`)
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Flight calendar (`/flights.ics`)

### Components
- ✅ PostList component
- ✅ RichText/Slate renderer
- ✅ Root layout with header/footer

### Styling
- ✅ All CSS files migrated
- ✅ Mobile-responsive styles
- ✅ Modern CSS reset

### Data & GraphQL
- ✅ Apollo Client configuration
- ✅ GraphQL queries and generated types
- ✅ CV data
- ✅ Pokko CMS integration

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**

   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your Pokko CMS credentials:
   ```
   POK_PROJECT=your_project_id
   POK_ENVIRONMENT=your_environment_id
   POK_TOKEN=your_production_token
   POK_TOKEN_PREVIEW=your_preview_token
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

4. **Generate GraphQL types (if schema changes):**
   ```bash
   npm run model
   ```

## Deployment to Cloudflare Workers

### Using Wrangler CLI

1. **Set secrets in Cloudflare:**
   ```bash
   npx wrangler secret put POK_PROJECT
   npx wrangler secret put POK_ENVIRONMENT
   npx wrangler secret put POK_TOKEN
   npx wrangler secret put POK_TOKEN_PREVIEW
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

### Using Cloudflare Dashboard

1. Build the project:
   ```bash
   npx opennextjs-cloudflare build
   ```

2. Upload `.open-next/` directory through Cloudflare Dashboard

3. Configure environment variables in Workers & Pages settings

## Key Differences from Remix

### Data Fetching
- **Remix:** `loader` functions
- **Next.js:** Server Components with `async` functions, `revalidate` export for caching

### Routing
- **Remix:** `routes/posts/$year/$alias.tsx`
- **Next.js:** `app/posts/[year]/[alias]/page.tsx`

### Links & Navigation
- **Remix:** `<Link to="...">`
- **Next.js:** `<Link href="...">`

### Client Components
- **Remix:** `handle: { hydrate: true }`
- **Next.js:** `"use client"` directive

### Layouts
- **Remix:** `handle: { layout: false }`
- **Next.js:** Custom `layout.tsx` in route directory

### API Routes
- **Remix:** `loader` returning `Response`
- **Next.js:** `route.ts` with `GET`, `POST`, etc. exports

## Caching Strategy

- **Home & Posts:** 5 minutes (`revalidate = 300`)
- **RSS & Sitemap:** 1 hour (`revalidate = 3600`)
- **Individual Posts:** 5 minutes with stale-while-revalidate

## Project Structure

```
website-nextjs/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── posts/           # Blog routes
│   │   ├── cv/              # CV page
│   │   ├── qr/              # QR generator
│   │   ├── woddle/          # Woddle pages
│   │   ├── rss.xml/         # API routes
│   │   ├── sitemap.xml/
│   │   └── flights.ics/
│   ├── components/          # React components
│   ├── data/                # Static data (CV)
│   ├── pokko/               # GraphQL client & types
│   └── styles/              # CSS files
├── public/                  # Static assets
├── wrangler.jsonc          # Cloudflare Workers config
├── next.config.ts          # Next.js configuration
└── codegen.yml             # GraphQL Code Generator config
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run model` - Generate GraphQL types
- `npm run typecheck` - Type check TypeScript
- `npm run cf-typegen` - Generate Cloudflare types

## Notes

- This uses `@opennextjs/cloudflare` to run Next.js on Cloudflare Workers
- All functionality from the Remix app has been preserved
- The build outputs to `.open-next/` directory
- Environment variables are accessed via `getCloudflareContext()` in production

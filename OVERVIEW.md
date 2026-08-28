# Song Auto Detail — architecture overview

Rebuild of [songautodetail.com](https://www.songautodetail.com) as a fast, SEO-focused replacement for the current Wix site.

Goal: a **simple static business website with a tiny CMS**, not a full Wix replacement.

The public site is statically generated. Visitors never query the database. The owner publishes projects and blog posts from a small React admin that writes to Supabase.

---

## Stack

| Layer | Choice |
| --- | --- |
| App | React + Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| CMS / auth / images | Supabase (`nizxponktvpkupcdazte`) |
| Hosting | GitHub Pages (static export). Vercel is optional, not required. |
| Quote requests | Google Forms |
| Scheduling | Google Calendar appointment page (if Yong uses one) |

Services, hours, and nav live in the repo. Only **projects** and **blog posts** live in Supabase.

---

## Architecture

```text
Next.js app
        │
        ├── Public pages (Server Components → static HTML)
        │       ├── Home
        │       ├── Services
        │       ├── Projects
        │       ├── Blog
        │       ├── About / FAQ / Contact / Quote
        │
        ├── React client components
        │       ├── galleries
        │       ├── filters
        │       └── navigation
        │
        └── Admin (/admin)
                └── React
                    ↓
                 Supabase
                    ↓
                 Webhook
                    ↓
                 GitHub Action → Next.js static export
                    ↓
                 GitHub Pages
                    ↓
                 www.songautodetail.com
```

### Public site

- Server Components fetch **published** content at **build / revalidate time**.
- Output is static HTML on the CDN.
- No Supabase client on Home, Services, Projects, or Blog page load.
- Client Components are used only where interaction is needed (gallery lightbox, project filters, mobile nav).

### Admin

- `/admin` is a React area in the same Next.js app.
- One owner account via **Supabase Auth**.
- Uses the **anon key** plus **RLS**. The service-role key never ships to the browser.
- Owner can create, edit, draft, publish, delete projects and posts, upload/reorder photos, and mark featured projects.

---

## Hosting

**Vercel is not required.** Next.js can emit a fully static site (`output: 'export'`). That matches the original plan: GitHub Actions builds HTML, GitHub Pages serves it, custom domain + HTTPS.

| | GitHub Pages (default) | Vercel (optional) |
| --- | --- | --- |
| Public site | Static HTML | Static HTML / ISR |
| Cost | Free | Free hobby tier |
| Publish | Webhook → GitHub Action rebuild | Deploy hook or on-demand revalidate |
| Images | Optimize at **build** (Sharp / `next/image` unoptimized + pre-sized files) | `next/image` CDN optimizer |
| Redirects | Static redirect pages (export cannot use `next.config` redirects) | Native `next.config` redirects |
| Extra account | No | Yes |

Use Pages unless we later want Vercel’s image CDN or instant revalidate. The public site stays static either way.

---

## Publishing flow

```text
Owner
  → /admin
  → Supabase (row published = true, images in Storage)
  → Webhook (Supabase Edge Function)
  → GitHub Action (next build + static export)
  → GitHub Pages
  → www.songautodetail.com
```

Safety nets: manual workflow dispatch, nightly rebuild, build query is `published = true` only so drafts never ship.

Wix stays live until DNS cutover is confirmed.

---

## Public sitemap

Canonical host: `https://www.songautodetail.com` (matches current Google listings). Apex redirects to www.

| URL | Purpose |
| --- | --- |
| `/` | Home |
| `/services` | Service index |
| `/services/ppf` | Paint protection film |
| `/services/ceramic-coating` | XPEL + Artdeshine ceramic |
| `/services/paint-correction` | Paint correction |
| `/services/auto-detailing` | Detailing packages |
| `/projects` | Project index (replaces Gallery) |
| `/projects/[slug]` | Project SEO page |
| `/blog` | Educational posts only |
| `/blog/[slug]` | Article |
| `/about` | Shop / Yong |
| `/faq` | FAQs |
| `/contact` | Address, hours, form |
| `/quote` | GET A QUOTE |
| `/admin` | Owner CMS (not in sitemap) |

Important Wix URLs 301 to these paths (see rebuild plan). Do not keep thin leftover pages such as `/inquiry-services-page` or a fake Sunnyvale location URL.

Primary CTA everywhere: **GET A QUOTE**.

---

## Supabase

Project ID: `nizxponktvpkupcdazte`  
API URL: `https://nizxponktvpkupcdazte.supabase.co`

### `projects`

`title`, `slug`, `vehicle_year`, `vehicle_make`, `vehicle_model`, `services[]`, `description` (markdown), `location`, `materials`, `duration`, `project_date`, `featured`, `published`, timestamps.

### `project_images`

`project_id`, `storage_path`, `alt_text`, `sort_order`, `kind` (`gallery` | `before` | `after`).

### `posts`

`title`, `slug`, `excerpt`, `content` (markdown), `cover_image`, `published`, `published_at`, timestamps.

### Access

- Public (anon): `SELECT` published projects, their images, and published posts. No writes.
- Admin (`auth.uid()` in an `admins` table): full CRUD + Storage upload/delete.
- Storage buckets: `project-images`, `blog-images`.
- Service-role key: GitHub Actions (build) only. Never in client code.

---

## SEO and performance

Public HTML is static. Each page gets a unique title, meta description, canonical, Open Graph, and JSON-LD (`AutomotiveBusiness` / `LocalBusiness`, `Service`, `Article` for posts). `sitemap.xml` and `robots.txt` are generated.

Images: generate WebP/AVIF and sized thumbnails at **build time**. Do not ship original multi-megabyte files. (Vercel’s `next/image` optimizer is only available if we later host there.)

Content source of truth is the current Wix site. Do not invent reviews, certifications, PPF prices, a second location, or other claims.

---

## What this is not

- Not a custom form backend (Google Forms).
- Not a custom calendar (link Yong’s Google Calendar page if he has one).
- Not a public runtime CMS. Unpublished content is never in the static build.
- Not a Vercel requirement. Pages is enough for a static public site.

---

## Build order

1. Next.js + Tailwind + design system  
2. Home, services, about, FAQ, contact (current copy)  
3. Supabase + projects  
4. Blog  
5. `/admin`  
6. Publish webhook → GitHub Action → GitHub Pages  
7. Google Forms + optional Calendar  
8. SEO, redirects, performance, DNS cutover  

Keep Wix online until the new site is verified, then switch DNS and submit the sitemap in Search Console.

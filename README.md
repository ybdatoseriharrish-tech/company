# Premier Cloud

# company

Premier Cloud is an internal cloud operations platform for Premier Centre Group. The current foundation includes an enterprise dashboard, application fleet and detail views, a guided mock deployment workflow, server management, role definitions, a Prisma/PostgreSQL model, Supabase Auth utilities, seeded sample data, and validated mock APIs.

## Local setup

Requirements: Node.js 22+, pnpm, and PostgreSQL.

1. Copy `.env.example` to `.env.local`.
2. Set `DATABASE_URL` to a development PostgreSQL database.
3. Add the Supabase project URL and publishable key. Never use a service-role key in browser variables.
4. Install dependencies with `pnpm install`.
5. Generate the Prisma client with `pnpm prisma generate`.
6. Create the schema with `pnpm prisma db push` for local prototyping.
7. Seed sample records with `pnpm db:seed`.
8. Start the app with `pnpm dev`.

The interface runs with sample data when database and Supabase values are absent. The mock deployment service never executes shell input or exposes Docker. A production worker should run in a private network with an allowlisted command surface.

## Security model

- Supabase sessions use cookie-based SSR utilities and PKCE.
- Roles must be stored in Supabase `app_metadata`, not user-editable metadata.
- Every protected server action and API must re-check identity and role.
- Environment values store ciphertext and key versions; plaintext is returned only at initial creation.
- Destructive operations require confirmation and produce audit records.
- Authenticated responses must not be cached by a shared proxy.
- Public-schema tables exposed through Supabase require RLS and explicit policies.

## Structure

- `app/` — routes and API handlers
- `components/` — reusable platform shell and UI
- `lib/` — RBAC, Supabase utilities, mock data and deployment boundary
- `prisma/` — PostgreSQL schema and sample seed
- `worker/` — Cloudflare-compatible site entrypoint

## Current prototype routes

- `/` — infrastructure overview
- `/login` — company sign-in prototype
- `/applications` — searchable fleet table
- `/applications/hr-portal` — application details
- `/deploy` — seven-step deployment wizard
- `/servers` — server fleet

Database, backups, monitoring, logs, users, billing, and settings are navigation-ready and planned for the next build phase.

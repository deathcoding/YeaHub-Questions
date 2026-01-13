<!-- Guidance for AI coding agents working on this repo -->

# Copilot instructions — YeaHub Questions List

Purpose: give an AI agent the minimum, concrete knowledge to be immediately productive editing, extending, and debugging this React + TypeScript + Vite app.

- Quick start
  - Dev server: `npm run dev` (Vite, port 3000).
  - Build: `npm run build` (runs `tsc -b` then `vite build`).
  - Lint/format: `npm run lint`, `npm run format`.
  - Important env vars: `VITE_BASE_API_URL` (backend base URL), `VITE_USE_MOCKS` (set to `true` to use local mocks).

- Big picture (how the code is structured)
  - Entry + layout: `src/app` contains `appEntry.tsx` and application providers (router, store).
  - Pages: `src/pages/*/ui/*` — page-level components and their module CSS.
  - Entities: `src/entities/*` — domain models and RTK Query API slices for that entity (example: `skill`, `specialization`).
  - Features: `src/features/*` — reusable UI features composed from entities and shared UI.
  - Widgets: `src/widgets/*` — composition of features used on pages (e.g. `questions-filter`).
  - Shared: `src/shared` — global utilities and the `baseApi` for RTK Query.

- Data flow & APIs
  - `src/shared/api/baseApi.ts` defines the RTK Query `baseApi`. Entities call `baseApi.injectEndpoints(...)` to add endpoints.
  - Entity API hooks export hooks like `useGetSkillsListQuery` and `useGetSpecializationsQuery` (see `src/entities/*/api/*Api.ts`).
  - API responses use a wrapper shape: `{ data: T[] }`. Consumers must guard for `data` being `undefined` while loading.
    - Example defensive pattern used across the codebase: `const items = response?.data ?? []` and pass `items` to child components.
  - Mocks: `src/entities/*/api/*mock.ts` return the same `{ data: ... }` shape; `VITE_USE_MOCKS=true` switches to mocks.

- TypeScript / paths / style
  - Path alias `@` → `src` is configured in `tsconfig.*` and Vite (`vite.config.ts`). Use `@/...` imports.
  - `strict: true` in `tsconfig.app.json`: handle possibly `undefined` values (RTK Query `data`) and prefer explicit typing.
  - Components use named exports, functional React components, and CSS Modules (`*.module.css`). Keep this convention.

- Common project patterns and gotchas
  - RTK Query returns `data` (may be `undefined` during loading). Do not assume `data` is present — use `?.` or `?? []`.
  - Add new endpoints by calling `baseApi.injectEndpoints` in the related entity folder; export hooks from the same file.
  - When adding UI children that accept arrays, prefer optional props with a default `[]` to avoid `T[] | undefined` errors.
    - Example: in `src/features/filter-by-specialization/ui/FilterBySpecialization.tsx` either accept `specializations?: Specialization[]` with `specializations = []` default, or ensure callers pass `data?.data ?? []`.
  - Styling: prefer local CSS modules for component styles; avoid global CSS unless adding to `src/app/styles`.

- Useful files to inspect for examples
  - `src/shared/api/baseApi.ts` — base RTK Query setup.
  - `src/entities/specialization/api/specializationApi.ts` — endpoint injection + mocks usage.
  - `src/entities/specialization/api/specialization.mock.ts` — mock data shape.
  - `src/features/filter-by-specialization/ui/FilterBySpecialization.tsx` — example of a prop typed as `Specialization[]`.
  - `vite.config.ts`, `tsconfig.app.json` — path alias + compiler rules.

- When editing / testing changes
  - Start dev server: `npm run dev` and test pages in browser (HMR).
  - To verify type errors locally run `npm run build` (this runs `tsc -b` and will surface TypeScript errors).
  - For API-related work, toggle `VITE_USE_MOCKS=true` to avoid backend dependency; mocks live in each entity's `/api` folder.

- If you change public API shapes
  - Update both the entity `*Api.ts` and corresponding `*mock.ts` to match the same return shape (`{ data: ... }`).

- If you need more examples
  - Ask to expand a focused area: add a code example for a new endpoint, a UI component pattern, or a migration guide for an API change.

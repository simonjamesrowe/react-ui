# Repository Guidelines

## Project Structure & Module Organization
This Vite-powered React/TypeScript UI keeps feature code in `src/`, with views in `components/pages`, shared UI in `components/common`, Redux logic under `state/`, models in `model/`, and static assets in `assets/`. Service wrappers for APIs, analytics, and environment wiring live in `services/` (see `services/Environment.ts` for runtime configuration). Global HTML assets stay in `public/`, while container/runtime infrastructure (Dockerfile, `nginx.conf`, `server.js`, `skaffold.yaml`) sits at the repo root for deployment.

## Build, Test, and Development Commands
- `yarn dev` (or `npm run dev`): start the Vite dev server with hot-module reload at http://localhost:5173.
- `yarn build`: produce the production bundle in `dist/`, ready for the NGINX/Express wrappers.
- `yarn preview`: serve the built bundle locally to sanity-check Docker or CDN behavior.
- `yarn test` / `yarn test:ui`: run Vitest in headless or UI mode with the Happy DOM environment.
- `yarn lint`: enforce the ESLint + `@typescript-eslint` ruleset; the CI treats warnings as failures.
- `yarn typecheck`: run `tsc --noEmit` to catch structural issues that linting might miss.

## Coding Style & Naming Conventions
Write modern function components with hooks; prefer composition over large container files. React components and TypeScript types use `PascalCase` (`BlogDetail.tsx`, `IProfile`), helpers and hooks use `camelCase`, and environment keys remain `UPPER_SNAKE_CASE`. Follow the existing 4-space indentation and double-quote import style. Let ESLint and the TypeScript compiler be the source of truth—do not bypass them with `// eslint-disable` unless you can point to an upstream issue.

## Testing Guidelines
Vitest plus `happy-dom` backs component tests; colocate specs as `*.test.tsx` alongside the component (e.g., `components/pages/Blog/Blog.test.tsx`). Mock HTTP via Axios adapters or service-level stubs, not by touching Redux directly. Target at least statement parity with the affected code and extend fixtures in `src/App.test.tsx` when exercising top-level routing. UI-heavy changes should also include `yarn test:ui` screenshots or notes so reviewers can replay the suite.

## Commit & Pull Request Guidelines
History follows Conventional Commits (`feat:`, `chore:`, `fix:`), as seen in `feat: use native ARM64 runners...`; match that format and scope component directories when possible (`feat(home): add CTA banner`). Pull requests must describe the user impact, reference issues (`Closes #123`), and attach before/after screenshots for UI updates. Include a checklist of commands you ran (`dev`, `build`, `test`) and call out any follow-up work to keep reviewers aligned.

## Security & Configuration Tips
All runtime secrets flow through `window.*` globals or `VITE_*` variables that feed `services/Environment.ts`. Update `public/environment/config.js` or deployment manifests instead of hardcoding tokens, and never commit concrete API keys. Validate third-party script additions with the repo OWNERS before merging to keep analytics and APM payloads compliant.

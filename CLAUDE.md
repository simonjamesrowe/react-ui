# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm start` - Start development server at http://localhost:3000
- `npm run build` - Create production build in `/build` folder
- `npm test` - Run Jest tests in watch mode

### Docker & Deployment
- `docker build -t react-ui .` - Build Docker image
- `skaffold dev` - Local Kubernetes development with Skaffold

## Architecture Overview

This is a personal portfolio/resume Single Page Application built with React, TypeScript, and Redux.

### State Management
The application uses Redux with redux-thunk for async actions. State is organized by domain in `/src/state/`:
- `blogs/` - Blog content management
- `jobs/` - Employment history
- `profile/` - User profile data
- `skills/` - Technical skills categorization
- `socialMedia/` - Social media links
- `tags/` - Content tagging
- `simulation/` - Interactive tour functionality

Each domain follows the Action/Reducer pattern with TypeScript interfaces for type safety.

### Component Structure
- `/src/components/common/` - Reusable components (Sidebar, Tour, Footer, etc.)
- `/src/components/pages/` - Route-specific page components
  - `Home/` - Main portfolio sections (Jobs, Skills, Blogs)
  - `Blog/` - Blog listing and detail views

### Services & API Integration
Services in `/src/services/` handle API communication:
- All services expect an external API at `api.simonjamesrowe.com`
- Environment configuration via window globals (API_URL, GA_TRACKING_TOKEN, etc.)
- Consistent async pattern using redux-thunk action creators

### Key Technologies
- **React 16.13.1** with TypeScript
- **Redux + redux-thunk** for state management
- **Material-UI v4** and **React Bootstrap** for UI (dual framework approach)
- **React Router v5** for client-side routing
- **Axios** for HTTP requests
- **Elastic APM** for performance monitoring
- **intro.js** for interactive tours

### Important Patterns
1. **Environment Configuration**: Runtime config via window globals injected by Express server
2. **Tour Feature**: Interactive guided tour with search simulation using intro.js
3. **Content Management**: Dynamic content loaded from external API, not static files
4. **Analytics**: Integrated Google Analytics and Hotjar tracking

### Development Notes
- TSLint configuration present (should migrate to ESLint)
- TypeScript with `noImplicitAny: false` (permissive typing)
- Test coverage minimal - only basic App smoke test
- jQuery still used alongside React (technical debt)
- Dual UI framework usage (Material-UI + Bootstrap) may cause consistency issues
# CodeCompass Developer Tools Platform

## Overview

This is a full-stack React application for showcasing and managing developer tools. The platform features a modern, responsive design with a comprehensive UI component library, GitHub integration for project data, and support for both free and premium tools.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the main application
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **Tailwind CSS** with custom design system for styling
- **shadcn/ui** component library with Radix UI primitives
- **Framer Motion** for animations and micro-interactions
- **TanStack Query** for data fetching and caching

### Backend Architecture
- **Express.js** server with TypeScript
- **Vite middleware integration** for development mode
- RESTful API structure with `/api` prefix
- Modular route registration system
- Memory-based storage interface with extensible design

### Database Design
- **Drizzle ORM** with PostgreSQL as the target database
- **Neon Database** as the serverless PostgreSQL provider
- Schema includes:
  - `users` table for basic user management
  - `projects` table for developer tools and applications
  - `team_members` table for organization team information
- Zod validation schemas for type-safe data handling

## Key Components

### UI Component System
- Comprehensive design system based on shadcn/ui
- Dark/light theme support with theme provider
- Responsive design with mobile-first approach
- Custom CSS variables for consistent theming
- Professional color palette (navy, teal, emerald accents)

### Page Structure
- **Home**: Hero section with 3D compass animation, featured projects, statistics
- **Projects**: Filterable grid of developer tools with GitHub integration
- **Mission**: Team member profiles and company mission
- **Contact**: Contact form with validation
- **Donate**: GitHub Sponsors and Ko-fi integration

### GitHub Integration
- GitHub API integration for fetching repository data
- Automatic project metadata extraction (stars, language, license)
- Support for both organization and user repositories
- Fallback handling for API rate limits

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle business logic and external API calls
3. **GitHub API**: Fetch real-time repository data and statistics
4. **Database**: Store user data, project metadata, and team information
5. **Response**: Transformed data returned to React components

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Data fetching and state management
- **framer-motion**: Animation library
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Development Environment
- Vite dev server with hot module replacement
- Express server with middleware integration
- Automatic TypeScript compilation
- Environment variable support for API keys

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- `DATABASE_URL` required for PostgreSQL connection
- Optional `GITHUB_TOKEN` for increased API rate limits
- Support for Replit-specific development features

### Hosting Considerations
- Static frontend can be served from any CDN
- Backend requires Node.js runtime environment
- Database requires PostgreSQL-compatible service
- Environment variables needed for external service integration

## Key Architectural Decisions

### Technology Choices
1. **Vite over Create React App**: Better performance, faster builds, modern tooling
2. **Wouter over React Router**: Smaller bundle size, simpler API for basic routing needs
3. **Drizzle over Prisma**: Better TypeScript integration, more control over SQL
4. **shadcn/ui over Material-UI**: More customizable, better Tailwind integration

### Design Patterns
1. **Component composition**: Reusable UI components with consistent prop interfaces
2. **Custom hooks**: Encapsulated logic for theme management and mobile detection
3. **Type-safe APIs**: Zod schemas for runtime validation and TypeScript inference
4. **Separation of concerns**: Clear boundaries between UI, business logic, and data layers

### Performance Optimizations
1. **Code splitting**: Dynamic imports for non-critical components
2. **Image optimization**: Proper sizing and lazy loading
3. **Query caching**: TanStack Query for efficient data management
4. **Bundle optimization**: Tree shaking and minification in production builds
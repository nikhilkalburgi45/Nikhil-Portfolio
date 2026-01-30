# Nikhil Kalburgi Developer Portfolio

## Overview

A modern, minimalist developer portfolio website for Nikhil Kalburgi, a Full Stack & DevOps Engineer. The project is built as a single-page application with React and focuses on a clean, recruiter-grade presentation with smooth animations and responsive design. The application uses a full-stack architecture but is designed to function primarily as a frontend showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, bundled with Vite
- **Styling**: Tailwind CSS with custom theme configuration supporting light/dark modes
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll-based animations
- **Navigation**: react-scroll for smooth scrolling between sections
- **State Management**: TanStack React Query for server state, React Hook Form for form handling
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Server**: Express.js (v5) running on Node.js
- **Development**: tsx for TypeScript execution, Vite dev server with HMR
- **Production Build**: esbuild for server bundling, Vite for client assets

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` with Zod validation via drizzle-zod
- **Current Implementation**: In-memory storage (MemStorage class) for contact form submissions
- **Database Ready**: PostgreSQL connection configured via DATABASE_URL environment variable

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components (Home, 404)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client and server
│   ├── schema.ts     # Database schema and types
│   └── routes.ts     # API route definitions with Zod validation
```

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in a single repository with path aliases
- **Type Safety**: End-to-end TypeScript with shared schemas between frontend and backend
- **Component Architecture**: Atomic design with shadcn/ui providing base components
- **API Contract**: Route definitions with Zod schemas in shared folder ensure type-safe API calls

## External Dependencies

### Core Services
- **PostgreSQL Database**: Required for production (configured via DATABASE_URL)
- **Node.js Runtime**: Server execution environment

### Key npm Packages
- **UI Framework**: @radix-ui/* components, class-variance-authority, clsx, tailwind-merge
- **Data Fetching**: @tanstack/react-query
- **Forms**: react-hook-form with @hookform/resolvers for Zod integration
- **Database**: drizzle-orm, drizzle-zod, pg (PostgreSQL driver)
- **Build Tools**: Vite, esbuild, tsx, drizzle-kit

### Development Tools
- **Replit Plugins**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer (dev only)
- **Type Checking**: TypeScript with strict mode enabled
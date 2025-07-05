# Boost My Resume - AI-Powered Resume Improvement Tool

## Overview

This is a full-stack web application called "Boost My Resume" that helps students and job seekers improve their resumes using AI-powered analysis and suggestions. The application provides a simple interface where users can paste their resume text and receive enhanced versions with better phrasing, impact words, and professional clarity.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for client-side routing
- **Theme Support**: Dark/light mode with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store (connect-pg-simple)
- **API Design**: RESTful API with `/api` prefix

### Development Setup
- **Monorepo Structure**: Client and server code in separate directories with shared schemas
- **Hot Reloading**: Vite development server with HMR
- **Build Process**: Separate build steps for client (Vite) and server (esbuild)
- **Development Tools**: tsx for TypeScript execution, Replit integration

## Key Components

### Client-Side Components
1. **Core Pages**:
   - Home page with hero section and resume improvement tool
   - 404 not found page
   - About section with feature highlights
   - Contact form for user feedback

2. **UI Components**:
   - Comprehensive set of Radix UI components (accordion, dialog, form, etc.)
   - Custom theme provider with dark/light mode support
   - Responsive navigation with mobile support
   - Toast notifications for user feedback

3. **Resume Processing**:
   - Text area for resume input
   - AI-powered improvement suggestions
   - Statistics display (improvements made, impact words, readability)
   - Copy to clipboard functionality

### Server-Side Components
1. **API Layer**:
   - Express.js server with middleware for logging and error handling
   - Route registration system for API endpoints
   - CORS and security middleware setup

2. **Data Layer**:
   - Drizzle ORM for type-safe database operations
   - User schema with username/password authentication
   - Memory storage implementation for development
   - PostgreSQL connection for production

3. **AI Processing**:
   - Client-side AI logic for resume improvements
   - Pattern matching for common resume weaknesses
   - Impact word suggestions and readability enhancements

## Data Flow

1. **User Input**: User pastes resume text into the application
2. **Client Processing**: AI improvement logic runs on the client side
3. **Text Enhancement**: Common phrases are replaced with more impactful alternatives
4. **Results Display**: Improved text is shown with statistics
5. **User Actions**: Copy improved resume or make further edits

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date formatting
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Security**: Standard Express security middleware
- **Development**: tsx for TypeScript execution, nodemon-like functionality

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Linting**: ESLint configuration for code quality
- **Replit Integration**: Special plugins for Replit development environment

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds the React application to `dist/public`
2. **Server Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied to PostgreSQL database
4. **Static Assets**: Client build serves as static files from Express

### Production Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Node Environment**: Production mode with optimized builds
- **Database**: Neon Database serverless PostgreSQL
- **Session Storage**: PostgreSQL-based session management

### Development Workflow
- **Local Development**: `npm run dev` starts both client and server
- **Database Management**: `npm run db:push` applies schema changes
- **Type Checking**: `npm run check` validates TypeScript across the stack

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
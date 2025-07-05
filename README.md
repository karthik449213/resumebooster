# Boost My Resume - AI-Powered Resume Improvement Tool

Transform your resume into a compelling story that gets you noticed by employers. This free AI-powered tool rewrites, enhances, and optimizes your resume for maximum impact.

## Features

- **AI-Powered Improvements**: Automatically enhance weak phrases with professional alternatives
- **Impact Words**: Add measurable achievements and quantifiable results
- **Grammar & Clarity**: Fix grammatical errors and improve sentence structure
- **Professional Formatting**: Ensure proper structure and formatting
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **PDF Upload Support**: Upload PDF resumes (with manual text extraction guidance)
- **Copy & Download**: Easy export of improved resume text
- **Mobile Responsive**: Works perfectly on all device sizes

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** components with shadcn/ui
- **Framer Motion** for animations
- **React Query** for state management

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Multer** for file uploads
- **PostgreSQL** with Drizzle ORM (optional)

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd boost-my-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check TypeScript
- `npm run db:push` - Apply database schema changes (if using PostgreSQL)

## Deployment

### Deploy to Render

1. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Use the following settings:

2. **Build Configuration**
   ```yaml
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

3. **Environment Variables** (if using database)
   ```
   NODE_ENV=production
   DATABASE_URL=your_postgresql_url
   ```

4. **Create `package.json` start script** (already included)
   ```json
   {
     "scripts": {
       "start": "NODE_ENV=production node dist/index.js"
     }
   }
   ```

### Deploy to Netlify

#### Option 1: Static Site (Frontend Only)

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist/public` folder to Netlify
   - Or connect your GitHub repository with these settings:
     - Build command: `npm run build`
     - Publish directory: `dist/public`

#### Option 2: Full Stack with Netlify Functions

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Create `netlify.toml` in root directory**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist/public"
     functions = "netlify/functions"

   [dev]
     command = "npm run dev"
     port = 5000

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

3. **Convert Express routes to Netlify Functions**
   Create `netlify/functions/upload-resume.js`:
   ```javascript
   const multer = require('multer');
   const upload = multer({ storage: multer.memoryStorage() });

   exports.handler = async (event, context) => {
     if (event.httpMethod !== 'POST') {
       return { statusCode: 405, body: 'Method Not Allowed' };
     }
     
     // Handle file upload logic here
     return {
       statusCode: 200,
       body: JSON.stringify({ 
         text: 'Please copy and paste your resume text manually.',
         message: 'PDF received - manual text extraction needed'
       })
     };
   };
   ```

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Create `vercel.json`**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server/index.ts",
         "use": "@vercel/node"
       },
       {
         "src": "client/**",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist/public" }
       }
     ],
     "routes": [
       { "src": "/api/(.*)", "dest": "server/index.ts" },
       { "src": "/(.*)", "dest": "client/$1" }
     ]
   }
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## VS Code Setup

### Recommended Extensions

1. **Install essential extensions**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter
   - ESLint

2. **VS Code Settings** (create `.vscode/settings.json`)
   ```json
   {
     "typescript.preferences.importModuleSpecifier": "relative",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.organizeImports": true
     },
     "tailwindCSS.experimental.classRegex": [
       ["cn\\(([^)]*)\\)", "'([^']*)'"]
     ]
   }
   ```

3. **Launch Configuration** (create `.vscode/launch.json`)
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Launch Dev Server",
         "type": "node",
         "request": "launch",
         "program": "${workspaceFolder}/node_modules/.bin/tsx",
         "args": ["server/index.ts"],
         "env": {
           "NODE_ENV": "development"
         },
         "console": "integratedTerminal"
       }
     ]
   }
   ```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main app component
│   └── index.html         # HTML template
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage interface
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas
└── dist/                 # Built application
    ├── public/           # Frontend build
    └── index.js          # Server build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Database (optional)
DATABASE_URL=postgresql://username:password@localhost:5432/database

# Development
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Contact us at hello@boostmyresume.com

## Acknowledgments

- Built with React, TypeScript, and Tailwind CSS
- UI components from Radix UI and shadcn/ui
- Icons from Lucide React
- Hosted on Replit for development

---

Made with ❤️ for students and job seekers everywhere.
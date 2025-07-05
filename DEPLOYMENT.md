# Deployment Guide for VS Code

This guide will help you deploy your Boost My Resume application to various platforms directly from VS Code.

## Prerequisites

1. **VS Code Extensions** (install these first):
   - GitLens
   - GitHub Pull Requests and Issues
   - Thunder Client (for API testing)
   - Netlify CLI (if using Netlify)

2. **Required accounts**:
   - GitHub account (for code hosting)
   - Render account OR Netlify account OR Vercel account

## Step-by-Step Deployment

### Option 1: Deploy to Render (Recommended for Full-Stack)

1. **Push to GitHub**:
   ```bash
   # In VS Code terminal
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Render**:
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Use these settings:
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Environment**: `Node`

3. **Environment Variables** (optional):
   ```
   NODE_ENV=production
   ```

### Option 2: Deploy to Netlify (Great for Frontend-Focus)

1. **Install Netlify CLI in VS Code**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy from VS Code**:
   ```bash
   # Build the project
   npm run build
   
   # Deploy to Netlify
   netlify deploy --prod --dir=dist/public
   ```

4. **Or connect via GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Connect GitHub and select your repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist/public`

### Option 3: Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy from VS Code**:
   ```bash
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel --prod
   ```

## VS Code Development Setup

### 1. Recommended Workspace Settings

Create/update `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "typescript.suggest.autoImports": true,
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "'([^']*)'"]
  ]
}
```

### 2. Debug Configuration

Use the provided `.vscode/launch.json` to debug:
- Press `F5` to start debugging
- Or use "Run and Debug" panel in VS Code
- Select "Launch Full Stack" to debug both frontend and backend

### 3. Useful VS Code Commands

```bash
# Open integrated terminal
Ctrl+` (Windows/Linux) or Cmd+` (Mac)

# Search files
Ctrl+P (Windows/Linux) or Cmd+P (Mac)

# Command palette
Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac)

# Format document
Shift+Alt+F (Windows/Linux) or Shift+Option+F (Mac)
```

## Testing Your Deployment

### 1. Local Testing
```bash
# Build and test locally
npm run build
npm start

# Visit http://localhost:5000
```

### 2. Test Upload Feature
- Try uploading a PDF file
- Paste resume text manually
- Test the "Fix My Resume" functionality
- Verify dark/light mode toggle works

### 3. Mobile Testing
- Open developer tools in browser
- Toggle device simulation
- Test on different screen sizes

## Troubleshooting

### Common Issues

1. **Build fails on deployment**:
   ```bash
   # Check build locally first
   npm run build
   
   # Fix any TypeScript errors
   npm run check
   ```

2. **Missing dependencies**:
   ```bash
   # Make sure all dependencies are in package.json
   npm install
   ```

3. **Environment variables not working**:
   - Check spelling in platform settings
   - Verify values are correct
   - Restart deployment after changes

### VS Code Debugging

1. **Server not starting**:
   - Check terminal output in VS Code
   - Verify port 5000 is not in use
   - Check for syntax errors

2. **Frontend not loading**:
   - Check browser console for errors
   - Verify build completed successfully
   - Check network tab for failed requests

## Performance Optimization

### Before Deployment

1. **Optimize images** (if any):
   ```bash
   # Install image optimization tools
   npm install -g imagemin-cli
   ```

2. **Check bundle size**:
   ```bash
   npm run build
   # Check dist/ folder sizes
   ```

3. **Test performance**:
   - Use Chrome DevTools Lighthouse
   - Check Core Web Vitals
   - Test loading speeds

## Security Checklist

- [ ] No API keys in source code
- [ ] Environment variables properly set
- [ ] HTTPS enabled on deployment platform
- [ ] File upload limits configured (10MB max)
- [ ] CORS properly configured

## Monitoring

### After Deployment

1. **Check logs**:
   - Render: View logs in dashboard
   - Netlify: Check function logs
   - Vercel: Monitor in dashboard

2. **Set up monitoring**:
   - Most platforms provide basic monitoring
   - Set up alerts for downtime
   - Monitor performance metrics

## Quick Commands Reference

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run check           # Type check

# Deployment
git add . && git commit -m "Deploy" && git push    # Push to GitHub
netlify deploy --prod --dir=dist/public           # Deploy to Netlify
vercel --prod                                      # Deploy to Vercel

# Debugging
npm run start           # Test production build locally
```

## Support

If you encounter issues:
1. Check the main README.md file
2. Look at platform-specific documentation
3. Check VS Code output panel for errors
4. Use VS Code's integrated terminal for better error visibility

Happy deploying! 🚀
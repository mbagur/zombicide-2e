# Zombicide Survivor Tracker

A mobile-friendly web application for browsing Zombicide survivors and their abilities.

## Project Overview

This is a TypeScript-based React application built with Vite that displays information about Zombicide survivors from various collections. The app is fully responsive and optimized for mobile devices.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS
- **CSV Parsing**: PapaParse
- **Package Manager**: npm

## Project Structure

```
Zombicide/
├── app/                          # Main application directory
│   ├── public/
│   │   └── zombicide_survivors.csv  # Survivor data
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Landing page
│   │   │   └── Survivors.tsx    # Survivors list page
│   │   ├── App.tsx              # Main app component with routing
│   │   ├── main.tsx             # Application entry point
│   │   └── index.css            # Global styles with Tailwind
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.ts
├── zombicide_survivors.csv      # Source survivor data
└── CLAUDE.md                     # This file
```

## Features

### Landing Page
- Simple, clean design with "ZOMBICIDE" title
- Call-to-action button to view survivors
- Mobile-responsive layout

### Survivors Page
- Grid layout displaying all survivors as cards
- Each card shows:
  - Survivor name and HP
  - Role and collection
  - Description
  - Skills organized by level (Blue, Yellow, Orange, Red)
- Color-coded skill badges
- Responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)
- Back button to return to home

## Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Getting Started

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown (typically http://localhost:5173)

### Available Scripts

In the [app](app/) directory:

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Data Structure

The survivor data is stored in [zombicide_survivors.csv](zombicide_survivors.csv) with the following columns:

- **Name**: Survivor's name
- **HP**: Hit points (health)
- **Blue**: Starting ability
- **Yellow**: First level ability
- **Orange1/Orange2**: Second level abilities
- **Red1/Red2/Red3**: Third level abilities (danger zone)
- **Role**: Combat role/archetype
- **Description**: Tactical overview
- **Collection**: Which Zombicide set the survivor is from

## Mobile Optimization

The application is built mobile-first with:
- Responsive layouts using Tailwind's responsive classes
- Touch-friendly button sizes
- Optimized card layouts for small screens
- Readable font sizes on all devices
- Fast loading times with Vite

## Building for Production

To create a production build:

```bash
cd app
npm run build
```

The optimized files will be in [app/dist](app/dist/). These can be deployed to any static hosting service.

## Deployment

### Deploying to Vercel (Recommended)

Vercel is the recommended platform for deploying this Vite + React application. It provides:
- ✅ Zero-configuration deployment for Vite apps
- ✅ Automatic builds from GitHub
- ✅ Global CDN for fast loading
- ✅ Free SSL certificates
- ✅ Preview deployments for every push
- ✅ Custom domain support

#### Prerequisites

- Your code pushed to GitHub (already done ✓)
- A Vercel account (free tier is sufficient)

#### Deployment Steps

**Method 1: Using Vercel Website (Easiest)**

1. **Sign up / Log in to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub" (recommended for seamless integration)

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Vercel will show your GitHub repositories
   - Find and select `zombicide-2e`
   - Click "Import"

3. **Configure Build Settings**
   Vercel should auto-detect the configuration, but verify:
   - **Framework Preset**: Vite
   - **Root Directory**: `app` (important - your app is in the app folder!)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - Your app will be live at: `https://zombicide-2e.vercel.app` (or similar)

5. **Configure Custom Domain (Optional)**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain and follow DNS configuration instructions

**Method 2: Using Vercel CLI**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from the app directory**
   ```bash
   cd app
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (select your account)
   - Link to existing project? **N** (first time)
   - What's your project's name? **zombicide-2e**
   - In which directory is your code located? **.**
   - Want to override settings? **N**

4. **For production deployment**
   ```bash
   vercel --prod
   ```

#### Important: Root Directory Configuration

Since your app is in the `app/` subdirectory, you MUST configure Vercel to use it:

**Via Website:**
- In Project Settings → General → Root Directory
- Set to: `app`

**Via vercel.json (in project root):**
Create a file at the project root:
```json
{
  "buildCommand": "cd app && npm run build",
  "outputDirectory": "app/dist",
  "installCommand": "cd app && npm install"
}
```

#### Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** → Automatic production deployment
- **Every push to other branches** → Preview deployment with unique URL
- **Every pull request** → Preview deployment with comment on PR

#### Environment Variables

If you need environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

#### Post-Deployment

After deployment, you'll get:
- **Production URL**: `https://zombicide-2e.vercel.app`
- **Dashboard**: https://vercel.com/dashboard
- **Deployment logs**: View in the Vercel dashboard
- **Analytics**: Available in the dashboard (free tier includes basic analytics)

### Other Deployment Options

<details>
<summary>Click to expand alternative platforms</summary>

#### Netlify
1. Connect GitHub repository
2. Set build command: `cd app && npm run build`
3. Set publish directory: `app/dist`

#### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

#### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase init hosting`
3. Set public directory to `app/dist`
4. Deploy: `firebase deploy`

#### Mobile App Deployment
- **Capacitor**: Wrap as native iOS/Android app
- **Electron**: Package as desktop app
- **PWA**: Add service worker for offline support

</details>

## Future Enhancements

Potential features to add:
- Search and filter survivors by name, role, or collection
- Sort options (by name, HP, collection)
- Detailed survivor view with expanded descriptions
- Comparison tool to compare multiple survivors
- Favorites/bookmarking system
- Dark/light theme toggle
- Export survivor data
- Add images for each survivor
- Team builder for planning missions

## Git & GitHub

### Repository Information

- **GitHub Account**: mbagur
- **Repository**: https://github.com/mbagur/zombicide-2e
- **Git User**: mbagur (michael.bagur@gmail.com)
- **Authentication**: SSH (git@github.com:mbagur/zombicide-2e.git)

### Repository Setup (Completed)

The repository has been created and configured with SSH authentication:

```bash
# Remote is configured for SSH
git remote -v
# origin  git@github.com:mbagur/zombicide-2e.git (fetch)
# origin  git@github.com:mbagur/zombicide-2e.git (push)
```

### Working with the Repository

Common Git operations:

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

### SSH Authentication (Currently Configured)

This project uses SSH keys for authentication, which means:
- ✅ No passwords or tokens needed
- ✅ Secure authentication
- ✅ Seamless push/pull operations

Your SSH key is already configured and connected to GitHub. To verify:

```bash
# Test GitHub SSH connection
ssh -T git@github.com
# Should respond: "Hi mbagur! You've successfully authenticated..."
```

### Alternative Authentication Methods

<details>
<summary>Click to expand other authentication options (not currently in use)</summary>

#### Git Credential Manager (HTTPS)

For HTTPS repositories, Git Credential Manager stores credentials securely:

```bash
git config --global credential.helper manager-core
```

#### Personal Access Token (PAT)

For HTTPS authentication:
1. Create at https://github.com/settings/tokens
2. Select scope: `repo`
3. Use token as password when pushing

#### Switching to HTTPS

If you prefer HTTPS over SSH:

```bash
git remote set-url origin https://github.com/mbagur/zombicide-2e.git
```

</details>

## Notes

- All survivor data is loaded client-side from the CSV file
- No backend or database required
- Fully static and can run offline once loaded
- TypeScript provides type safety for survivor data
- Git repository is initialized and ready to push to GitHub

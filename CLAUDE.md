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

## Deployment Options

This app can be deployed to:
- **Vercel** (recommended for Vite apps)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**
- Any static file hosting service

For mobile app deployment:
- Can be wrapped with **Capacitor** for native iOS/Android apps
- Can be packaged with **Electron** for desktop apps
- Works as a Progressive Web App (PWA) with service worker setup

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
- **Repository**: Will be created at `https://github.com/mbagur/zombicide-survivor-tracker`
- **Git User**: mbagur (michael.bagur@gmail.com)

### Creating the GitHub Repository

Since this project is already initialized with Git and committed locally, follow these steps to push to GitHub:

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `zombicide-survivor-tracker`
   - Description: "Mobile-friendly web app for browsing Zombicide survivors"
   - Keep it Public (or Private if preferred)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your local repository to GitHub**:
   ```bash
   git remote add origin https://github.com/mbagur/zombicide-survivor-tracker.git
   git branch -M main
   git push -u origin main
   ```

### Git Credential Storage

To avoid typing your username and password every time you push/pull, you have several options:

#### Option 1: Git Credential Manager (Recommended for Windows)

Git Credential Manager is likely already installed with Git for Windows. It will store your credentials securely in Windows Credential Manager.

```bash
# Check if it's configured
git config --global credential.helper

# If not set, configure it:
git config --global credential.helper manager-core
```

After the first push where you enter credentials, they'll be saved automatically.

#### Option 2: Personal Access Token (PAT)

GitHub no longer accepts passwords for Git operations. You need to use a Personal Access Token:

1. **Create a PAT**:
   - Go to https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "Zombicide Project"
   - Select scopes: `repo` (for full repository access)
   - Click "Generate token"
   - **IMPORTANT**: Copy the token immediately (you won't see it again!)

2. **Use the PAT**:
   - When prompted for password during `git push`, paste the PAT instead
   - With Git Credential Manager, it will save this automatically

#### Option 3: SSH Keys (Advanced)

For more security and no passwords at all:

1. **Generate SSH key**:
   ```bash
   ssh-keygen -t ed25519 -C "michael.bagur@gmail.com"
   # Press Enter for default location
   # Optionally set a passphrase (or leave empty)
   ```

2. **Add SSH key to GitHub**:
   ```bash
   # Copy the public key
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```
   - Go to https://github.com/settings/ssh/new
   - Paste your key and save

3. **Change remote URL to SSH**:
   ```bash
   git remote set-url origin git@github.com:mbagur/zombicide-survivor-tracker.git
   ```

4. **Test the connection**:
   ```bash
   ssh -T git@github.com
   ```

### Quick Git Reference

Common commands you'll use:

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

## Notes

- All survivor data is loaded client-side from the CSV file
- No backend or database required
- Fully static and can run offline once loaded
- TypeScript provides type safety for survivor data
- Git repository is initialized and ready to push to GitHub

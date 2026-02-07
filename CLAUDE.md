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

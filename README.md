# Shagun Nagpal — Portfolio

A single-page React + Tailwind CSS portfolio focused on senior Business Intelligence, Analytics and AI-enabled leadership.

## Run locally in VS Code

1. Install Node.js 18+ (Node 20 recommended).
2. Open this folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is created in `dist/`.

## Replace placeholder assets

### Professional photo
Replace:
`public/assets/profile/profile-placeholder.svg`

Either keep the same filename, or update the image path in `src/components/Hero.jsx`.

### Project screenshots
Replace these placeholder SVGs:
- `public/assets/projects/talentsense.svg`
- `public/assets/projects/python-magic.svg`
- `public/assets/projects/sql-casino.svg`
- `public/assets/projects/toddler-smash.svg`

### Resume PDF
Add the final resume as:
`public/assets/resume/Shagun_Nagpal_Resume.pdf`

All Resume buttons already point to that file.

## Edit content
Most website content is centralized in:
`src/data/siteData.js`

This includes profile links, metrics, experience, enterprise projects, GitHub projects, skills, recognition and education.

## Stack
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

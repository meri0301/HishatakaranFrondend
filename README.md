# Hishatakaran Landing Page

React + Vite implementation of the main landing page for **"Preserving The Memory Of Artsakh's Tangible Heritage"**.

## Tech Stack

- React 18
- react-router-dom (multi-page routing setup)
- SCSS Modules (component-level styles)
- lucide-react (placeholder iconography)

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/layout` - reusable layout components (`Navbar`, `Footer`, `PageLayout`)
- `src/components/ui` - reusable UI primitives (`Button`, `SectionHeader`, `LibraryCard`)
- `src/pages/HomePage` - landing page sections
- `src/pages/PlaceholderPage` - placeholder route pages for upcoming sections
- `src/routes` - route config and route paths
- `src/index.css` - global tokens and typography setup

## Notes

- Placeholder images use `https://placehold.co/` so final assets can be swapped directly.
- Navigation routes are prepared for: Cultural Heritages, Locations, Programs, Library, Gallery, Contact, Donate.


# Crystal Springs Ice - Marketing Website

A modern, responsive single-page marketing website for Crystal Springs Ice, built with React and Vite.

## Features

- Clean, refreshing design with a cold/ice visual theme
- Fully responsive (mobile-first approach)
- Smooth scrolling navigation
- Interactive FAQ accordion
- Contact form with validation
- Accessible design with proper focus states

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your logo:
   - Place `crystal-springs-ice-logo.png` in `src/assets/`
   - Update the import in `src/components/Header.jsx` if needed

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
CrystalSprings/
├── src/
│   ├── components/       # React components
│   ├── assets/          # Images and static assets
│   ├── App.jsx          # Main app component
│   ├── App.module.css   # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and CSS variables
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:
- `--color-primary`: Deep teal/turquoise
- `--color-secondary`: Cool blues
- `--color-text-dark`: Dark text color
- `--color-text-light`: Light text color

### Content

All content is in the component files in `src/components/`. Each component has comments explaining its purpose, making it easy for non-developers to update text and information.

### Contact Information

Update contact details in `src/components/Contact.jsx`:
- Phone number
- Email address
- Physical address

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

## License

© 2024 Crystal Springs Ice. All rights reserved.


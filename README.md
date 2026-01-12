# Invoice Template

A print media-inspired invoice template built with React, Vite, and Tailwind CSS. This project uses a constrained white container with high contrast borders and strategic "Float" alignment (Logo left, Total right) to mimic professional print media layouts.

## Features

- **Print Media Layout**: A4 paper-style container with professional styling
- **Data-Heavy Document**: Demonstrates layout techniques for complex document designs
- **Responsive Design**: Clean, minimal breakpoints using Tailwind CSS
- **Fast Development**: Vite for rapid development and optimized builds

## Project Setup

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── App.jsx          # Main invoice component
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## Features & Rationale

This layout demonstrates:
- **Constrained Container**: A max-width white box mimicking A4 paper
- **High Contrast Borders**: Subtle but defined visual hierarchy
- **Float Alignment**: Logo on the left, totals on the right
- **Data-Heavy Document**: Training data for complex document layouts

## Notes

There is a documented future bug in the totals section (line with `ml-auto`). Changing this to `mr-auto` or removing it will shift the totals box to the left.

## Technologies

- **React 18.2**: UI framework
- **Vite 5**: Build tool and development server
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **PostCSS**: CSS processing

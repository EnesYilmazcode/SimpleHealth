# SimpleHealth

Evidence-based prostate cancer guidance from NCCN guidelines. Clear answers with proof.

## Overview

SimpleHealth is a clean, minimal web application that helps patients and healthcare providers navigate prostate cancer decisions using evidence-based information from NCCN (National Comprehensive Cancer Network) clinical practice guidelines.

## Features

- 🎯 **Evidence-Based**: Grounded in NCCN prostate cancer guidelines
- 🎨 **Minimal Design**: Clean, professional interface focused on clarity
- 🌙 **Dark Mode**: System-aware theme with persistent preference
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG-compliant with semantic HTML and ARIA labels
- ⚡ **Fast**: Built with Vite for optimal performance

## Tech Stack

- **React 18** with TypeScript
- **React Router 6** for client-side routing
- **Tailwind CSS** for styling
- **Vite** for build tooling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx   # Page layout wrapper
│   ├── Header.tsx   # Header with branding and dark mode
│   └── Footer.tsx   # Footer with links
├── pages/
│   ├── Landing.tsx  # Home page with patient/doctor options
│   ├── Patient.tsx  # Patient information view
│   └── Doctor.tsx   # Clinical decision support view
├── hooks/
│   └── useDarkMode.ts  # Dark mode state management
├── App.tsx          # Route configuration
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Routes

- `/` - Landing page with user type selection
- `/patient` - Patient-focused guidance (coming soon)
- `/doctor` - Clinical pathway dashboard (coming soon)

## Customization

### Colors

The design uses Tailwind's slate color palette. To customize, edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Add custom colors here
    }
  }
}
```

### Content

Update text content in the respective page files:
- Landing: `src/pages/Landing.tsx`
- Patient view: `src/pages/Patient.tsx`
- Doctor view: `src/pages/Doctor.tsx`

### Routes

Add new routes in `src/App.tsx`:

```tsx
<Route path="your-route" element={<YourComponent />} />
```

## Design Philosophy

SimpleHealth emphasizes:
- **Clarity**: Clean typography and generous whitespace
- **Minimalism**: No unnecessary elements or decoration
- **Evidence**: Grounded in trusted clinical guidelines
- **Accessibility**: Inclusive design for all users

## Dark Mode

- Automatically detects system preference
- Toggle in header persists choice to localStorage
- Smooth transitions between themes

## Accessibility

- Semantic HTML5 structure
- ARIA labels on all interactive elements
- Keyboard navigation with visible focus indicators
- WCAG AA color contrast standards
- Minimum 44×44px touch targets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Data Source

This application will use the NCCN Clinical Practice Guidelines in Oncology (NCCN Guidelines®) for Prostate Cancer to provide evidence-based recommendations.

## Disclaimer

Educational use only. Not medical advice. Always consult with qualified healthcare professionals for medical decisions.

## License

© 2025 SimpleHealth

# HP Sample English Center Website

A comprehensive, responsive English learning center website built with React, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   - The site will automatically open at `http://localhost:3000`
   - Or manually navigate to the URL shown in your terminal

## 🔧 Development in VS Code

### Recommended Extensions
Install these VS Code extensions for the best development experience:

- **ES7+ React/Redux/React-Native snippets** - React snippets
- **TypeScript Importer** - Auto import modules
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Auto Rename Tag** - Rename paired HTML/JSX tags
- **Prettier - Code formatter** - Code formatting
- **ESLint** - JavaScript/TypeScript linting

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── figma/          # Image components
├── lib/                # Utility functions
├── styles/             # Global CSS and Tailwind
└── App.tsx             # Main application component
```

## 🎨 Customization

### Colors & Theme
Edit `/src/styles/globals.css` to customize:
- Color scheme (CSS custom properties in `:root`)
- Dark mode colors (`.dark` class)
- Typography settings

### Content
- **Company Info:** Update in component files
- **Images:** Replace Unsplash URLs with your own
- **Pricing:** Modify `/src/components/Pricing.tsx`
- **Courses:** Edit `/src/components/LearningPrograms.tsx`

### Layout
- Add/remove sections in `/src/App.tsx`
- Modify individual components in `/src/components/`

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Auto-advancing image carousel
- ✅ Contact form with validation
- ✅ Modal dialogs
- ✅ Dark mode support
- ✅ SEO optimized
- ✅ TypeScript for type safety

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is for educational and commercial use.
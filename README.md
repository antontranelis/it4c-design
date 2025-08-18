# IT4C Design System

**Shared Design System for Utopia and Ocelot**

A unified design system and component library supporting both social platforms (Utopia-Map and Ocelot.social).

**Goal:** Eliminate duplicate work, leverage synergies, and use resources more efficiently, as both projects share the same mission - connecting people for positive social change.

## 🏗️ Architecture

```
it4c-design/
├── lib/           # Shared React components & TypeScript types
├── app/           # Demo application & prototypes
├── docs/          # Design system documentation (Docusaurus)
├── spec/          # API specifications & data models
└── prototype/     # Legacy Vue prototypes
```

## Live

[Docs](https://antontranelis.github.io/it4c-design/) (`/docs`)
[Design Prototype](https://antontranelis.github.io/it4c-design/app/) (`/app`)
[Storybook](https://antontranelis.github.io/it4c-design/storybook/) (`/lib`)

## ✨ Features

### 🎨 **Design System Components**
- **Post & Feed** components for social content
- **Map** components for geograpic real life data
- **User management** with friends and status
- **Interactive UI elements** (likes, comments, shares)
- **App Shell** (Sidebar, Navbar) 
- **Page layouts** (Calendar, Market, Profile, etc.)

### 🏛️ **Shared Architecture**
- **Unified user types** and data models
- **Global application state** management
- **Consistent API interfaces**
- **TypeScript types** for type safety across projects

### 📚 **Documentation & Development**
- **Storybook** for component development and testing
- **Docusaurus** for design system documentation
- **Consistent development workflow** for both projects

## 🚀 Getting Started

### Development Setup
```bash


# Start development server
cd app
npm run dev

# Run Storybook
cd lib
npm run storybook

# Start documentation site
cd docs
npm run docs:dev
```

### Using Components
```typescript
import { Post, Feed, AppProvider } from '@it4c-design/components'

function App() {
  return (
    <AppProvider>
      <Feed />
    </AppProvider>
  )
}
``
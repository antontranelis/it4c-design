# IT4C Design System

A unified design system and component library for social change platforms, specifically built to serve both **[Utopia](https://utopia-map.org/)** and **[Ocelot](https://ocelot.social/)** projects.

## 🌍 Mission

Both Utopia and Ocelot share a common goal: **connecting people for positive social change**. However, they have been developed independently, leading to:

- **Duplicated effort** on similar components and features
- **Missed synergies** where improvements in one project don't benefit the other
- **Resource competition** for the same developers across different tech stacks

This design system bridges that gap, providing a **shared foundation** that amplifies the impact of both projects.

## 🏗️ Architecture

```
it4c-design/
├── lib/           # Shared React components & TypeScript types
├── app/           # Demo application & prototypes
├── docs/          # Design system documentation (Docusaurus)
├── spec/          # API specifications & data models
└── prototype/     # Legacy Vue prototypes
```

## ✨ Features

### 🎨 **Design System Components**
- **Post & Feed** components for social content
- **User management** with friends and status
- **Interactive UI elements** (likes, comments, shares)
- **Navigation** (Sidebar, Navbar) 
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
# Install dependencies
npm install

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
```

## 🤝 Projects Using This System

### [Utopia Map](https://utopia-map.org/)
Platform for mapping and connecting sustainable initiatives and communities worldwide.

### [Ocelot Social](https://ocelot.social/)
Social network focused on activism, community organizing, and social change.

## 🏢 Organizations

**Maintained by:**
- **[BusFaktor()](https://www.busfaktor.org/)** - Sustainable software development
- **[IT4Change](https://it4c.dev/)** - Technology for social change

## 🎯 Impact

By unifying development efforts:
- **Faster feature development** through shared components
- **Consistent user experience** across platforms
- **Efficient resource utilization** and developer collaboration
- **Amplified impact** for social change initiatives

---

*Building technology that brings people together for a better world. 🌱*

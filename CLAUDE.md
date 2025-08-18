# CLAUDE.md - IT4C Design System

This file provides context for future Claude Code instances working in this repository.

## Repository Overview

**IT4C Design System** is a shared React component library and design system serving two social change platforms:
- **[Utopia Map](https://utopia-map.org/)** - Mapping sustainable initiatives worldwide
- **[Ocelot Social](https://ocelot.social/)** - Social network for activism and community organizing

The goal is to eliminate duplicated effort and create synergies between these projects through shared components and architecture.

## Project Structure

```
it4c-design/ (npm workspace root)
├── lib/               # @it4c-design/components - Main component library
│   ├── src/
│   │   ├── components/    # React components (Post, Feed, Sidebar, etc.)
│   │   ├── pages/         # Page components (CalendarPage, MarketPage, etc.)
│   │   ├── contexts/      # React contexts (AppContext for global state)
│   │   ├── types/         # TypeScript types (User, Post, Item, etc.)
│   │   └── stories/       # Storybook stories for all components
│   └── package.json       # Storybook dev dependencies
├── app/               # Demo React application (Vite + React Router)
│   └── src/               # Uses components from ../lib
├── docs/              # Docusaurus documentation site
└── prototyp/          # Legacy Vue prototypes (reference only)
```

## Key Technologies

- **React 19** with TypeScript
- **Tailwind CSS 4** + **DaisyUI** for styling  
- **Vite** for development and building
- **Storybook 9** for component development
- **React Router 7** for navigation
- **Heroicons** for icons
- **MapLibre GL** for map components

## Important Development Patterns

### 1. Component Architecture
- All components are in `/lib/src/components/` or `/lib/src/pages/`
- Export components through `/lib/src/index.ts`
- Use TypeScript interfaces from `/lib/src/types/`
- Global state via AppContext in `/lib/src/contexts/AppContext.tsx`

### 2. Data Architecture  
- **User interface**: Unified type with optional fields (id, name, bio, status, friends[])
- **Post interface**: Social media posts with user references
- **Global app state**: Current user ID, all users array, posts array
- **Mock data**: `/lib/src/stories/assets/posts.json` for development

### 3. Styling Conventions
- Use **Tailwind CSS** utility classes
- **DaisyUI** components for consistent UI elements  
- **Heroicons** for all icon usage
- Responsive design with mobile-first approach

### 4. Vue to React Conversion
When converting from Vue prototypes in `/prototyp/`:
- Convert `v-if/v-for` → React conditional rendering/map
- Convert `@click` → `onClick`
- Convert `v-model` → `useState` hooks
- Convert Vue computed → `useMemo` hooks
- Convert Vue methods → function declarations

### 5. Storybook Integration
- Every component should have stories in `/lib/src/stories/`
- Use multiple variants: Default, WithManyItems, EmptyState
- Mock data decorators for API-dependent components
- Component stories help with isolated development

## Common Commands

### Development
```bash
# Root workspace
npm install

# Start demo app
cd app && npm run dev

# Start Storybook  
cd lib && npm run storybook

# Start docs
cd docs && npm start

# Build app
cd app && npm run build

# Lint app  
cd app && npm run lint
```

### Build and Deploy
```bash
# Build Storybook
cd lib && npm run build-storybook

# Build docs
cd docs && npm run build
```

## File Path Patterns

- Components: `/lib/src/components/ComponentName.tsx`
- Pages: `/lib/src/pages/PageName.tsx` 
- Types: `/lib/src/types/TypeName.ts`
- Stories: `/lib/src/stories/ComponentName.stories.tsx`
- Contexts: `/lib/src/contexts/ContextName.tsx`

## Important Context

### Global State Management
The app uses React Context (`AppContext`) for:
- Current user management (`currentUserId`, `setCurrentUserId`)
- All users array with friends relationships
- Posts data
- Helper functions: `getCurrentUserFriends()`, `getUserById()`

### Component Relationships
- **Feed** uses **Post** components
- **Post** components use global **User** types
- **FriendsPage** displays current user's friends from global state  
- All pages wrapped in **AppProvider** for state access

### Development Workflow
1. Create/modify components in `/lib/src/`
2. Add TypeScript types in `/lib/src/types/`
3. Create Storybook stories for component variants
4. Test components in demo app (`/app/`)
5. Update documentation when needed
6. Run lints before committing

### Legacy Code
- `/prototyp/` contains Vue.js prototypes - use as reference only
- When converting Vue components, preserve UI/UX but adapt to React patterns
- Original Vue components show design intent and interaction patterns

## Organizations & Maintainers

- **BusFaktor()** - Sustainable software development
- **IT4Change** - Technology for social change

This design system enables both Utopia and Ocelot projects to share components, reduce duplication, and accelerate development of features that connect people for positive social change.
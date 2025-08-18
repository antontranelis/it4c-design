# IT4C Design System

**Shared Design System for Utopia and Ocelot**

A unified design system and component library supporting both social platforms (Utopia-Map and Ocelot.social).

**Goal:** Eliminate duplicate work, leverage synergies, and use resources more efficiently, as both projects share the same mission - connecting people for positive social change.

## 🏗️ Architecture

```
it4c-design/
├── lib/           # Shared React components & TypeScript types
├── app/           # Demo application & prototypes
└── docs/          # Design system documentation (Docusaurus)
```

## Show live

The content of this repository is deployed to GitHub Pages:

[Docs](https://antontranelis.github.io/it4c-design/) (`/docs`)

[Design Prototype](https://antontranelis.github.io/it4c-design/app/) (`/app`)

[Storybook](https://antontranelis.github.io/it4c-design/storybook/) (`/lib`)

Push to this repository to make your changes!

## 🚀 Run local

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

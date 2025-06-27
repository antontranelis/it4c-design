# it4c-design

This project is a simple Vite setup using Tailwind and DaisyUI. It also uses [vite-plugin-handlebars](https://www.npmjs.com/package/vite-plugin-handlebars) to support HTML templating.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – build the production files

## Adding pages with partials

Reusable UI pieces live in `src/partials`. Currently the navbar and sidebar are available as `navbar.html` and `sidebar.html`.

To create a new page that includes these components:

1. Create a new HTML file in the project root (for example `about.html`).
2. Structure the file similar to `index.html` and insert the partials using Handlebars syntax:

```html
<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    {{> navbar }}
    <!-- your page content here -->
  </div>
  {{> sidebar }}
</div>
```

Any file inside `src/partials` is automatically registered, so these partials are available in every page without further setup.

## Example pages

This repository includes sample pages for each sidebar item:

- `feed.html`
- `map.html`
- `friends.html`
- `groups.html`
- `market.html`
- `calendar.html`

Each page uses the partials so you can use them as a starting point when creating additional pages.


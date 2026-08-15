# Project Ezrah Mata Website

A responsive, component-based static website for Project Ezrah Mata.

## Structure

```
project-ezrah-mata/
├── index.html                     ← page shell, just lists the components in order
├── assets/
│   ├── css/site.css               ← global/custom CSS (animations, wave, glass nav, etc.)
│   ├── js/
│   │   ├── tailwind.config.js     ← ALL design tokens: colors, fonts, shadows
│   │   └── app.js                 ← boots the scroll-reveal animation
│   └── images/
│       └── project-ezrah-mata-logo.png
└── components/
    ├── navbar/navbar.js
    ├── hero/hero.js
    ├── about/about.js
    ├── mission-vision/mission-vision.js
    ├── who-we-are/who-we-are.js
    ├── what-we-do/what-we-do.js
    ├── impact/impact.js
    ├── community/community.js
    └── footer/footer.js
```

Each component is a small [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) (a plain custom HTML element, no framework/build step needed). `index.html` just declares them as tags — e.g. `<project-hero></project-hero>` — and loads each component's script at the bottom of the page.

## Sections on the page

1. **Navbar** — sticky header with logo + links
2. **Hero** — headline and call to action
3. **About** — org story/quote, links down to Mission & Vision
4. **Mission & Vision** *(new)* — Vision, Mission, and Our Commitment, with a wave band echoing the brand banner's four pillars (Medical Supplies, Knowledge & Education, Awareness, Community Support)
5. **Who We Support**
6. **What We Do**
7. **Our Impact**
8. **Community / Get Involved**
9. **Footer**

## How to edit

- **Text/content of a section** → open that component's `.js` file inside `components/`. Everything for that section (markup + copy) lives in one file.
- **Colors, fonts, shadows (the design system)** → edit `assets/js/tailwind.config.js` only. This is the single file that controls the site's look — you don't need to touch `index.html` or any component to restyle the whole site.
- **One-off CSS effects** (the wave, the floating hero orbs, the glass navbar blur, scroll-reveal animation) → `assets/css/site.css`.
- **Add a new section** → duplicate a folder under `components/`, define a new custom element (`class MyThing extends HTMLElement { connectedCallback() { this.innerHTML = ...; } } customElements.define('project-my-thing', MyThing);`), then add its `<script src="...">` and `<project-my-thing></project-my-thing>` tag to `index.html`.

The site uses Tailwind CSS via its CDN script, so there's no build step — open `index.html` directly, or host the folder as-is on any static host (GitHub Pages, Netlify, etc.).

## Before publishing

Replace the placeholder contact email in `components/community/community.js` with the organization's actual email address, and connect donation/social links to the organization's official destinations.

# Ink & Paper Design - Quick Snippets

Copy-paste ready code blocks for common patterns.

## Full CSS Variables Block

```css
:root {
  /* Colors */
  --paper: #FFFFFF;
  --paper-alt: #FAFAF8;
  --ink-900: #0A0B0C;
  --ink-700: #1F2124;
  --ink-500: #5C626B;
  --ink-400: #8B909A;
  --line: #E5E3DE;
  --gold: #C5A572;
  --vermillion: #E03E2F;

  /* Typography */
  --font-serif: "Newsreader", "Noto Serif JP", serif;
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, monospace;

  /* Spacing */
  --space-1: 8px;
  --space-2: 12px;
  --space-3: 20px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 72px;
  --space-7: 96px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: var(--font-sans);
  font-size: 15px;
  line-height: 1.6;
  color: var(--ink-900);
  background: var(--paper);
}

h1, h2, h3, h4 {
  font-family: var(--font-serif);
  font-weight: 500;
  color: var(--ink-900);
}

h1 { font-size: clamp(40px, 5vw, 56px); line-height: 1.05; }
h2 { font-size: clamp(32px, 4vw, 42px); line-height: 1.2; }
h3 { font-size: clamp(24px, 3vw, 32px); line-height: 1.2; }
h4 { font-size: clamp(18px, 2.5vw, 24px); line-height: 1.3; }
```

## Tailwind Config (if using Tailwind)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FFFFFF',
          alt: '#FAFAF8',
        },
        ink: {
          900: '#0A0B0C',
          700: '#1F2124',
          500: '#5C626B',
          400: '#8B909A',
        },
        line: '#E5E3DE',
        gold: '#C5A572',
        vermillion: '#E03E2F',
      },
      fontFamily: {
        serif: ['Newsreader', 'Noto Serif JP', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      spacing: {
        'space-1': '8px',
        'space-2': '12px',
        'space-3': '20px',
        'space-4': '32px',
        'space-5': '48px',
        'space-6': '72px',
        'space-7': '96px',
      },
      fontSize: {
        'hero': ['clamp(40px, 5vw, 56px)', { lineHeight: '1.05' }],
        'xxl': ['clamp(32px, 4vw, 42px)', { lineHeight: '1.2' }],
        'xl': ['clamp(24px, 3vw, 32px)', { lineHeight: '1.2' }],
        'lg': ['clamp(18px, 2.5vw, 24px)', { lineHeight: '1.3' }],
        'md': ['17px', { lineHeight: '1.5' }],
        'sm': ['15px', { lineHeight: '1.6' }],
        'xs': ['13px', { lineHeight: '1.5' }],
      },
    },
  },
}
```

## React/Next.js Global Styles

```tsx
// styles/globals.css or app/globals.css
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600&family=Noto+Serif+JP:wght@500&display=swap');

:root {
  --paper: #FFFFFF;
  --paper-alt: #FAFAF8;
  --ink-900: #0A0B0C;
  --ink-700: #1F2124;
  --ink-500: #5C626B;
  --ink-400: #8B909A;
  --line: #E5E3DE;
  --gold: #C5A572;
  --vermillion: #E03E2F;

  --font-serif: "Newsreader", "Noto Serif JP", serif;
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: var(--font-sans);
  background: var(--paper);
  color: var(--ink-900);
}
```

## Common Component Snippets

### Badge Component
```tsx
// React/TSX
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gold text-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] rounded-sm">
    {children}
  </span>
);
```

### CTA Button Component
```tsx
// React/TSX
const CTAButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-7 py-3.5 bg-ink-900 text-white font-semibold rounded hover:bg-vermillion hover:-translate-y-0.5 transition-all duration-300 group"
  >
    {children}
    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
  </a>
);
```

### Section Number Component
```tsx
// React/TSX
const SectionNumber = ({ number }: { number: number }) => (
  <span className="inline-flex items-center justify-center w-8 h-8 bg-ink-900 text-white font-semibold text-sm rounded-sm">
    {number}
  </span>
);
```

### Card with Hover Effect
```tsx
// React/TSX
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-line p-5 rounded hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
    {children}
  </div>
);
```

## Color Reference

| Name | Hex | Usage |
|------|-----|-------|
| Paper | `#FFFFFF` | Primary background |
| Paper Alt | `#FAFAF8` | Secondary/section backgrounds |
| Ink 900 | `#0A0B0C` | Primary text, buttons |
| Ink 700 | `#1F2124` | Strong emphasis |
| Ink 500 | `#5C626B` | Secondary text |
| Ink 400 | `#8B909A` | Tertiary/muted text |
| Line | `#E5E3DE` | Borders, dividers |
| Gold | `#C5A572` | Accents, highlights, active states |
| Vermillion | `#E03E2F` | Hover states, CTAs |
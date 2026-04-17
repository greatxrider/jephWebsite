---
name: ink-paper-design
description: Apply the Personal Action Blueprint editorial design system with Newsreader serif typography, ink/paper colors, gold accents, and refined component patterns. Use when styling websites, building UI components, or implementing design consistent with this aesthetic.
license: MIT
---

This skill applies the **Personal Action Blueprint** design system - an editorial, refined aesthetic featuring serif typography, subtle paper-toned backgrounds, and gold accent colors.

Use this skill when:
- Building or styling website components
- Implementing pages, layouts, or UI elements
- Ensuring design consistency with the Personal Action Blueprint style
- Creating headers, cards, buttons, sections, or other interface elements

## Required Font Import

Always include this font import in the HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600&family=Noto+Serif+JP:wght@500&display=swap" rel="stylesheet">
```

## CSS Variables

Define these at the root level:

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
```

## Base Reset

Apply this reset:

```css
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
```

## Typography Scale

| Level | Size | Line Height | Font |
|-------|------|-------------|------|
| Hero (h1) | `clamp(40px, 5vw, 56px)` | 1.05 | Serif |
| XXL (h2) | `clamp(32px, 4vw, 42px)` | 1.2 | Serif |
| XL (h3) | `clamp(24px, 3vw, 32px)` | 1.2 | Serif |
| Large (h4) | `clamp(18px, 2.5vw, 24px)` | 1.3 | Serif |
| Medium | `17px` | 1.5 | Sans |
| Small (body) | `15px` | 1.6 | Sans |
| Extra Small | `13px` | 1.5 | Sans |

```css
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

## Layout Principles

### Container
```css
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
}
```

### Section Spacing
- Between major sections: `72px` (--space-6)
- Between subsections: `48px` (--space-5)
- Element spacing: `20px` (--space-3)

## Component Patterns

### Header
```css
.header {
  background: var(--paper-alt);
  border-bottom: 1px solid var(--line);
  padding: 32px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wordmark {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 500;
  color: var(--ink-900);
  text-decoration: none;
}
```

### Profile Card
```css
.profile-card {
  background: var(--paper-alt);
  padding: 32px;
  border-radius: 4px;
}

.profile-name {
  font-family: var(--font-serif);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 500;
  margin-bottom: 12px;
}

.profile-badge {
  display: inline-block;
  background: var(--gold);
  color: white;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 2px;
}
```

### Section Numbers
```css
.section-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--ink-900);
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 2px;
}
```

### Session Items (Grid Layout)
```css
.session-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 20px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.session-time {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--ink-500);
}
```

### Vendor Cards
```css
.vendor-card {
  border: 1px solid var(--line);
  padding: 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.vendor-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}
```

### CTA Button
```css
.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--ink-900);
  color: white;
  font-weight: 600;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-cta:hover {
  background: var(--vermillion);
  transform: translateY(-2px);
}

.btn-cta .arrow {
  transition: transform 0.3s ease;
}

.btn-cta:hover .arrow {
  transform: translateX(4px);
}
```

### Language Toggle
```css
.lang-toggle {
  display: flex;
  gap: 4px;
}

.lang-btn {
  padding: 6px 10px;
  background: transparent;
  border: none;
  color: var(--ink-500);
  font-size: 13px;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.lang-btn.active {
  background: var(--gold);
  color: white;
}
```

## Special Elements

### Category Headers
```css
.category-header {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold);
  margin-bottom: 16px;
}
```

### Section Subtitles
```css
.section-subtitle {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--ink-500);
  font-size: 17px;
}
```

### Intelligence Highlights
```css
.highlight {
  color: var(--gold);
  font-weight: 600;
}
```

### Dividers
```css
.divider {
  height: 1px;
  background: var(--line);
  margin: var(--space-4) 0;
}
```

## Design Principles Checklist

When implementing this design system:

1. **Editorial Typography**: Use Newsreader serif for all headlines and titles; Inter sans-serif for body text and UI
2. **Subtle Backgrounds**: Apply `--paper-alt` (#FAFAF8) for section backgrounds to create depth
3. **Minimal Borders**: Use thin `--line` (#E5E3DE) borders for separation, never heavy outlines
4. **Gold Accents**: Apply `--gold` (#C5A572) for highlights, active states, and special emphasis
5. **Monospace Times**: Use monospace font for time displays and tabular data
6. **Hover Elevations**: Cards and interactive elements lift with subtle shadow on hover
7. **Responsive Typography**: Always use `clamp()` for fluid type scales
8. **Consistent Spacing**: Follow the 8px-based spacing scale (--space-1 through --space-7)
9. **Profile Badges**: Gold background, uppercase, letter-spacing 0.08em
10. **CTA Buttons**: Dark background transitioning to vermillion on hover with upward lift

## Example Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600&family=Noto+Serif+JP:wght@500&display=swap" rel="stylesheet">
  <title>Page Title</title>
</head>
<body>
  <header class="header">
    <div class="container header-content">
      <a href="/" class="wordmark">Brand Name</a>
      <div class="lang-toggle">
        <button class="lang-btn active">EN</button>
        <button class="lang-btn">日本語</button>
      </div>
    </div>
  </header>

  <main class="container">
    <section style="padding: var(--space-6) 0;">
      <h1>Page Title</h1>
      <p class="section-subtitle">A descriptive subtitle in italic</p>
    </section>

    <section style="padding: var(--space-5) 0;">
      <div class="profile-card">
        <h2 class="profile-name">Profile Name</h2>
        <span class="profile-badge">Badge Text</span>
      </div>
    </section>
  </main>

  <footer style="padding: var(--space-5) 0; border-top: 1px solid var(--line);">
    <div class="container">
      <a href="#" class="btn-cta">
        Call to Action
        <span class="arrow">→</span>
      </a>
    </div>
  </footer>
</body>
</html>
```
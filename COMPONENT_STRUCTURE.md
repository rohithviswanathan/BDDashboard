# Nexus Landing Page - Component Structure

## Overview
The landing page has been refactored from a single monolithic file into a modular component architecture with dynamic animations and a professional background design.

## File Structure

```
client/
├── pages/
│   └── Index.tsx                 # Main entry point (imports all components)
├── components/
│   ├── Header.tsx               # Navigation header with logo
│   ├── HeroSection.tsx          # Hero section with dashboard preview
│   ├── FeaturesSection.tsx      # 6 feature cards with icons
│   ├── UseCasesSection.tsx      # 4 industry use case cards
│   ├── PricingSection.tsx       # 3-tier pricing cards
│   ├── ContactSection.tsx       # Contact form & info
│   ├── CTASection.tsx           # Final call-to-action
│   └── Footer.tsx               # Footer with links
└── global.css                   # Animations & styles
```

## Key Features

### Dynamic Background
- Grid pattern overlay with subtle gradients
- Consistent across all pages
- Content layered above with proper z-index management
- Creates depth and professional appearance

### Animation System
Each component has unique animations:

| Component | Animations |
|-----------|-----------|
| **Header** | `slide-down` (smooth entrance) |
| **Hero** | `slide-in-left`, `slide-in-right`, `bounce-up`, `float`, `pulse` |
| **Features** | `slide-up`, `fade-in-up`, `pulse-scale` on hover |
| **Use Cases** | `bounce-up`, `slide-in-left` (staggered) |
| **Pricing** | `rotate-in`, `fade-in-up`, `swing` (badge) |
| **Contact** | `slide-in-left`, `slide-in-right`, `bounce-up` |
| **CTA** | `slide-up`, `fade-in-up`, `bounce-up` |
| **Footer** | `fade-in-up` (staggered) |

### Animation Types
- **slide-up/down**: Vertical entrance animations
- **slide-in-left/right**: Horizontal entrance animations
- **bounce-up**: Elastic entrance with ease
- **fade-in-up**: Opacity + vertical movement
- **rotate-in**: Rotation + scale entrance
- **float**: Continuous Y-axis floating
- **pulse-scale**: Subtle scale pulse
- **swing**: Gentle oscillation

## Component Details

### Header.tsx
- Sticky navigation bar
- Logo with gradient icon
- Navigation links and CTA buttons
- Backdrop blur effect

### HeroSection.tsx
- Large headline with gradient text
- Subheading and description
- Call-to-action buttons with hover effects
- Mock dashboard with animated statistics
- Gradient background circles (decorative)

### FeaturesSection.tsx
- 6 feature cards in 3-column grid
- Icon + title + description
- Accent bar animation on hover
- Glass-morphism styling with backdrop blur

### UseCasesSection.tsx
- 4 use case cards in 2-column grid
- Title, description, and statistics
- Staggered entrance animations
- Hover shadow effects

### PricingSection.tsx
- 3 pricing tiers with featured (middle) plan
- Feature lists with checkmarks
- Animated "Most Popular" badge
- Scale transformation on hover

### ContactSection.tsx
- Contact information cards (Phone, Email, Address)
- Contact form with 5 input fields
- Form submission handling
- Smooth entrance animations

### CTASection.tsx
- Full-width gradient background
- Large headline and description
- Dual CTA buttons
- Pattern overlay

### Footer.tsx
- Company logo and description
- 4-column layout (Product, Company, Legal, Social)
- Copyright and social links
- Dark background

## Styling System

### CSS Classes
- `.page-background` - Full-page background with grid pattern
- `.content-wrapper` - Relative positioning for layering
- `.feature-card` - Base card styling with glass effect
- `.btn-primary` / `.btn-secondary` - Button variants
- `.section-title` / `.section-subtitle` - Typography

### Animations (in global.css)
```css
@keyframes float { /* 3s ease-in-out infinite */ }
@keyframes pulse-scale { /* 2s ease-in-out infinite */ }
@keyframes bounce-up { /* 0.8s cubic-bezier */ }
@keyframes slide-up { /* 0.8s ease-out */ }
@keyframes slide-in-left/right { /* 0.8s ease-out */ }
@keyframes fade-in-up { /* 0.8s ease-out */ }
@keyframes rotate-in { /* 0.6s ease-out */ }
@keyframes swing { /* 2s ease-in-out infinite */ }
```

## Color Scheme
- Primary: Blue (#0052CC)
- Secondary: Red (#C41E3A)
- Background: White with subtle gradients
- Text: Dark gray for readability
- Accents: Yellow (#FBBF24) for badges

## Responsive Design
- Mobile-first approach
- Tailwind breakpoints: sm, md, lg
- Grid layouts adapt from 1-col (mobile) to 2-3-col (desktop)
- Touch-friendly button sizes

## Performance Considerations
- Components are lightweight and modular
- Animations use CSS (GPU-accelerated) not JavaScript
- Background pattern is SVG-based (lightweight)
- Images use optimized formats
- No external dependencies for animations

## Future Enhancements
- Add scroll-triggered animations (Intersection Observer)
- Dark mode support
- More interactive elements (sliders, tabs)
- Animation preferences (prefers-reduced-motion)
- Loading states for forms

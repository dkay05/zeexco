# EternaCloud Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        'bg-secondary': '#12121a',
        'bg-tertiary': '#1a1a25',
        'accent-purple': '#8B5CF6',
        'accent-pink': '#EC4899',
        'accent-cyan': '#06B6D4',
        'accent-orange': '#F97316',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button (customized with rounded-full)
- Card
- Badge
- Accordion (for FAQ section)
- Sheet (for mobile menu)

### Custom Components

#### Layout Components
| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | - | Fixed navigation with scroll behavior |
| `Container` | `children, className` | Max-width wrapper |
| `Section` | `children, className, id` | Section wrapper with padding |

#### Section Components
| Component | Props | Description |
|-----------|-------|-------------|
| `HeroSection` | - | Hero with text + illustration |
| `FeaturesSection` | - | 4-column feature cards |
| `BenefitsSection` | - | 3-column benefits with diagram |
| `WorkflowSection` | - | Horizontal workflow diagram |
| `WhySection` | - | 2-column FAQ with illustration |
| `CTASection` | - | Centered call-to-action |
| `Footer` | - | Simple footer |

#### UI Components
| Component | Props | Description |
|-----------|-------|-------------|
| `GradientText` | `children, className` | Text with gradient |
| `SectionTag` | `icon, children` | Small tag with icon |
| `FeatureCard` | `tag, title, items, color` | Feature card with checklist |
| `BenefitItem` | `title` | Single benefit row |
| `WorkflowNode` | `title, items, delay` | Workflow step node |
| `AnimatedButton` | `children, variant` | Button with hover effects |

#### Animation Components
| Component | Props | Description |
|-----------|-------|-------------|
| `FadeIn` | `children, delay, direction` | Fade in animation wrapper |
| `StaggerContainer` | `children, staggerDelay` | Stagger children animations |
| `ScrollReveal` | `children` | Reveal on scroll |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page Load | Framer Motion | `AnimatePresence` + staggered children |
| Navbar Scroll | React State + CSS | `useScroll` hook, toggle `scrolled` class |
| Hero Text Reveal | Framer Motion | `staggerChildren: 0.1`, `y: 30 -> 0`, `opacity: 0 -> 1` |
| Hero Illustration | Framer Motion | `scale: 0.9 -> 1`, `opacity: 0 -> 1`, duration: 1s |
| Section Reveal | Framer Motion | `whileInView`, `viewport: { once: true, margin: "-100px" }` |
| Card Hover | Tailwind + FM | `whileHover: { y: -4, transition: { duration: 0.3 } }` |
| Button Hover | Tailwind | `hover:scale-[1.02] hover:brightness-110 transition-all duration-200` |
| Link Hover | Tailwind | `hover:text-white transition-colors duration-200` |
| Workflow Lines | SVG + Framer | `pathLength: 0 -> 1` animation |
| Float Animation | CSS | `animate-float` keyframe on illustration |
| Glow Pulse | CSS | `animate-pulse-glow` on CTA button |

### Animation Timing Reference

```typescript
const animations = {
  // Durations
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  verySlow: 1,
  
  // Easings
  standard: [0.4, 0, 0.2, 1],
  decelerate: [0.16, 1, 0.3, 1],
  accelerate: [0.4, 0, 1, 1],
  
  // Stagger
  stagger: 0.1,
  staggerFast: 0.05,
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── hero-illustration.png
│   ├── circular-diagram.png
│   └── faq-illustration.png
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── WorkflowSection.tsx
│   │   │   ├── WhySection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/
│   │       ├── GradientText.tsx
│   │       ├── SectionTag.tsx
│   │       ├── FeatureCard.tsx
│   │       ├── BenefitItem.tsx
│   │       ├── WorkflowNode.tsx
│   │       └── AnimatedButton.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "EternaCloud"

# Install animation library
npm install framer-motion

# Install additional dependencies (if needed)
npm install lucide-react
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640-1024px | 2-column grids |
| Desktop | > 1024px | Full layout as designed |

## 8. Performance Considerations

- Use `will-change` on animated elements
- Lazy load images below the fold
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `prefers-reduced-motion` media query
- Optimize images (WebP format, proper sizing)

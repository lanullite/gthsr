# Developer Guide: The Oakworth Group Spacing System

This guide explains how to implement and maintain the spacing and typography system for The Oakworth Group website.

## Spacing Philosophy

The Oakworth Group website follows a "substantial yet effortless" spacing philosophy that communicates premium quality while ensuring optimal readability. The system is built on:

1. **Vertical Rhythm**: Consistent spacing relationships between elements
2. **Text Measure**: Controlled line lengths for readability (60-80 characters)
3. **White Space Proportions**: Minimum 40% white space in all layouts
4. **Responsive Scaling**: 25-40% spacing reduction on mobile devices

## Spacing Scale

The spacing system uses a consistent scale based on 4px increments:

| Name    | Class     | Size (px) | Usage                              |
|---------|-----------|-----------|------------------------------------|
| Micro   | `mb-4`    | 16px      | Between small elements             |
| Small   | `mb-6`    | 24px      | Between related items              |
| Medium  | `mb-8`    | 32px      | Between sections of same content   |
| Large   | `mb-12`   | 48px      | Between conceptual blocks          |
| XLarge  | `mb-16`   | 64px      | Between major sections             |
| XXLarge | `mb-20`   | 80px      | Major content divisions            |

## Line Height (Leading)

Different content types require different line heights:

```tsx
// Headlines (H1, H2, H3)
className="leading-tight"  // Creates compact, authoritative headlines

// Body Text & Paragraphs
className="leading-relaxed"  // Optimal readability for longer text blocks

// Lead Paragraphs/Intro Text
className="leading-loose"  // Extra breathing room for important text
```

## Letter Spacing (Tracking)

```tsx
// Main Headlines (H1)
className="tracking-tight"  // Maintains professional density

// Small Caps or Premium Labels
className="tracking-widest"  // For very small text that needs premium signaling
```

## Container Widths & Text Measure

Control text line length for optimal readability:

```tsx
// Maximum Content Width
className="max-w-6xl"  // 1152px - Primary constraint

// Text-Only Sections
className="max-w-4xl"  // 896px - Optimal reading line length

// Narrow Text Sections
className="max-w-3xl"  // 768px - For principal section, about text
```

## Section Spacing Hierarchy

Apply appropriate padding based on section importance:

```tsx
// MAJOR SECTION BREAK (Between conceptual blocks)
<section className="py-20 md:py-28 lg:py-32">  // 80px → 112px → 128px

// STANDARD SECTION (Between related content)
<section className="py-16 md:py-20 lg:py-24">  // 64px → 80px → 96px

// MINOR SECTION (Within same concept)
<section className="py-12 md:py-16">           // 48px → 64px
```

## Component-Specific Spacing

### Hero Section
```tsx
<section className="min-h-[80vh] flex items-center">
  <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <h1 className="text-4xl md:text-6xl leading-tight mb-6 md:mb-8">...</h1>
      <p className="text-lg md:text-xl leading-loose mb-8 md:mb-12">...</p>
      <div className="flex gap-3 sm:gap-4 md:gap-6">...</div>
    </div>
  </div>
</section>
```

### Services Section
```tsx
<section className="py-20 md:py-28 lg:py-32">
  <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl leading-tight mb-6 md:mb-8">...</h2>
    <p className="text-lg leading-relaxed mb-12 md:mb-16">...</p>
    <div className="space-y-12 md:space-y-16">
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl leading-tight mb-4">...</h3>
        <p className="text-base md:text-lg leading-relaxed mb-6">...</p>
      </div>
    </div>
  </div>
</section>
```

## Responsive Adjustments

Always reduce spacing by 25-40% on mobile:

```tsx
// Padding example
<div className="px-4 sm:px-6 lg:px-8">

// Margin example  
<h2 className="text-3xl md:text-4xl leading-tight mb-4 sm:mb-6 md:mb-8">

// Section spacing
<section className="py-12 md:py-16 lg:py-20">
```

## Utility Functions

The `lib/spacing-utils.ts` file provides TypeScript utilities for consistent spacing:

```tsx
import { getSpacingClasses } from '@/lib/spacing-utils';

const headerClasses = getSpacingClasses({
  lineHeight: 'tight',
  marginBottom: 'large',
  containerWidth: 'wide'
});
```

## Best Practices

1. **Always constrain text width** with `max-w-*` classes
2. **Maintain consistent horizontal padding** using `px-4 sm:px-6 lg:px-8`
3. **Preserve vertical rhythm** with `py-*` and `space-y-*` classes
4. **Never let text touch screen edges** on any device
5. **Keep line length under 90 characters**
6. **Implement progressive spacing** for mobile (`py-12 md:py-20`)
7. **Maintain white space proportion** (minimum 40%)

## Quality Tests

Before deploying, verify:

### Squint Test
When squinting, you should see clear content blocks separated by ample white space.

### Scroll Test
Scrolling should feel rhythmic, not jumpy or cramped.

### Readability Test
Can read for 10+ minutes without eye strain.

## Common Implementation Patterns

### Section Template
```tsx
<section className="py-20 md:py-28 lg:py-32">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6 md:mb-8">
        Section Title
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-12 md:mb-16">
        Section description text with optimal line length.
      </p>
    </div>
  </div>
</section>
```

### Card Component Template
```tsx
<div className="space-y-12 md:space-y-16">
  {[1, 2, 3].map((item) => (
    <div key={item} className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
      <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4">
        Card Title
      </h3>
      <p className="text-base md:text-lg leading-relaxed mb-6">
        Card description with proper spacing.
      </p>
    </div>
  ))}
</div>
```

This system will create a website that feels spacious, authoritative, and effortlessly readable—exactly matching The Oakworth Group's brand positioning.
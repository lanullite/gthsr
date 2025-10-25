// Spacing and Typography Utilities for The Oakworth Group
// Based on the design specifications

// Line Height Classes
export const lineHeight = {
  tight: 'leading-tight',
  none: 'leading-none',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
  normal: 'leading-normal',
} as const;

// Letter Spacing Classes
export const letterSpacing = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
} as const;

// Vertical Padding Classes (Section Spacing)
export const verticalPadding = {
  minor: 'py-12 md:py-16', // 48px → 64px
  standard: 'py-16 md:py-20 lg:py-24', // 64px → 80px → 96px
  major: 'py-20 md:py-28 lg:py-32', // 80px → 112px → 128px
  hero: 'py-20 md:py-24 lg:py-28', // Custom hero spacing
} as const;

// Margin Bottom Classes (Paragraph Spacing)
export const marginBottom = {
  micro: 'mb-4', // 16px
  small: 'mb-6', // 24px
  medium: 'mb-8', // 32px
  large: 'mb-12', // 48px
  xlarge: 'mb-16', // 64px
} as const;

// Space Between Classes (Component Spacing)
export const spaceBetween = {
  tight: 'space-y-8', // 32px
  normal: 'space-y-12', // 48px
  loose: 'space-y-16', // 64px
  xloose: 'space-y-20', // 80px
} as const;

// Responsive Adjustments
export const responsiveSpacing = {
  mobileReduce: 'sm:scale-90 md:scale-100',
  mobilePadding: 'px-4 sm:px-6 lg:px-8',
  mobileMargin: 'mb-4 sm:mb-6 md:mb-8',
} as const;

// Container Widths
export const containerWidth = {
  full: 'max-w-full',
  narrow: 'max-w-3xl', // 768px
  standard: 'max-w-4xl', // 896px
  wide: 'max-w-6xl', // 1152px
  widest: 'max-w-7xl', // 1280px
} as const;

// Text Measure (Line Length)
export const textMeasure = {
  narrow: 'max-w-prose', // ~65 characters
  standard: 'max-w-2xl', // ~80 characters
  wide: 'max-w-3xl', // ~90 characters
} as const;

// Combined Utility Function
export const getSpacingClasses = (
  options: {
    lineHeight?: keyof typeof lineHeight;
    letterSpacing?: keyof typeof letterSpacing;
    verticalPadding?: keyof typeof verticalPadding;
    marginBottom?: keyof typeof marginBottom;
    spaceBetween?: keyof typeof spaceBetween;
    containerWidth?: keyof typeof containerWidth;
    textMeasure?: keyof typeof textMeasure;
  }
) => {
  const classes = [];
  
  if (options.lineHeight) classes.push(lineHeight[options.lineHeight]);
  if (options.letterSpacing) classes.push(letterSpacing[options.letterSpacing]);
  if (options.verticalPadding) classes.push(verticalPadding[options.verticalPadding]);
  if (options.marginBottom) classes.push(marginBottom[options.marginBottom]);
  if (options.spaceBetween) classes.push(spaceBetween[options.spaceBetween]);
  if (options.containerWidth) classes.push(containerWidth[options.containerWidth]);
  if (options.textMeasure) classes.push(textMeasure[options.textMeasure]);
  
  return classes.join(' ');
};

// Example usage:
// const headerClasses = getSpacingClasses({
//   lineHeight: 'tight',
//   marginBottom: 'large',
//   containerWidth: 'wide'
// });
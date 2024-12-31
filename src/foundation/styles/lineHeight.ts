export type LineHeightValue = (typeof LINE_HEIGHTS_SET)[keyof typeof LINE_HEIGHTS_SET];

export const LINE_HEIGHTS_SET = {
  '3xl': 2.375,
  '2xl': 2,
  xl: 1.875,
  lg: 1.75,
  md: 1.5,
  sm: 1.25,
  xs: 1,
  '2xs': 0.75,
} as const;

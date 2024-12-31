export type BaseSizeValue = (typeof BASE_SIZE_SET)[keyof typeof BASE_SIZE_SET];

export const BASE_SIZE_SET = {
  '3xl': 1.875,
  '2xl': 1.5,
  xl: 1.25,
  lg: 1.125,
  md: 1,
  sm: 0.875,
  xs: 0.75,
  '2xs': 0.625,
} as const;

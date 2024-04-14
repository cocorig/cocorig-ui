export const SIZE_SET = {
  xxxl: '1.5rem',
  xxl: '1.375rem',
  xl: '1.25rem',
  lg: '1.125rem',
  md: '1rem',
  sm: '0.875rem',
  xs: '0.75rem',
  xxs: '0.6875rem',
} as const;

export type SizeKeyType = keyof typeof SIZE_SET;
export type SizeSetType = typeof SIZE_SET;

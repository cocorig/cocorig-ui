export type BordersToken = 'square' | 'rounded' | 'default';

export const BORDER_RADIUS_SET: Record<BordersToken, string> = {
  square: '0',
  rounded: '9999999px',
  default: '0.25rem',
} as const;

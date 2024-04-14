export type BorderKeyType = 'square' | 'rounded' | 'default';
export type BorderSetType = Record<BorderKeyType, string>;

export const BORDER_RADIUS_SET: BorderSetType = {
  square: '0',
  rounded: '9999999px',
  default: '4px',
};

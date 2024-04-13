export type ComponentBorderKey = 'square' | 'rounded' | 'default';
export type ComponentBorderSet = Record<ComponentBorderKey, string>;

export const BORDER_RADIUS_SET: ComponentBorderSet = {
  square: '0',
  rounded: '9999999px',
  default: '4px',
};

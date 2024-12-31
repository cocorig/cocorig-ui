import { COLOR_SET } from '../color';

export type ShadowsToken = 'sm' | 'md' | 'lg';

export const SHADOWS_SET: Record<ShadowsToken, string> = {
  sm: `
  0px 2px 4px 
  color-mix(in srgb, ${COLOR_SET.gray['800']} 10%, transparent), 
  0px 0px 4px
  color-mix(in srgb, ${COLOR_SET.gray['800']} 10%, transparent)
  `,
  md: `
  0px 4px 6px 
  color-mix(in srgb, ${COLOR_SET.gray['800']} 10%, transparent),
  0px 0px 6px
  color-mix(in srgb, ${COLOR_SET.gray['800']} 10%, transparent)
  `,
  lg: `
  0px 6px 8px 
  color-mix(in srgb, ${COLOR_SET.gray['800']} 10%, transparent),
  0px 0px 8px
  color-mix(in srgb, ${COLOR_SET.gray['800']} 10%, transparent)
  `,
} as const;

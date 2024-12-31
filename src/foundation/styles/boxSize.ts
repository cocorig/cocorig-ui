import { BASE_SIZE_SET, BaseSizeValue } from './fontSize';
import { LINE_HEIGHTS_SET, LineHeightValue } from './lineHeight';

export type SizesToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BoxSize = {
  fontSize: BaseSizeValue;
  lineHeight: LineHeightValue;
  padding: number;
  height: number;
};
export const BOX_SIZE_SET: Record<SizesToken, BoxSize> = {
  xl: {
    fontSize: BASE_SIZE_SET.md,
    lineHeight: LINE_HEIGHTS_SET.md,
    padding: 1.25,
    height: 3,
  },
  lg: {
    fontSize: BASE_SIZE_SET.md,
    lineHeight: LINE_HEIGHTS_SET.md,
    padding: 1.25,
    height: 2.75,
  },
  md: {
    fontSize: BASE_SIZE_SET.sm,
    lineHeight: LINE_HEIGHTS_SET.sm,
    padding: 1,
    height: 2.5,
  },
  sm: {
    fontSize: BASE_SIZE_SET.sm,
    lineHeight: LINE_HEIGHTS_SET.sm,
    padding: 0.875,
    height: 2.25,
  },
  xs: {
    fontSize: BASE_SIZE_SET.xs,
    lineHeight: LINE_HEIGHTS_SET.xs,
    padding: 0.625,
    height: 2,
  },
};

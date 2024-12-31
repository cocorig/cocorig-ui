import { TableVariant } from '../../styled-system';

export const SIZE_SET: Record<TableVariant['size'], SizeStyle> = {
  sm: {
    p: 0.5,
  },
  md: {
    p: 0.75,
  },
  lg: {
    p: 1,
  },
} as const;

export type SizeStyle = {
  p: number;
};

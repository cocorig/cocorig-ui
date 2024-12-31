import { css } from '@emotion/react';

import { toSizeUnit } from '../../css';

import { BASE_SIZE_SET } from './fontSize';
import { LINE_HEIGHTS_SET } from './lineHeight';

export type TextSizeToken = '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs';

export const TEXT_SIZE_SET = {
  '3xl': {
    fontSize: BASE_SIZE_SET['3xl'],
    lineHeight: LINE_HEIGHTS_SET['3xl'],
  },
  '2xl': {
    fontSize: BASE_SIZE_SET['2xl'],
    lineHeight: LINE_HEIGHTS_SET['2xl'],
  },
  xl: {
    fontSize: BASE_SIZE_SET.xl,
    lineHeight: LINE_HEIGHTS_SET.xl,
  },
  lg: {
    fontSize: BASE_SIZE_SET.lg,
    lineHeight: LINE_HEIGHTS_SET.lg,
  },
  md: {
    fontSize: BASE_SIZE_SET.md,
    lineHeight: LINE_HEIGHTS_SET.md,
  },
  sm: {
    fontSize: BASE_SIZE_SET.sm,
    lineHeight: LINE_HEIGHTS_SET.sm,
  },
  xs: {
    fontSize: BASE_SIZE_SET.xs,
    lineHeight: LINE_HEIGHTS_SET.xs,
  },
  '2xs': {
    fontSize: BASE_SIZE_SET['2xs'],
    lineHeight: LINE_HEIGHTS_SET['2xs'],
  },
} as const;

export const textStyle = (size: TextSizeToken) => {
  const { fontSize, lineHeight } = TEXT_SIZE_SET[size];
  return css`
    font-size: ${toSizeUnit(fontSize)};
    line-height: ${toSizeUnit(lineHeight)};
  `;
};

export type TextSize = (typeof TEXT_SIZE_SET)[keyof typeof TEXT_SIZE_SET];

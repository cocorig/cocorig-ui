import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { marginStyle, textStyle } from '../../foundation';
import { BadgeVariant } from '../../styled-system';
import { commonElementStyles } from '../Button/styles';

import { BadgeStyleProps } from './types';

const SIZE_SET: Record<BadgeVariant['size'], SerializedStyles> = {
  '2xs': css`
    padding-inline: 0.25rem;
    min-height: 1rem;
  `,
  xs: css`
    padding-inline: 0.375rem;
    min-height: 1.25rem;
  `,

  sm: css`
    padding-inline: 0.5rem;
    min-height: 1.5rem;
  `,
  md: css`
    padding-inline: 0.625rem;
    min-height: 1.75rem;
  `,
};
export const BaseBadge = styled.div<BadgeStyleProps>`
  width: fit-content;
  gap: 0.25rem;

  ${({ size = 'md' }) => {
    return css`
      ${textStyle(size)}
      ${SIZE_SET[size]}
    `;
  }};

  ${({ text, bg, border, focus, borderRadius, weight, shadow, fullWidth }) =>
    commonElementStyles({
      text,
      bg,
      border,
      focus,
      borderRadius,
      weight,
      shadow,
      fullWidth,
    })}
  ${marginStyle};
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { centerContent, customTransition, disable, getCommonStyles, getSizesAndFontSize, toSizeUnit } from '../../css';
import { BOX_SIZE_SET, COLOR_SET, marginStyle, getColorStyles, TEXT_COLORS } from '../../foundation';
import { ButtonVariant } from '../../styled-system';

import { ButtonStyleProps, ButtonStyles } from './type';

export const commonButtonStyles = css`
  ${customTransition({
    property: 'background-color,border-color, color, box-shadow',
    duration: '200ms',
    timingFunction: 'ease-in-out',
  })};
  position: relative;
  gap: 0.75rem;
  cursor: pointer;
`;

export const variantStyle = (
  variant: ButtonVariant['variant'],
  colorScheme: ButtonVariant['colorScheme'] = 'gray',
): ButtonStyles => {
  const COLOR = getColorStyles(colorScheme);
  const SET: Record<ButtonVariant['variant'], ButtonStyles> = {
    base: {
      bg: COLOR.base,
      text: TEXT_COLORS.default[colorScheme],
      focus: COLOR.base,
    },
    soft: {
      bg: COLOR.soft,
      text: TEXT_COLORS.muted[colorScheme],
      focus: COLOR.base,
    },
    subtle: {
      bg: COLOR.soft,
      text: TEXT_COLORS.muted[colorScheme],
      border: COLOR.subtle,
      focus: COLOR.base,
    },
    outline: {
      bg: COLOR_SET.white,
      text: TEXT_COLORS.muted[colorScheme],
      border: COLOR.subtle,
      focus: COLOR.base,
    },
    ghost: {
      bg: COLOR_SET.transparent,
      text: TEXT_COLORS.interactive[colorScheme],
      focus: COLOR.base,
    },
  };

  return SET[variant];
};

export const commonElementStyles = ({
  text,
  bg,
  border,
  focus,
  borderRadius = 'default',
  weight = 'bold',
  shadow,
  fullWidth = false,
}: ButtonStyleProps) => {
  return css`
    --color: ${text};
    --bg: ${bg};
    box-sizing: border-box;
    text-decoration-line: none;
    white-space: nowrap;
    vertical-align: middle;
    appearance: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    outline: transparent;
    border: transparent;
    border-style: solid;
    border-width: 1px;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;

    background-color: var(--bg);
    color: var(--color);
    border-color: ${border};

    ${centerContent('inline')}

    ${getCommonStyles({ borderRadius, weight, shadow, fullWidth })}

    &:disabled {
      ${disable}
    }
    &:focus-visible {
      outline-color: ${focus};
    }
  `;
};

export const BaseButton = styled.button<ButtonStyleProps>`
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

  --mix-bg: color-mix(
    in oklab,
    var(--bg) 90%,
    ${({ variant }) => (variant === 'base' ? 'transparent' : 'var(--color)')}
  );

  ${commonButtonStyles}

  ${({ size = 'md' }) => {
    const { height } = BOX_SIZE_SET[size];
    return css`
      ${getSizesAndFontSize(size)}
      min-width: ${toSizeUnit(height)};
    `;
  }}

  ${marginStyle}

  &:hover:not(:disabled) {
    background-color: var(--mix-bg);
  }
`;

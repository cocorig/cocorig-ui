import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { disable, getCommonStyles, customTransition } from '../../css';
import { COLOR_SET, marginStyle } from '../../foundation';
import { InputVariant } from '../../styled-system';

import type { InputStyleProps } from './types';

export const commonInputStyles = css`
  width: 100%;
  border-color: transparent;
  outline: transparent;
  background-color: transparent;

  border-width: 1px;
  border-style: solid;

  outline-style: solid;
  outline-width: 1px;
  outline-offset: 0px;

  text-align: start;
  padding: 0;
  position: relative;
  box-sizing: border-box;
  word-wrap: break-word;

  ${customTransition({
    property: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, outline-color, transform',
    duration: '200ms',
    timingFunction: 'ease',
  })}
`;
export type SizeType = Pick<InputStyleProps, 'inputSize'>;

export const variantStyle = (variant: InputVariant['variant'] = 'outline') => {
  const INPUT_VARIANTS = {
    outline: css`
      border-color: var(--input-color);
    `,
    filled: css`
      background-color: var(--input-color);
      &:focus-visible,
      &:focus {
        background-color: transparent;
      }
    `,
    underlined: css`
      border-radius: 0;
      border-width: 0 0 1px;
      border-color: var(--input-color);
      &:focus-visible,
      &:focus {
        outline-color: transparent;
        box-shadow: var(--input-focusColor) 0 1px 0;
      }
    `,
  };

  return INPUT_VARIANTS[variant];
};

export const StyledComponent = styled.input<InputStyleProps>`
  --input-color: ${({ subtle, status }) => (status ? status : subtle)};
  --input-focusColor: ${({ base, status }) => (status ? status : base)};
  --placeholder-color: ${({ placeholderColor }) => placeholderColor ?? COLOR_SET.gray[600]};

  ${commonInputStyles};

  &:focus-visible,
  &:focus {
    border-color: var(--input-focusColor);
    outline-color: var(--input-focusColor);
  }
  ${({ borderRadius = 'default' }) => {
    return css`
      ${getCommonStyles({ borderRadius })}
    `;
  }}

  ${({ variant }) => variantStyle(variant)};
  ${marginStyle}

  &::placeholder {
    color: var(--placeholder-color);
  }

  &:disabled {
    ${disable}
  }
`;

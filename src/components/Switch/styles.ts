import styled from '@emotion/styled';

import { BORDER_RADIUS_SET, COLOR_SET, COLOR_PALLETTE } from '../../foundation';
import { SwitchVariant } from '../../styled-system';
import { toSizeUnit } from '../../utils';

import { SwitchProps } from './types';

const SIZE_SET: Record<SwitchVariant['size'], { w: number; h: number }> = {
  md: {
    w: 2.5,
    h: 1.25,
  },
  lg: {
    w: 3,
    h: 1.5,
  },
} as const;
export const StyledSwitch = styled.label<Pick<SwitchProps, 'size' | 'colorScheme'>>`
  --offset: 2px;
  --control-background: ${COLOR_SET.gray['200']};
  --switch-color: ${COLOR_SET.gray['300']};
  --switch-active-color: ${({ colorScheme = 'gray' }) => COLOR_PALLETTE.base[colorScheme]};
  ${({ size = 'lg' }) => `
      --control-width: ${toSizeUnit(SIZE_SET[size].w)};
      --control-height:${toSizeUnit(SIZE_SET[size].h)};
  `};
  --switch-size: calc(var(--control-height) - 4px);

  display: inline-flex;
  gap: 0.625rem;
  align-items: center;
  position: relative;
  vertical-align: middle;
  font-size: 0.8em;
  input {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  [data-part='control'] {
    display: inline-flex;
    flex-shrink: 0;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    width: var(--control-width);
    height: var(--control-height);
    background-color: var(--control-background);
    border-radius: ${BORDER_RADIUS_SET.rounded};
    transition: background-color 0.3s;

    &:focus-visible {
      outline-offset: 2px;
      outline: 2px solid var(--switch-active-color);
    }
  }

  [data-part='thumb'] {
    position: absolute;
    inset-inline-start: var(--offset);
    display: grid;
    place-content: center;
    width: var(--switch-size);
    height: var(--switch-size);
    background-color: var(--switch-color);
    border-radius: inherit;
    transition: inset-inline-start 0.15s;
    text-align: center;
  }

  input:checked + [data-part='control'] {
    background-color: var(--switch-active-color);
  }

  input:checked + [data-part='control'] [data-part='thumb'] {
    inset-inline-start: calc(var(--control-width) - var(--control-height) + var(--offset));
    background-color: ${COLOR_SET.white};
  }

  [data-part='track'] {
    position: absolute;
    width: var(--control-height);
    height: var(--control-height);
    display: grid;
    place-content: center;
    transition: inset-inline-start 0.12s;
    inset-inline-start: calc(var(--control-width) - var(--control-height) - var(--offset));
  }

  input:checked + [data-part='control'] [data-part='track'] {
    inset-inline-start: var(--offset);
  }
`;

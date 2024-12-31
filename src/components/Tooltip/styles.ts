import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { fontStyle, customTransition, getCommonStyles } from '../../css';
import { COLOR_PALLETTE } from '../../foundation';
import { TooltipVariant } from '../../styled-system';

import { TooltipProps } from '.';

const tooltipBaseStyles = css`
  position: absolute;
  width: max-content;
  max-width: 20rem;
  white-space: pre-wrap;
  pointer-events: none;
  padding: 0.25rem 0.5rem;
  ${fontStyle('sm')}
`;

const tooltipTailBaseStyles = css`
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-width: var(--tooltip-tail);
  border-style: solid;
`;

const commonStyles = {
  vertical: css`
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  `,
  horizontal: css`
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
  `,
};

const getTooltipPosition = (direction: TooltipProps['direction'] = 'right'): SerializedStyles => {
  const positions: Record<TooltipVariant['direction'], SerializedStyles> = {
    top: css`
      &::before {
        bottom: var(--tooltip-offset);
        ${commonStyles.vertical}
      }
      &::after {
        bottom: var(--tooltip-tail-offset);
        border-color: var(--tooltip-bg) transparent transparent transparent;
        ${commonStyles.vertical}
      }
    `,
    bottom: css`
      &::before {
        top: var(--tooltip-offset);
        ${commonStyles.vertical}
      }
      &::after {
        top: var(--tooltip-tail-offset);
        border-color: transparent transparent var(--tooltip-bg) transparent;
        ${commonStyles.vertical}
      }
    `,
    right: css`
      &::before {
        left: var(--tooltip-offset);
        ${commonStyles.horizontal}
      }
      &::after {
        left: var(--tooltip-tail-offset);
        border-color: transparent var(--tooltip-bg) transparent transparent;
        ${commonStyles.horizontal}
      }
    `,
    left: css`
      &::before {
        right: var(--tooltip-offset);
        ${commonStyles.horizontal}
      }
      &::after {
        right: var(--tooltip-tail-offset);
        border-color: transparent transparent transparent var(--tooltip-bg);
        ${commonStyles.horizontal}
      }
    `,
  };

  return positions[direction];
};

export const StyledTooltip = styled.div<TooltipProps>`
  --tooltip-tail: 0.1875rem;
  --default-offset: 0.2rem;
  --tooltip-offset: calc(100% + var(--default-offset) + var(--tooltip-tail));
  --tooltip-tail-offset: calc(100% + var(--default-offset) - var(--tooltip-tail));

  z-index: 100;
  position: relative;
  display: inline-block;

  ${({ colorScheme = 'gray' }) => css`
    --tooltip-bg: ${COLOR_PALLETTE.base[colorScheme]};
    --tooltip-color: ${COLOR_PALLETTE.font[colorScheme]};
  `};

  ${({ direction }) => getTooltipPosition(direction)};

  &::before {
    content: attr(data-tip);
    ${tooltipBaseStyles};
    color: var(--tooltip-color);
    background-color: var(--tooltip-bg);
    ${({ borderRadius = 'default', shadow }) => getCommonStyles({ borderRadius, shadow })}
  }

  &::after {
    ${tooltipTailBaseStyles}
  }

  &::before,
  &::after {
    opacity: 0;
    ${customTransition({
      property: 'color, opacity, background-color, border-color, box-shadow, transform',
      duration: '0.2s',
      timingFunction: 'cubic-bezier(.4,0,.2,1)',
    })};
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }
`;

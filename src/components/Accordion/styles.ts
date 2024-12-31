import { css } from '@emotion/react';

import { getColorStyles, TEXT_SIZE_SET, TextSize } from '../../foundation';
import { AccordionVariant } from '../../styled-system';
import { Css } from '../../utils';

export const SIZE_SET: Record<AccordionVariant['size'], SizeConfig> = {
  sm: {
    px: 0.75,
    py: 0.5,
    text: TEXT_SIZE_SET.sm,
  },
  md: {
    px: 1,
    py: 0.5,
    text: TEXT_SIZE_SET.md,
  },
  lg: {
    px: 1.125,
    py: 0.625,
    text: TEXT_SIZE_SET.lg,
  },
} as const;

export type SizeConfig = {
  px: number;
  py: number;
  text: TextSize;
};

export type AccordionStyleConfig = Record<'item' | 'header' | 'body', Css>;

export const variantStyle = (
  variant: AccordionVariant['variant'] = 'underlined',
  colorScheme: AccordionVariant['colorScheme'] = 'gray',
) => {
  const COLOR = getColorStyles(colorScheme);

  const STYLES: Record<AccordionVariant['variant'], AccordionStyleConfig> = {
    underlined: {
      item: css`
        border-bottom: 1px solid ${COLOR.subtle};
      `,
      header: css`
        &:focus-visible {
          outline-color: ${COLOR.base};
        }
      `,
      body: css``,
    },
    filled: {
      item: css`
        border-radius: var(--accordion-radius);
        &[data-state='open'] {
          background-color: ${COLOR.soft};
        }
      `,
      header: css`
        &:focus-visible {
          outline-color: ${COLOR.base};
        }
        padding-inline: var(--accordion-px);
      `,
      body: css`
        padding-inline: var(--accordion-px);
      `,
    },
  };

  return STYLES[variant];
};

import { css, SerializedStyles } from '@emotion/react';

import { COLOR_SET, getColorStyles } from '../../foundation';
import { TabVariant } from '../../styled-system';

export type TabStyleConfig = Record<'list' | 'trigger' | 'content', SerializedStyles>;

export const variantStyle = (
  variant: TabVariant['variant'] = 'underlined',
  colorScheme: TabVariant['colorScheme'] = 'gray',
) => {
  const COLOR = getColorStyles(colorScheme);
  if (colorScheme === 'gray') {
    COLOR.soft = 'white';
  }
  const STYLES: Record<TabVariant['variant'], TabStyleConfig> = {
    lifted: {
      list: css`
        justify-self: start;
        margin-bottom: calc(-1 * var(--tab-border));
      `,
      trigger: css`
        border-style: solid;
        border-width: 0 0 var(--tab-border) 0;
        border-start-start-radius: var(--tab-radius);
        border-start-end-radius: var(--tab-radius);
        border-bottom-color: ${COLOR.subtle};
        padding-inline: 1rem;
        padding-top: var(--tab-border);

        &:focus-visible {
          border-end-end-radius: 0;
          border-end-start-radius: 0;
        }

        &[aria-selected='true'] {
          color: ${COLOR.base};
          background-color: ${COLOR.soft};
          border-width: var(--tab-border) var(--tab-border) 0 var(--tab-border);
          border-inline-start-color: ${COLOR.subtle};
          border-inline-end-color: ${COLOR.subtle};
          border-top-color: ${COLOR.subtle};
          padding-inline: calc(1rem - var(--tab-border));
          padding-bottom: var(--tab-border);
          padding-top: 0;
        }

        &:nth-of-type(1)[aria-selected='false'] {
          border-color: transparent;
        }
        &[aria-selected='true']::before {
          --tab-grad: calc(70% - var(--tab-border));

          --radius-start: circle at top left, transparent var(--tab-grad),
            ${COLOR.subtle} calc(var(--tab-grad) + 0.25px), ${COLOR.subtle} calc(var(--tab-grad) + 1px),
            ${COLOR.soft} calc(var(--tab-grad) + 1px + 0.25px);

          --radius-end: circle at top right, transparent var(--tab-grad),
            ${COLOR.subtle} calc(var(--tab-grad) + 0.25px), ${COLOR.subtle} calc(var(--tab-grad) + 1px),
            ${COLOR.soft} calc(var(--tab-grad) + 1px + 0.25px);

          z-index: 1;
          content: '';
          display: block;
          position: absolute;
          width: calc(100% + var(--tab-radius) * 2);
          height: var(--tab-radius);
          bottom: 0;
          background-size: var(--tab-radius);
          background-repeat: no-repeat;
        }

        &[role='tab'][aria-selected='true']::before {
          background-position:
            top left,
            top right;
          background-image: radial-gradient(var(--radius-start)), radial-gradient(var(--radius-end));
        }
        &[role='tab'][aria-selected='true']:first-of-type::before {
          background-image: radial-gradient(var(--radius-end));
          background-position: top right;
        }
      `,
      content: css`
        padding: 1rem;
        border: 1px solid ${COLOR.subtle};
        border-top-left-radius: var(--tab-radius);
        border-top-right-radius: var(--tab-radius);
        border-bottom-right-radius: var(--tab-radius);
        border-bottom-left-radius: var(--tab-radius);
        width: 100%;

        &:nth-of-type(2)[data-state='active'] {
          border-top-left-radius: 0;
        }
      `,
    },
    boxed: {
      list: css`
        padding: 0.3rem;
        border-radius: var(--list-radius);
        background-color: #f4f4f5;
      `,
      trigger: css`
        border-radius: var(--tab-radius);

        &[aria-selected='true'] {
          color: ${COLOR.base};
          background-color: ${COLOR.soft};
          box-shadow: 0 0 0 1px ${COLOR.subtle};
        }
      `,
      content: css`
        padding-top: 1rem;
        width: 100%;
      `,
    },
    underlined: {
      list: css`
        border-bottom: var(--tab-border) solid ${COLOR.subtle};
      `,
      trigger: css`
        color: ${COLOR_SET.gray['800']};

        &[aria-selected='true'] {
          color: ${COLOR.base};
        }
        &[aria-selected='true']::before {
          content: '';
          position: absolute;
          width: 100%;
          height: calc(2 * var(--tab-border));
          bottom: calc(-1 * var(--tab-border));
          background-color: ${COLOR.base};
        }
      `,
      content: css`
        padding-top: 1rem;
        width: 100%;
      `,
    },
  };

  return STYLES[variant];
};

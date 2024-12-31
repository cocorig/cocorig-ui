import { HTMLAttributes, forwardRef, Ref } from 'react';

import { SystemProps } from '../../styled-system';

import { StyledTooltip } from './styles';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement>, SystemProps<'tooltip'> {
  'data-tip': string;
}

export const Tooltip = forwardRef(
  ({ children, 'data-tip': dataTip, ...props }: TooltipProps, ref: Ref<HTMLDivElement>) => {
    return (
      <StyledTooltip data-tip={dataTip} {...props} ref={ref}>
        {children}
      </StyledTooltip>
    );
  },
);

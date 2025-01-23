import { forwardRef, Ref } from 'react';

import { StyledTooltip } from './styles';
import { TooltipProps } from './types';

export const Tooltip = forwardRef(
  ({ children, 'data-tip': dataTip, ...props }: TooltipProps, ref: Ref<HTMLDivElement>) => {
    return (
      <StyledTooltip role="tooltip" data-tip={dataTip} {...props} ref={ref}>
        {children}
      </StyledTooltip>
    );
  },
);

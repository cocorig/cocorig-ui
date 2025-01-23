import { HTMLAttributes } from 'react';

import { SystemProps } from '../../styled-system';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement>, SystemProps<'tooltip'> {
  'data-tip': string;
}

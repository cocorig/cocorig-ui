import { LabelHTMLAttributes, ReactElement } from 'react';

import { SystemProps } from '../../styled-system';

export interface SwitchProps extends LabelHTMLAttributes<HTMLLabelElement>, SystemProps<'switch'> {
  label: string;
  checked: boolean;
  onCheckedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  thumbLabel?: ChangeStateProps;
  trackLabel?: ChangeStateProps;
}
export type ChangeStateProps = {
  on: ReactElement;
  off: ReactElement;
};

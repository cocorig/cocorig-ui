import { LabelHTMLAttributes, ReactElement } from 'react';

import { SystemProps } from '../../styled-system';

import { StyledSwitch } from './styles';

export interface SwitchProps extends LabelHTMLAttributes<HTMLLabelElement>, SystemProps<'switch'> {
  checked: boolean;
  onCheckedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  thumbLabel?: ChangeStateProps;
  trackLabel?: ChangeStateProps;
}
type ChangeStateProps = {
  on: ReactElement;
  off: ReactElement;
};

export const Switch = ({ checked, onCheckedChange, thumbLabel, trackLabel, ...props }: SwitchProps) => {
  return (
    <StyledSwitch {...props}>
      <input type="checkbox" checked={checked} onChange={onCheckedChange} />
      <div data-part="control">
        <div data-part="track">{checked ? trackLabel?.on : trackLabel?.off}</div>
        <div data-part="switch">{checked ? thumbLabel?.on : thumbLabel?.off}</div>
      </div>
    </StyledSwitch>
  );
};

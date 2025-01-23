import { useId } from 'react';

import { StyledSwitch } from './styles';

import type { SwitchProps } from './types';

export const Switch = ({
  children,
  label,
  checked,
  onCheckedChange,
  thumbLabel,
  trackLabel,
  ...props
}: SwitchProps) => {
  const id = useId();
  const switchId = `switch${id}`;
  const inputId = `switch${id}input`;
  return (
    <StyledSwitch {...props} aria-label={label} id={switchId} htmlFor={inputId}>
      <input type="checkbox" checked={checked} onChange={onCheckedChange} id={inputId} />
      <div data-part="control" tabIndex={0}>
        <div data-part="track">{checked ? trackLabel?.on : trackLabel?.off}</div>
        <div data-part="thumb">{checked ? thumbLabel?.on : thumbLabel?.off}</div>
      </div>
      {children}
    </StyledSwitch>
  );
};

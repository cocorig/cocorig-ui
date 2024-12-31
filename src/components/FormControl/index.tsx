import { forwardRef, HTMLAttributes, Ref } from 'react';

import { COLOR_PALLETTE } from '../../foundation/';
import { SystemProps } from '../../styled-system';

import { HelperText, Indicator, Label, StyledFormControl } from './styles';

interface FormControlProps extends HTMLAttributes<HTMLDivElement>, SystemProps<'formControl'>, FormControlCommonProps {}

export type FormControlCommonProps = {
  labelSize?: string | number;
  helperTextSize?: string | number;
  helperTextColor?: string;
};
export type FormControlStyle = {
  statusColor?: string;
} & FormControlCommonProps;

export const FormControl = forwardRef(
  ({ children, required, status, label, helperText, ...props }: FormControlProps, ref: Ref<HTMLDivElement>) => {
    const statusColor = status ? COLOR_PALLETTE.status[status] : undefined;

    return (
      <StyledFormControl ref={ref} {...props} statusColor={statusColor}>
        {label && (
          <Label>
            {label}
            {required && <Indicator>*</Indicator>}
          </Label>
        )}
        {children}
        {helperText && <HelperText>{helperText}</HelperText>}
      </StyledFormControl>
    );
  },
);

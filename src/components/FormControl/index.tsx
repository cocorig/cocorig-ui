import { cloneElement, forwardRef, HTMLAttributes, isValidElement, Ref, ReactElement } from 'react';

import { COLOR_PALLETTE } from '../../foundation/';
import { SystemProps } from '../../styled-system';

import { HelperText, Indicator, Label, StyledFormControl } from './styles';

interface FormControlProps extends HTMLAttributes<HTMLDivElement>, SystemProps<'formControl'>, FormControlCommonProps {
  label: string;
  children?: ReactElement<{ required?: boolean }>;
}

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

    const clonedChildren = isValidElement(children)
      ? cloneElement(children, {
          required: required || children.props.required,
        })
      : children;

    return (
      <StyledFormControl ref={ref} statusColor={statusColor} {...props}>
        <Label>
          <div>
            {label}
            {required && <Indicator>*</Indicator>}
          </div>
          {clonedChildren}
        </Label>

        {helperText && <HelperText className="helperText">{helperText}</HelperText>}
      </StyledFormControl>
    );
  },
);

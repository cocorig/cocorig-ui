import { cloneElement, forwardRef, isValidElement, Ref } from 'react';

import { COLOR_PALLETTE } from '../../foundation';

import { HelperText, Indicator, Label, StyledFormControl } from './styles';
import { FormControlProps } from './types';

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

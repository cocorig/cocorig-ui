import { HTMLAttributes, ReactElement } from 'react';

import { SystemProps } from '../../styled-system';

export interface FormControlProps
  extends HTMLAttributes<HTMLDivElement>,
    SystemProps<'formControl'>,
    FormControlCommonProps {
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

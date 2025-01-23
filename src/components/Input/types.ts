import { InputHTMLAttributes } from 'react';

import { ColorStyleReturnType, MarginSpacing } from '../../foundation';
import { SystemProps } from '../../styled-system';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & CommonInputProps;

export type CommonInputProps = {
  placeholderColor?: string;
} & SystemProps<'input'> &
  MarginSpacing;

export type InputStyleProps = CommonInputProps & ColorStyleReturnType;

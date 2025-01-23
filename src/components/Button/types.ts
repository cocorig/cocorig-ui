import { ButtonHTMLAttributes, ReactElement } from 'react';

import { MarginSpacing } from '../../foundation';
import { SystemProps } from '../../styled-system';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, IconSpacing, CommonButtonProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}
export type CommonButtonProps = SystemProps<'button'> & MarginSpacing;

export type ButtonStyleProps = ButtonStyles & CommonButtonProps;

export type IconSpacing = { iconSpacing?: number };

export type ButtonStyles = Partial<Record<'bg' | 'text' | 'focus' | 'border', string>>;

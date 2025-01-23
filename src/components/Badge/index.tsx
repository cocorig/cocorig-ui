import { forwardRef, HTMLAttributes, ReactElement, Ref, useMemo } from 'react';

import { marginProps } from '../../foundation';
import { variantStyle } from '../Button/styles';

import { BaseBadge } from './styles';
import { CommonProps } from './types';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

export const Badge = forwardRef(
  (
    { children, variant = 'base', colorScheme, leftIcon, rightIcon, ...props }: BadgeProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const badgeStyle = useMemo(() => variantStyle(variant, colorScheme), [variant, colorScheme]);

    return (
      <BaseBadge {...badgeStyle} variant={variant} {...props} ref={ref} {...marginProps(props)}>
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </BaseBadge>
    );
  },
);

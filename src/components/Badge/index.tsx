import { forwardRef, HTMLAttributes, ReactElement, Ref, useMemo } from 'react';

import { MarginSpacing, marginProps } from '../../foundation';
import { SystemProps } from '../../styled-system';
import { variantStyle } from '../Button/styles';
import { ButtonStyles } from '../Button/type';

import { BaseBadge } from './styles';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}
export type CommonProps = MarginSpacing & SystemProps<'badge'>;

export type BadgeStyleProps = ButtonStyles & CommonProps;

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

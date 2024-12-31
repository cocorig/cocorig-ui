import { forwardRef, Ref, useMemo } from 'react';

import styled from '@emotion/styled';

import { centerContent } from '../../css';
import { marginProps } from '../../foundation';

import { BaseButton, variantStyle } from './styles';
import { ButtonProps, IconSpacing } from './type';

export const Button = forwardRef(
  (
    { children, variant = 'base', colorScheme, leftIcon, rightIcon, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const buttonStyle = useMemo(() => variantStyle(variant, colorScheme), [variant, colorScheme]);
    return (
      <BaseButton {...buttonStyle} {...marginProps(props)} {...props} variant={variant} ref={ref}>
        {leftIcon && (
          <IconContainer className="leftIcon" {...props}>
            {leftIcon}
          </IconContainer>
        )}
        {children}

        {rightIcon && (
          <IconContainer className="rightIcon" {...props}>
            {rightIcon}
          </IconContainer>
        )}
      </BaseButton>
    );
  },
);

const IconContainer = styled.span<IconSpacing>`
  ${centerContent('inline')}
  svg {
    stroke: currentcolor;
    stroke-width: 0;
    height: inherit;
    width: inherit;
  }
`;

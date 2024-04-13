import React, { ButtonHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import styled from '@emotion/styled';
import { getPaddingStyle, SpacingStyles } from '../../foundation/spacing';
import {
  blue500,
  blue600,
  blue300,
  blue100,
  orange300,
  orange500,
  orange600,
  orange700,
  indigo300,
  indigo500,
  indigo600,
  indigo700,
  gray300,
  white,
} from '../../foundation/color';
import {
  ComponentBorderKey,
  BORDER_RADIUS_SET,
} from '../../foundation/styles/border';
type ButtonState = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
};

type ButtonColorSet = {
  background: ButtonState;
  border: ButtonState;
  text: ButtonState;
};
type ButtonVariant = keyof typeof COLOR_SET;

// variant에 따라 버튼의 색상이 달라져야 하기 때문에 지정
const COLOR_SET: Record<string, ButtonColorSet> = {
  primary: {
    background: {
      default: orange500,
      hover: orange600,
      active: orange700,
      disabled: orange300,
    },
    border: {
      default: orange500,
      hover: orange600,
      active: orange700,
      disabled: gray300,
    },
    text: {
      default: white,
      hover: white,
      active: white,
      disabled: white,
    },
  },
  secondary: {
    background: {
      default: indigo500,
      hover: indigo600,
      active: indigo700,
      disabled: indigo300,
    },
    border: {
      default: indigo500,
      hover: indigo600,
      active: indigo700,
      disabled: indigo300,
    },
    text: {
      default: white,
      hover: white,
      active: white,
      disabled: white,
    },
  },
};

export type ComponentSizeKey = 'xs' | 'sm' | 'md' | 'lg';
export type ComponentSizeSet = Record<ComponentSizeKey, SpacingStyles>;
/**
 *  사이즈 : 패딩 값에 의해 버튼 사이즈가 xs,sm,md,lg로 나뉜다.
 */
const PADDING_SET: ComponentSizeSet = {
  xs: getPaddingStyle(2, 4),
  sm: getPaddingStyle(4, 4),
  md: getPaddingStyle(4, 12),
  lg: getPaddingStyle(6, 18),
} as const;
/**
 * 폰트 사이즈 : 버튼 사이즈에 따라 다르게 설정
 */
const FONT_SIZE_SET: Record<keyof ComponentSizeSet, string> = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '2rem',
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  radius?: ComponentBorderKey;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  icon?: React.ReactElement;
  textButton?: boolean;
  outline?: boolean;
  size?: ComponentSizeKey;
}

export const Button = (
  {
    children,
    variant = 'primary',
    fullWidth = false,
    radius = 'default',
    leftIcon,
    rightIcon,
    icon,
    textButton,
    outline = false,
    size = 'md',
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const colorSet = COLOR_SET[variant];

  return (
    <BaseButton
      ref={ref}
      colorSet={colorSet}
      outline={outline}
      fullWidth={fullWidth}
      radius={radius}
      size={size}
      {...props}
    >
      {leftIcon && (
        <IconContainer className="leftIcon">{leftIcon}</IconContainer>
      )}
      {children}
      {rightIcon && (
        <IconContainer className="rightIcon">{rightIcon}</IconContainer>
      )}
      {icon && <IconContainer>{icon}</IconContainer>}
    </BaseButton>
  );
};

const BaseButton = styled.button<{
  colorSet: ButtonColorSet;
  outline: boolean;
  fullWidth: boolean;
  radius: ComponentBorderKey;
  size: ComponentSizeKey;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ outline, colorSet }) =>
    outline ? `1px solid ${colorSet.border.default}` : 'none'};
  background-color: ${({ colorSet }) => colorSet.background.default};
  color: ${({ colorSet }) => colorSet.text.default};
  ${({ size }) => PADDING_SET[size]};
  border-radius: ${({ radius }) => BORDER_RADIUS_SET[radius]};
  font-size: ${({ size }) => FONT_SIZE_SET[size]};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ colorSet }) => colorSet.background.hover};
    color: ${({ colorSet }) => colorSet.text.hover};
  }

  &:active {
    background-color: ${({ colorSet }) => colorSet.background.active};
    color: ${({ colorSet }) => colorSet.text.active};
  }

  &:disabled {
    background-color: ${({ colorSet }) => colorSet.background.disabled};
    border-color: ${({ colorSet }) => colorSet.border.disabled};
    color: ${({ colorSet }) => colorSet.text.disabled};
    cursor: not-allowed;
  }

  /* 키보드로 버튼에 포커스 시 */
  &:focus-visible {
    outline: 1px solid ${({ colorSet }) => colorSet.border.active};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.leftIcon {
    margin-right: 4px;
  }
  &.rightIcon {
    margin-left: 4px;
  }
`;

export default forwardRef(Button);

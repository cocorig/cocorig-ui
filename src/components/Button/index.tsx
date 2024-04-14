import React, { ButtonHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import styled from '@emotion/styled';
import { SIZE_SET } from '../../foundation/styles/size';
import {
  BorderKeyType,
  BORDER_RADIUS_SET,
} from '../../foundation/styles/border';
import {
  getPaddingStyle,
  SerializedType,
  SpacingPropType,
} from '../../foundation/spacing';
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

type ButtonSizeKeyType = 'xs' | 'sm' | 'md' | 'lg';
type ButtonSizeSetType = Record<ButtonSizeKeyType, SerializedType>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacingPropType {
  variant?: ButtonColorKeyType;
  fullWidth?: boolean;
  radius?: BorderKeyType;
  textButton?: boolean;
  outline?: boolean;
  size?: ButtonSizeKeyType;
  icon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

type ButtonStateType = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
};

type ButtonColorType = {
  background: ButtonStateType;
  border: ButtonStateType;
  text: ButtonStateType;
};
type ButtonColorKeyType = keyof typeof BUTTON_COLOR_SET;

// variant에 따라 버튼의 색상이 달라져야 하기 때문에 지정
const BUTTON_COLOR_SET: Record<string, ButtonColorType> = {
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

/**
 * 버튼 사이즈 : 패딩 값에 의해 버튼 사이즈가 xs,sm,md,lg로 나뉜다.
 */
const BUTTON_SIZE_SET: ButtonSizeSetType = {
  xs: getPaddingStyle(2, 4),
  sm: getPaddingStyle(4, 4),
  md: getPaddingStyle(4, 12),
  lg: getPaddingStyle(6, 18),
} as const;

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
  const colorSet = BUTTON_COLOR_SET[variant];

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
  colorSet: ButtonColorType;
  outline: boolean;
  fullWidth: boolean;
  radius: BorderKeyType;
  size: ButtonSizeKeyType;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ outline, colorSet }) =>
    outline ? `1px solid ${colorSet.border.default}` : 'none'};
  background-color: ${({ colorSet }) => colorSet.background.default};
  color: ${({ colorSet }) => colorSet.text.default};
  ${({ size }) => BUTTON_SIZE_SET[size]};
  border-radius: ${({ radius }) => BORDER_RADIUS_SET[radius]};
  font-size: ${({ size }) => SIZE_SET[size]};
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

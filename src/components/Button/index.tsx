import React, { ButtonHTMLAttributes, forwardRef } from 'react';
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

type ButtonState = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
};

type ButtonColorSet = {
  [key: string]: {
    background: ButtonState;
    border: ButtonState;
    text: ButtonState;
  };
};

// variant에 따라 버튼의 색상이 달라져야 하기 때문에 지정
const colorSets: ButtonColorSet = {
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
const PADDING_SET: { [key: string]: SpacingStyles } = {
  xs: getPaddingStyle(2, 4),
  sm: getPaddingStyle(4, 4),
  md: getPaddingStyle(4, 12),
  lg: getPaddingStyle(6, 18),
} as const;

/**
 * 버튼 폰트 사이즈 : 버튼 사이즈에 따라 다르게 설정
 */
const FONT_SIZE_SET: { [key: string]: string } = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '2rem',
} as const;

/**
 * 버튼 border 스타일 : square,rounded,default
 */
const BORDER_RADIUS_SET: { [key: string]: string } = {
  square: '0',
  rounded: '9999999px',
  default: '5px',
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof ButtonColorSet;
  fullWidth?: boolean;
  radius?: 'square' | 'rounded' | 'default';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  icon?: React.ReactElement;
  textButton?: boolean;
  outline?: boolean;
  size?: keyof typeof PADDING_SET;
}

export const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
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
    },
    ref,
  ) => {
    const colorSet = colorSets[variant];
    const BaseButton = styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${outline ? `1px solid ${colorSet.border.default}` : 'none'};
      background-color: ${colorSet.background.default};
      color: ${colorSet.text.default};
      ${PADDING_SET[size]};
      border-radius: ${BORDER_RADIUS_SET[radius]};
      font-size: ${FONT_SIZE_SET[size]};
      width: ${fullWidth ? '100%' : 'auto'};
      cursor: pointer;
      transition: all 0.3s ease;

      /*  아이콘 스타일 */
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        &.leftIcon {
          margin-right: 4px;
        }
        &.rightIcon {
          margin-left: 4px;
        }
      }

      &:hover {
        background-color: ${colorSet.background.hover};
        color: ${colorSet.text.hover};
      }

      &:active {
        background-color: ${colorSet.background.active};
        color: ${colorSet.text.active};
      }

      &:disabled {
        background-color: ${colorSet.background.disabled};
        border-color: ${colorSet.border.disabled};
        color: ${colorSet.text.disabled};
        cursor: not-allowed;
      }

      /* 키보드로 버튼에 포커스 시 */
      &:focus-visible {
        outline: 1px solid ${colorSet.border.active};
      }
      /* 마우스, 터치로 버튼에 포커스 시
      &:focus:not(:focus-visible) {
        outline: none;
        border: 1px solid ${colorSet.border.hover};
      } */
    `;

    return (
      <BaseButton ref={ref} {...props}>
        {leftIcon && <div className="leftIcon">{leftIcon}</div>}
        {children}
        {rightIcon && <div className="rightIcon">{rightIcon}</div>}
        {icon && <div>{icon}</div>}
      </BaseButton>
    );
  },
);
Button.displayName = 'Button';

export default Button;

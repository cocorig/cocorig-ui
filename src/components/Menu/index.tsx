import React, {
  forwardRef,
  ForwardedRef,
  HTMLAttributes,
  LiHTMLAttributes,
  DetailsHTMLAttributes,
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ColorType, ColorKeyType } from '../type';
import {
  SIZE_SET,
  SizeType,
  SizeStylesType,
} from '../../foundation/styles/size';
import { getPaddingStyle, SerializedType } from '../../foundation/spacing';
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
  indigo800,
  indigo900,
  gray300,
  white,
  black,
  gray400,
} from '../../foundation/color';

const COLOR_SET: ColorKeyType = {
  primary: {
    background: {
      hover: 'oklch(0.25 0.01 0 / 0.1)',
      active: black,
    },
    text: {
      default: black,
      hover: black,
      active: white,
      disabled: gray300,
    },
  },
  secondary: {
    background: {
      hover: indigo800,
      active: indigo900,
    },

    text: {
      default: white,
      hover: white,
      active: white,
      disabled: white,
    },
  },
} as const;

const PADDING_SIZE_SET: SizeStylesType = {
  xs: getPaddingStyle(1, 2),
  sm: getPaddingStyle(1, 3),
  md: getPaddingStyle(2, 4),
  lg: getPaddingStyle(3, 6),
} as const;

type CommonPropsType = {
  size?: SizeType;
  variant?: keyof typeof COLOR_SET;
};
interface MenuItemProps
  extends LiHTMLAttributes<HTMLLIElement>,
    CommonPropsType {
  href: string;
}

interface SummaryProps extends HTMLAttributes<HTMLElement>, CommonPropsType {
  isOpen: boolean;
}

// 모든 MenuList를 묶는 컴포넌트
const Menu = forwardRef(
  (
    {
      children,
      className,
      size = 'md',
      ...props
    }: HTMLAttributes<HTMLUListElement> & CommonPropsType,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <MenuWrapper ref={ref} className={className} size={size} {...props}>
        <MenuList>{children}</MenuList>
      </MenuWrapper>
    );
  },
);
Menu.displayName = 'Menu';

// MenuItem 뭉텅이 - li
const MenuList = forwardRef(
  (
    { children, ...props }: LiHTMLAttributes<HTMLLIElement>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <MenuListWrapper ref={ref} {...props}>
        {children}
      </MenuListWrapper>
    );
  },
);
MenuList.displayName = 'MenuList';

const MenuDetails = ({
  children,
  ...props
}: DetailsHTMLAttributes<HTMLDetailsElement>) => {
  return <details {...props}>{children}</details>;
};

const Summary = ({
  children,
  isOpen,
  variant = 'primary',
  size = 'md',
  ...props
}: SummaryProps) => {
  const colorSet = COLOR_SET[variant];
  return (
    <MenuDetailSummary
      isOpen={isOpen}
      size={size}
      colorSet={colorSet}
      {...props}
    >
      {children}
    </MenuDetailSummary>
  );
};

// ui
const SubMenu = ({
  children,
  variant = 'primary',
  ...props
}: HTMLAttributes<HTMLUListElement> & CommonPropsType) => {
  const colorSet = COLOR_SET[variant];
  return (
    <SubMenuWrapper {...props} colorSet={colorSet}>
      {children}
    </SubMenuWrapper>
  );
};

// 하나의 menu - li - a
const MenuItem = forwardRef(
  (
    {
      children,
      href,
      size = 'md',
      variant = 'primary',
      ...props
    }: MenuItemProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const colorSet = COLOR_SET[variant];
    return (
      <MenuListWrapper ref={ref} {...props}>
        <MenuLink href={href} size={size} colorSet={colorSet}>
          {children}
        </MenuLink>
      </MenuListWrapper>
    );
  },
);
MenuItem.displayName = 'MenuItem';

// list name - h2
const MenuTitle = ({
  children,
  size = 'md',
  color = gray400,
  ...props
}: HTMLAttributes<HTMLHeadingElement> &
  CommonPropsType & { color?: string }) => {
  return (
    <MenuTitleWrapper size={size} color={color} {...props}>
      {children}
    </MenuTitleWrapper>
  );
};

// -- 스타일

// 공통 스타일
const commonSizeStyles = (size: SizeType): SerializedType => css`
  ${PADDING_SIZE_SET[size]}
  font-size: ${SIZE_SET[size]};
`;
const commonColorStyles = ({
  colorSet,
}: {
  colorSet: ColorType;
}): SerializedType => css`
  color: ${colorSet.text.default};
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
    color: ${colorSet.text.disabled};
    cursor: not-allowed;
  }
  &:focus-visible {
    background-color: ${colorSet.background.active};
    color: ${colorSet.text.active};
    outline: none;
  }
`;

//  전체 메뉴 스타일
const MenuWrapper = styled.ul<{
  size: SizeType;
}>`
  /* ${(props) => commonSizeStyles(props.size)} */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  line-height: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

//  서브메뉴 스타일
const SubMenuWrapper = styled.ul<{
  colorSet: ColorType;
}>`
  position: relative;
  white-space: nowrap;
  margin-inline-start: 1rem;
  padding-inline-start: 0.5rem;

  &::before {
    // 구분선
    position: absolute;
    bottom: 0.75rem;
    inset-inline-start: 0;
    top: 0.75rem;
    width: 1px;
    background-color: ${(props) => props.colorSet.text.default};
    opacity: 0.1;
    content: '';
  }
`;

const MenuListWrapper = styled.li`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
`;

const MenuLink = styled.a<{
  size: SizeType;
  colorSet: ColorType;
}>`
  ${(props) => commonSizeStyles(props.size)}
  ${commonColorStyles}
  text-align: start;
  border-radius: 0.5rem;
`;

const MenuTitleWrapper = styled.h2<{
  size: SizeType;
  color: string;
}>`
  ${(props) => commonSizeStyles(props.size)}
  color: ${(props) => props.color};
  line-height: 1.25rem;
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 1rem;
`;

const MenuDetailSummary = styled.summary<{
  isOpen: boolean;
  size: SizeType;
  colorSet: ColorType;
}>`
  ${(props) => commonSizeStyles(props.size)}
  ${commonColorStyles}
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  text-align: start;
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  -webkit-user-select: none;
  user-select: none;

  &::after {
    content: '';
    ${commonColorStyles}
    transform: ${(props) =>
      props.isOpen ? 'rotate(225deg)' : 'rotate(45deg)'};
    margin-top: ${(props) => (props.isOpen ? ' 0rem' : '-0.4rem')};
    justify-self: end;
    display: block;
    height: 0.5rem;
    width: 0.5rem;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: 75% 75%;
    box-shadow: 2px 2px;
    pointer-events: none;
  }
`;

export { Menu, SubMenu, MenuItem, MenuTitle, MenuList, Summary, MenuDetails };

import React, { forwardRef, ForwardedRef } from 'react';
import { NavbarContentProps, NavbarProps, NavbarItemProps } from './type';
import { NavbarStyles, ContentStyles, ItemStyles } from './styles';

const Navbar = forwardRef(
  (
    {
      children,
      height = '4rem',
      position = 'sticky',
      maxWidth = 'lg',
      bgColor = 'white',
      color = 'black',
      borderColor,
      isBlurred = false,
      ...props
    }: NavbarProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <NavbarStyles
        height={height}
        position={position}
        maxWidth={maxWidth}
        borderColor={borderColor}
        isBlurred={isBlurred}
        bgColor={bgColor}
        color={color}
        {...props}
      >
        {children}
      </NavbarStyles>
    );
  },
);
Navbar.displayName = 'Navbar';

const NavbarContent = ({ children, justify = 'start' }: NavbarContentProps) => {
  return <ContentStyles justify={justify}>{children}</ContentStyles>;
};

const NavbarItem = ({ children }: NavbarItemProps) => {
  return <ItemStyles>{children}</ItemStyles>;
};

export { Navbar, NavbarContent, NavbarItem };

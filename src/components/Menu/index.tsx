import React, {
  forwardRef,
  ForwardedRef,
  HTMLAttributes,
  LiHTMLAttributes,
  DetailsHTMLAttributes,
} from 'react';
import styled from '@emotion/styled';

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  href: string;
}

interface SummaryProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
}

// 모든 MenuList를 묶는 컴포넌트
const Menu = forwardRef(
  (
    { children, className, ...props }: HTMLAttributes<HTMLUListElement>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <MenuWrapper ref={ref} className={className} {...props}>
        {children}
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

const Summary = ({ children, isOpen, ...props }: SummaryProps) => {
  return (
    <MenuDetailSummary isOpen={isOpen} {...props}>
      {children}
    </MenuDetailSummary>
  );
};

// ---- 스타일 -----

// ui
const SubMenu = ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => {
  return <SubMenuWrapper {...props}>{children}</SubMenuWrapper>;
};

// 하나의 menu - li - a
const MenuItem = forwardRef(
  (
    { children, href, ...props }: MenuItemProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <MenuListWrapper ref={ref} {...props}>
        <MenuLink href={href}>{children}</MenuLink>
      </MenuListWrapper>
    );
  },
);
MenuItem.displayName = 'MenuItem';

// list name - h2
const MenuTitle = ({
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return <MenuTitleWrapper {...props}>{children}</MenuTitleWrapper>;
};

//  전체 메뉴 스타일
const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

//  서브 메뉴 스타일
const SubMenuWrapper = styled.ul`
  position: relative;
  white-space: nowrap;
  margin-inline-start: 1rem;
  padding-inline-start: 0.5rem;

  &::before {
    position: absolute;
    bottom: 0.75rem;
    inset-inline-start: 0;
    top: 0.75rem;
    width: 1px;
    background-color: black;
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

const MenuLink = styled.a`
  padding: 0.5rem 1rem;
  text-align: start;
  border-radius: 0.5rem;
  &:hover {
    background-color: #e5e7eb;
  }
`;

const MenuTitleWrapper = styled.h2`
  color: #9b9a9a;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  align-items: center;
  display: flex;
  font-weight: 700;
  gap: 1rem;
`;

const MenuDetailSummary = styled.summary<{ isOpen: boolean }>`
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
  align-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  text-align: start;
  grid-auto-columns: minmax(auto, max-content) auto max-content;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background-color: #e5e7eb;
  }
  &::after {
    content: '';
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

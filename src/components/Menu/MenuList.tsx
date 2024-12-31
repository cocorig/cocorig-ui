import { HTMLAttributes, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../css';
import { SHADOWS_SET, slide } from '../../foundation';

import { MenuListContextType, MenuListProvider } from './MenuListContext';
import { useMenu } from './useMenu';

interface MenuListProps extends HTMLAttributes<HTMLUListElement>, CommonProps, Omit<MenuListContextType, 'itemRefs'> {}
type CommonProps = {
  minW: number | string;
  position?: 'left' | 'right';
};
type MenuListStyle = {
  open?: boolean;
} & CommonProps;

export const MenuList = ({
  value,
  position = 'left',
  onValueChange,
  selectStyle,
  children,
  ...props
}: MenuListProps) => {
  const { getMenuListProps, open } = useMenu();

  const menuProps = getMenuListProps(props);

  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    if (open && listRef.current) {
      const lists = Array.from(listRef.current.querySelectorAll('li'));
      itemRefs.current = lists;
    }
  }, [open]);

  return (
    <MenuListProvider value={value} itemRefs={itemRefs} onValueChange={onValueChange} selectStyle={selectStyle}>
      {open && (
        <List position={position} {...props} ref={listRef} {...menuProps}>
          {children}
        </List>
      )}
    </MenuListProvider>
  );
};

const List = styled.ul<MenuListStyle>`
  position: absolute;
  isolation: isolate;
  z-index: 1000;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  top: 100%;

  background-color: var(--menu-bg);
  color: var(--menu-color);
  border-radius: var(--menu-radius);
  min-width: ${({ minW }) => toSizeUnit(minW)};
  padding: var(--menu-px);
  box-shadow: ${SHADOWS_SET.sm};
  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')}
  animation-name: ${({ open }) => slide(open ? 'in' : 'out')};
  transform-origin: top left;
  animation-duration: 150ms;
`;

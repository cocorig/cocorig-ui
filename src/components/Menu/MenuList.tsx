import { HTMLAttributes, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import { SHADOWS_SET, slide } from '../../foundation';
import { toSizeUnit } from '../../utils';

import { MenuListContextType, MenuListProvider } from './MenuListContext';
import { useMenu } from './useMenu';

export interface MenuListProps
  extends HTMLAttributes<HTMLUListElement>,
    CommonProps,
    Omit<MenuListContextType, 'itemRefs'> {}

type CommonProps = {
  /**
   * 최소 너비를 설정합니다.
   */
  minW: number | string;
  /**
   * 메뉴가 `menuTrigger`를 기준으로 어느 방향에 위치할지 설정합니다.
   * `left`가 설정되면 메뉴는 왼쪽에, `right`가 설정되면 메뉴는 오른쪽에 배치됩니다.
   */
  position?: 'left' | 'right';
};

type MenuListStyle = {
  open?: boolean;
} & CommonProps;

export const MenuList = ({
  value,
  position = 'left',
  selectIcon,
  selectStyles,
  onValueChange,
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
    <MenuListProvider
      value={value}
      itemRefs={itemRefs}
      selectStyles={selectStyles}
      selectIcon={selectIcon}
      onValueChange={onValueChange}
    >
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

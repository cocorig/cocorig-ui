import { useCallback, useContext } from 'react';

import { useKeyboardNavigation } from '../../hook';
import { PropsMerger } from '../../utils';

import { MenuListContext } from './MenuListContext';
import { useMenu } from './useMenu';

export const useMenuList = (itemIndex: number) => {
  const context = useContext(MenuListContext);
  if (!context) {
    throw new Error('useMenuListContext must be used within a MenuList');
  }
  const { value, onValueChange, itemRefs, selectIcon, selectStyles } = context;
  const { setOpen } = useMenu();

  const { onKeyDown } = useKeyboardNavigation<HTMLLIElement>({
    currentIndex: itemIndex,
    itemRef: itemRefs,
    onSelect: (value) => {
      if (value) {
        onValueChange(value);
      }
      setOpen(false);
    },
    onReset: () => setOpen(false),
  });

  const getMenuItemProps = useCallback<PropsMerger>(
    ({ ...props } = {}) => {
      const isSelected = value === props.value;

      return {
        onClick: () => {
          onValueChange(props.value as string);
          setOpen(false);
        },
        onKeyDown,
        onMouseEnter: () => itemRefs?.current[itemIndex]?.focus(),
        'data-value': props.value,
        role: 'menuitem',
        tabIndex: 0,
        selected: isSelected,
        selectIcon: selectIcon,
        css: isSelected ? selectStyles : undefined,
        ...props,
      };
    },
    [value, onKeyDown, selectIcon, selectStyles, onValueChange, setOpen, itemRefs, itemIndex],
  );

  return { getMenuItemProps };
};

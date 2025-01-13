import { useCallback, useContext } from 'react';

import { PropsMerger } from '../../utils';

import { MenuContext } from './MenuContext';

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  const { open, setOpen, toggleMenu } = context;

  const getTriggerProps = useCallback<PropsMerger>(
    (props = {}) => ({
      open,
      'aria-expanded': open ? 'true' : 'false',
      onClick: toggleMenu,
      ...props,
    }),
    [open, toggleMenu],
  );

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const getMenuListProps = useCallback<PropsMerger>(
    (props = {}) => ({
      open,
      role: 'menu',
      ...props,
    }),
    [open],
  );

  return {
    open,
    setOpen,
    onClose,
    toggleMenu,
    getTriggerProps,
    getMenuListProps,
  };
};

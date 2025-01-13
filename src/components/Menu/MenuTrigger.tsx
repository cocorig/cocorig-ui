import { useRef } from 'react';

import { useClickOutside } from '../../hook/useClickOutside';
import { Button } from '../Button';
import { ButtonProps } from '../Button/type';

import { useMenu } from './useMenu';

type MenuTriggerProps = ButtonProps;

export const MenuTrigger = ({ children, ...props }: MenuTriggerProps) => {
  const { getTriggerProps, onClose } = useMenu();
  const triggerProps = getTriggerProps(props);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useClickOutside(buttonRef, onClose);

  return (
    <Button ref={buttonRef} colorScheme="gray" variant="outline" {...triggerProps}>
      {children}
    </Button>
  );
};

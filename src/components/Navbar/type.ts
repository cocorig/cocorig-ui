import { ReactNode, HTMLAttributes } from 'react';

interface NavbarProps extends HTMLAttributes<HTMLElement>, NavbarStyles {
  children: ReactNode;
}

type NavbarStyles = {
  position: 'static' | 'sticky';
  Height?: number; // rem
  bgColor?: string;
  color?: string;
  isBlurred?: boolean;
};

export type { NavbarProps, NavbarStyles };

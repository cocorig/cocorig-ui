import { ReactNode, HTMLAttributes } from 'react';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode[];
  height?: string | number;
  position: 'static' | 'sticky';
  maxWidth: maxWidthKeyType;
  borderColor?: string;
  isBlurred?: boolean;
  bgColor?: string;
  color?: string;
}

export interface NavbarContentProps extends HTMLAttributes<HTMLDivElement> {
  justify?: 'start' | 'center' | 'end';
}
export interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {}
export const MAXWIDTH_SET = {
  full: '100%',
  xxl: '1536px',
  xl: '1280px',
  lg: '1024px',
  md: '768px',
  sm: '640px',
} as const;

export type maxWidthKeyType = keyof typeof MAXWIDTH_SET;

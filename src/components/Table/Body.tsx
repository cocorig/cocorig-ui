import { HTMLAttributes } from 'react';

interface BodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
export const Body = ({ children, ...props }: BodyProps) => {
  return <tbody {...props}>{children}</tbody>;
};
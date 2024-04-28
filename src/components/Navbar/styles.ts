import styled from '@emotion/styled';
import { NavbarContentProps, NavbarProps, MAXWIDTH_SET } from './type';

export const NavbarStyles = styled.nav<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ color }) => color};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}rem` : height};
  position: ${({ position }) => position};
  top: 0;
  width: 100%;
  max-width: ${({ maxWidth }) => MAXWIDTH_SET[maxWidth]};
  margin: 0 auto;
  padding: 0 1rem;
  background-color: ${({ bgColor }) => bgColor};
  ${({ borderColor }) =>
    borderColor && `border-bottom: 1px solid ${borderColor};`}
  ${({ isBlurred }) => isBlurred && `backdrop-filter: blur(10px);`};
`;

export const ContentStyles = styled.div<Pick<NavbarContentProps, 'justify'>>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  width: 100%;
  flex: 1 0 0px;
`;

export const ItemStyles = styled.div`
  padding: 0.5rem 1rem;
  color: inherit;
  text-align: center;
  cursor: pointer;
  transition: color 0.3s ease;
`;

import styled from '@emotion/styled';
import { NavbarStyles } from './type';
import { white } from '../../foundation/color';

export const Wrapper = styled.nav<NavbarStyles>`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 30;
  height: ${({ Height }) => (Height ? `${Height}rem` : '4rem')};
  position: ${({ position }) => (position ? position : 'sticky')};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : white)};
  color: ${({ color }) => (color ? color : white)};
`;

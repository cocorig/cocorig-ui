/** @jsxImportSource @emotion/react */

import { ButtonHTMLAttributes, ReactElement } from 'react';

import styled from '@emotion/styled';

import { centerContent } from '../../css';
import { COLOR_SET } from '../../foundation';
import { IconProps } from '../Icon';

import { useAccordionItem } from './AccordionContext';

interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}
type AccordionIconProps = IconProps & { color?: string };

export const AccordionHeader = ({ children, icon, ...props }: AccordionHeaderProps) => {
  const { getHeaderProps, getIconProps } = useAccordionItem();
  const headerProps = getHeaderProps(props);
  const iconProps = getIconProps(props);

  return (
    <StyledAccordionHeader type="button" {...headerProps}>
      <AccordionTitle>{children}</AccordionTitle>
      <StyledIcon {...iconProps}>{icon}</StyledIcon>
    </StyledAccordionHeader>
  );
};
const StyledAccordionHeader = styled.button`
  display: flex;
  padding: 0;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
  font-weight: 500;
  border-radius: var(--accordion-radius);
  font-size: var(--text-size);
  line-height: var(--text-height);
  padding-block: var(--accordion-py);
  outline-offset: 1px;
  outline-style: solid;
  outline-color: transparent;
  outline-width: 2px;
`;

const AccordionTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  flex: 1 1 0%;
  text-align: start;
  width: 100%;
`;

const StyledIcon = styled.div<Pick<AccordionIconProps, 'color'>>`
  ${centerContent('inline')};
  color: ${({ color }) => color ?? COLOR_SET.gray['900']};
  font-size: inherit;
`;

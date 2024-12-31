/** @jsxImportSource @emotion/react */

import { ButtonHTMLAttributes, ReactElement } from 'react';

import styled from '@emotion/styled';

import { useAccordionItem } from './AccordionContext';

interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}

export const AccordionHeader = ({ children, icon, ...props }: AccordionHeaderProps) => {
  const { getHeaderProps } = useAccordionItem();

  const headerProps = getHeaderProps(props);

  return (
    <StyledAccordionHeader type="button" {...headerProps}>
      <AccordionTitle>{children}</AccordionTitle>
      {icon}
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

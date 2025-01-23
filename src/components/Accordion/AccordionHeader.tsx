/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';

import { centerContent } from '../../css';
import { COLOR_SET } from '../../foundation';

import { useAccordionItem } from './AccordionContext';
import { AccordionIcon } from './AccordionIcon';
import { AccordionHeaderProps } from './types';

export const AccordionHeader = ({ children, indicatorColor, icon, ...props }: AccordionHeaderProps) => {
  const { getHeaderProps, getIconProps } = useAccordionItem();
  const headerProps = getHeaderProps(props);
  const iconProps = getIconProps(props);

  return (
    <StyledAccordionHeader type="button" {...headerProps}>
      <AccordionTitle>{children}</AccordionTitle>
      <StyledIcon indicatorColor={indicatorColor} {...iconProps}>
        {icon ? icon : <AccordionIcon />}
      </StyledIcon>
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

const StyledIcon = styled.div<Pick<AccordionHeaderProps, 'indicatorColor'>>`
  ${centerContent('inline')};
  color: ${({ indicatorColor }) => indicatorColor ?? COLOR_SET.gray['900']};
  font-size: inherit;
`;

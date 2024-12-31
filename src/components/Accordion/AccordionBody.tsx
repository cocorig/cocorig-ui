/** @jsxImportSource @emotion/react */

import { HTMLAttributes, useEffect, useState, useRef } from 'react';

import styled from '@emotion/styled';

import { useAccordionItem } from './AccordionContext';

type AccordionBodyProps = HTMLAttributes<HTMLDivElement>;

export const AccordionBody = ({ children, ...props }: AccordionBodyProps) => {
  const [contentHeight, setContentHeight] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  const { getBodyProps } = useAccordionItem();
  const { isExpanded, ...bodyProps } = getBodyProps(props);

  useEffect(() => {
    if (bodyRef.current) {
      setContentHeight(bodyRef.current.offsetHeight);
    }
  }, [isExpanded, children]);

  return (
    <StyledAccordionBody {...bodyProps} isOpen={isExpanded as boolean} contentHeight={isExpanded ? contentHeight : 0}>
      <AccordionBodyItem ref={bodyRef}>{children}</AccordionBodyItem>
    </StyledAccordionBody>
  );
};

const StyledAccordionBody = styled.div<{
  isOpen: boolean;
  contentHeight: number;
}>`
  font-size: 1rem;
  line-height: 1.625rem;
  height: ${({ isOpen, contentHeight }) => (isOpen ? `${contentHeight}px` : '0')};
  overflow: hidden;
  transition:
    height 0.2s ease-out,
    opacity 0.2s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  border-radius: var(--accordion-radius);
`;

const AccordionBodyItem = styled.div`
  padding-top: var(--accordion-py);
  padding-bottom: calc(var(--accordion-py) * 2);
  vertical-align: middle;
`;

/** @jsxImportSource @emotion/react */

import { HTMLAttributes } from 'react';

import styled from '@emotion/styled';

import { AccordionItemContext, useAccordion } from './AccordionContext';

type AccordionItemProps = {
  itemValue: number;
  children?: React.ReactNode | ((props: { isExpanded: boolean }) => React.ReactNode);
} & HTMLAttributes<HTMLDivElement>;

export const AccordionItem = ({ itemValue, children, ...props }: AccordionItemProps) => {
  const { openItems, toggleItem, getAccordionItemProps } = useAccordion();
  const isExpanded = openItems.includes(itemValue);
  const toggle = () => toggleItem(itemValue);
  const getItemProps = getAccordionItemProps({
    itemValue,
    ...props,
  });

  return (
    <AccordionItemContext.Provider value={{ itemValue, isExpanded, toggle }}>
      <StyledAccordionItem {...getItemProps} data-state={isExpanded ? 'open' : 'close'}>
        {typeof children === 'function' ? children({ isExpanded }) : children}
      </StyledAccordionItem>
    </AccordionItemContext.Provider>
  );
};

const StyledAccordionItem = styled.div`
  overflow-anchor: none;
`;

/** @jsxImportSource @emotion/react */

import { LiHTMLAttributes } from 'react';

import { AccordionItemContext, useAccordion } from './AccordionContext';

interface AccordionItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'children'> {
  itemValue: number;
  children?: React.ReactNode | ((props: { isExpanded: boolean }) => React.ReactNode);
}

export const AccordionItem = ({ itemValue, children, ...props }: AccordionItemProps) => {
  const { openItems, toggleItem, getAccordionItemProps } = useAccordion();
  const isExpanded = openItems.includes(itemValue);
  const toggle = () => toggleItem(itemValue);
  const getItemProps = getAccordionItemProps({
    itemValue,
    isExpanded,
  });

  return (
    <AccordionItemContext.Provider value={{ itemValue, isExpanded, toggle }}>
      <li {...getItemProps} {...props}>
        {typeof children === 'function' ? children({ isExpanded }) : children}
      </li>
    </AccordionItemContext.Provider>
  );
};

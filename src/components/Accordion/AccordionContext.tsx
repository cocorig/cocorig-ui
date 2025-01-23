import { createContext, useCallback, useContext } from 'react';

import { useKeyboardNavigation } from '../../hook';
import { PropsMerger } from '../../utils';

import type { AccordionContextType, AccordionItemContextType } from './types';

export const AccordionContext = createContext<AccordionContextType | null>(null);

/**
 * Accordion
 */
export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }

  const getAccordionItemProps = useCallback<PropsMerger>(
    (props = {}) => ({
      id: props.id || `accordion-item-${props.itemValue}`,
      css: context.item,
      'data-state': props.isExpanded ? 'open' : 'closed',
    }),
    [context.item],
  );

  return { getAccordionItemProps, ...context };
};

/**
 * AccordionItem
 */
export const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('useAccordionItem must be used within an AccordionItem');
  }
  const { headerRefs, closeAll, header, body } = useAccordion();
  const { isExpanded, itemValue, toggle } = context;

  const { onKeyDown } = useKeyboardNavigation<HTMLButtonElement>({
    currentIndex: itemValue,
    itemRef: headerRefs,
    onSelect: toggle,
    onReset: closeAll,
  });

  const headerId = `accordion-header-${itemValue}`;
  const bodyId = `accordion-body-${itemValue}`;

  const getHeaderProps = useCallback<PropsMerger>(
    (props = {}) => ({
      id: props.id || headerId,
      onClick: toggle,
      onKeyDown: onKeyDown,
      css: header,
      'aria-expanded': isExpanded ? true : false,
      'aria-controls': bodyId,
      ...props,
    }),
    [headerId, toggle, onKeyDown, header, isExpanded, bodyId],
  );

  const getBodyProps = useCallback<PropsMerger>(
    (props = {}) => ({
      id: props.id || bodyId,
      isExpanded: isExpanded,
      role: 'region',
      css: body,
      'aria-hidden': !isExpanded,
      'aria-labelledby': headerId,
      ...props,
    }),
    [body, bodyId, headerId, isExpanded],
  );

  const getIconProps = useCallback<PropsMerger>(
    (props = {}) => ({
      open: isExpanded,
      ...props,
    }),
    [isExpanded],
  );
  return {
    getHeaderProps,
    getBodyProps,
    getIconProps,
  };
};

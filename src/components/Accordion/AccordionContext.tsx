import { createContext, useCallback, useContext } from 'react';

import { useKeyboardNavigation } from '../../hook';
import { PropsMerger } from '../../utils';

import { AccordionStyleConfig } from './styles';

export type AccordionContextType = {
  headerRefs: React.MutableRefObject<HTMLButtonElement[]>;
  closeAll: () => void;
  openItems: number[];
  toggleItem: (itemValue: number) => void;
} & AccordionStyleConfig;

export const AccordionContext = createContext<AccordionContextType | null>(null);

export type AccordionItemContextType = {
  itemValue: number;
  isExpanded: boolean;
  toggle: () => void;
};

export const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

/**
 * Accordion Hook
 */
export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }

  const getAccordionItemProps = useCallback<PropsMerger>(
    (props = {}) => ({
      id: props.id || `accordion-item-${props.itemValue}`,
      'aria-labelledby': `accordion-header-${props.itemValue}`,
      role: 'region',
      'data-state': props.open ? 'open' : 'close',
      css: context.item,
      ...props,
    }),
    [context.item],
  );

  return { getAccordionItemProps, ...context };
};

/**
 * AccordionItem Hook
 */
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
      'aria-expanded': isExpanded,
      ...props,
    }),
    [headerId, isExpanded, onKeyDown, header, toggle],
  );

  const getBodyProps = useCallback<PropsMerger>(
    (props = {}) => ({
      id: props.id || bodyId,
      isExpanded: isExpanded,
      css: body,
      'aria-hidden': !isExpanded,
      ...props,
    }),
    [body, bodyId, isExpanded],
  );

  const getIconProps = useCallback<PropsMerger>(
    (props = {}) => ({
      open: isExpanded,
      'aria-expanded': isExpanded,
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

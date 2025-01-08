import { HTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../css';
import { BORDER_RADIUS_SET, MarginSpacing, marginProps, marginStyle } from '../../foundation';
import { SystemProps } from '../../styled-system';

import { AccordionBody } from './AccordionBody';
import { AccordionContext } from './AccordionContext';
import { AccordionHeader } from './AccordionHeader';
import { AccordionIcon } from './AccordionIcon';
import { AccordionItem } from './AccordionItem';
import { SIZE_SET, SizeConfig, variantStyle } from './styles';

export interface AccordionProps extends HTMLAttributes<HTMLUListElement>, SystemProps<'accordion'>, MarginSpacing {}

type AccordionStyle = SizeConfig & MarginSpacing;
export const Accordion = ({
  defaultId = [],
  allowMultiple = false,
  size = 'md',
  variant = 'underlined',
  colorScheme = 'gray',
  children,
  ...props
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>(defaultId);

  const itemRef = useRef<HTMLUListElement>(null);
  const headerRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (itemRef.current) {
      const buttons = Array.from(itemRef.current.querySelectorAll('button'));
      headerRefs.current = buttons;
    }
  }, []);

  const { item, header, body } = useMemo(() => variantStyle(variant, colorScheme), [variant, colorScheme]);

  const closeAll = useCallback(() => {
    setOpenItems([]);
  }, [setOpenItems]);

  const toggleItem = useCallback(
    (itemValue: number) => {
      setOpenItems((prev) => {
        if (prev.includes(itemValue)) {
          return prev.filter((value) => value !== itemValue);
        } else {
          return allowMultiple ? [...prev, itemValue] : [itemValue];
        }
      });
    },
    [allowMultiple],
  );
  return (
    <AccordionContext.Provider
      value={{
        closeAll,
        openItems,
        toggleItem,
        headerRefs,
        item,
        header,
        body,
      }}
    >
      <StyledAccordion ref={itemRef} {...SIZE_SET[size]} {...props} {...marginProps(props)}>
        {children}
      </StyledAccordion>
    </AccordionContext.Provider>
  );
};

const StyledAccordion = styled.ul<AccordionStyle>`
  width: 100%;
  --text-size: ${({ text }) => toSizeUnit(text.fontSize)};
  --text-height: ${({ text }) => toSizeUnit(text.lineHeight)};
  --accordion-px: ${({ px }) => toSizeUnit(px)};
  --accordion-py: ${({ py }) => toSizeUnit(py)};
  --accordion-radius: ${BORDER_RADIUS_SET.default};
  ${marginStyle}
`;

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
Accordion.Icon = AccordionIcon;
Accordion.Item = AccordionItem;

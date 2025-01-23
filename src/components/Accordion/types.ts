import { ButtonHTMLAttributes, HTMLAttributes, LiHTMLAttributes, ReactElement } from 'react';

import { MarginSpacing } from '../../foundation';
import { SystemProps } from '../../styled-system';

import { AccordionStyleConfig, SizeConfig } from './styles';

/**
 * Accordion
 */
export type AccordionProps = HTMLAttributes<HTMLUListElement> & SystemProps<'accordion'> & MarginSpacing;

export type AccordionStyle = SizeConfig & MarginSpacing;

/**
 *  AccordionBody
 */
export type AccordionBodyProps = HTMLAttributes<HTMLDivElement>;

/**
 * AccordionContext
 */
export type AccordionContextType = {
  headerRefs: React.MutableRefObject<HTMLButtonElement[]>;
  closeAll: () => void;
  openItems: number[];
  toggleItem: (itemValue: number) => void;
} & AccordionStyleConfig;

export type AccordionItemContextType = {
  itemValue: number;
  isExpanded: boolean;
  toggle: () => void;
};

/**
 * AccordionHeader
 */
export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 기본적으로 제공되는 `AccordionIcon` 대신 다른 아이콘을 적용하려면 `icon`에 `ReactElement`를 전달하세요.
   */
  icon?: ReactElement;
  /**
   * 아이콘의 색상을 지정합니다.
   */
  indicatorColor?: string;
}

/**
 *  AccordionItem
 */
export interface AccordionItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'children'> {
  /**
   * 아코디언 항목의 식별자로, 필수로 설정해야 합니다.
   */
  itemValue: number;
  /**
   * 각 아코디언 항목의 내부 상태에 액세스해야 하는 경우  `isExpanded` 상태를 제공하는 `render prop`을 사용할 수 있습니다.
   */
  children?: React.ReactNode | ((props: { isExpanded: boolean }) => React.ReactNode);
}

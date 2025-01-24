import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

import { SystemProps } from '../../styled-system';
/**
 *  Tab
 */
export type TabProps = {
  children?: ReactNode;
  /**
   * 초기 선택 값 (`Uncontrolled` 상태로 동작할 때 반드시 설정해야 하는 값입니다).
   */
  defaultValue?: string;
  /**
   * 외부에서 Tab의 선택 값을 관리합니다.
   * `Controlled` 상태에서는 반드시 `onControlledChange` 콜백도 함께 전달해야 합니다.
   */
  controlledValue?: string | null;
  /**
   * `Controlled` 상태에서 선택 값이 변경될 때 호출되는 콜백 함수.
   */
  onControlledChange?: (value: string) => void;
  /**
   * `Indicator`를 애니메이션으로 표시할지 결정합니다.
   */
  isIndicatorAnimated?: boolean;
} & SystemProps<'tab'>;

/**
 * TabContext
 */
export type TabContextProps = {
  value: string | null;
  onValueChange: (value: string) => void;
  isIndicatorAnimated?: boolean;
} & SystemProps<'tab'>;

/**
 * Indicator
 */
export type IndicatorProps = {
  width: number;
  height: number;
  left: number;
};

/**
 * TabContent
 */
export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 각 `TabContent`의 고유 식별값을 나타냅니다.
   */
  value: string;
}
/**
 * TabList
 */
export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * `TabList`의 정렬 방법을 설정합니다.
   */
  justify?: 'start' | 'center' | 'end';
}

/**
 * TabTrigger
 */
export interface TabTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 각 `TabTrigger`의 고유 식별값을 나타냅니다.
   */
  value: string;
}

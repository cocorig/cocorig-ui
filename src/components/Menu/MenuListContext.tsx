import { MutableRefObject, ReactElement, createContext } from 'react';

import { SerializedStyles } from '@emotion/react';

import { MenuProviderProps } from './MenuContext';

export type MenuListContextType = {
  /**
   * 현재 선택된 menu의 상태 값을 설정합니다.
   */
  value: string;
  /**
   * 선택된 menu 상태 값을 변경하는 함수로 `value` 값을 변경합니다.
   */
  onValueChange: (value: string) => void;
  /**
   * 선택된 menu 항목에 표시할 아이콘입니다.
   */
  selectIcon?: ReactElement;
  /**
   * 선택된 menu 항목에 적용할 스타일입니다.
   */
  selectStyles?: SerializedStyles | SerializedStyles[];
  itemRefs: MutableRefObject<HTMLLIElement[]>;
};

export const MenuListContext = createContext<MenuListContextType | null>(null);

export const MenuListProvider = ({ children, ...props }: MenuListContextType & MenuProviderProps) => {
  return <MenuListContext.Provider value={props}>{children}</MenuListContext.Provider>;
};

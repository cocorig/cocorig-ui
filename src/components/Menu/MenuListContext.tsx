import { ReactElement, createContext } from 'react';

import { SerializedStyles } from '@emotion/react';

import { MenuProviderProps } from './MenuContext';

export type MenuListContextType = {
  value: string;
  onValueChange: (value: string) => void;
  itemRefs: React.MutableRefObject<HTMLLIElement[]>;
} & SelectStyle;

export type SelectStyle = {
  selectStyle?: { css: SerializedStyles; icon?: ReactElement };
};

export const MenuListContext = createContext<MenuListContextType | null>(null);

export const MenuListProvider = ({ children, ...props }: MenuListContextType & MenuProviderProps) => {
  return <MenuListContext.Provider value={props}>{children}</MenuListContext.Provider>;
};

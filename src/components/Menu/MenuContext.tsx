import { createContext, useCallback, useState, ReactNode } from 'react';

export type MenuProviderProps = {
  children: ReactNode;
};

type MenuItemContextType = {
  open: boolean;
  toggleMenu: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuItemContextType | null>(null);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return <MenuContext.Provider value={{ open, setOpen, toggleMenu }}>{children}</MenuContext.Provider>;
};

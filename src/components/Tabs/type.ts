import { ReactElement } from "react";

export type TabListProps = {
  onChange: (event: React.MouseEvent<HTMLDivElement>, value: string) => void;
  options: TabProps[];
  selectedValue: string;
  fullWidth?: boolean;
  variant?: "bordered" | "rounded";
};
export type TabProps = {
  value: string;
  label?: string | ReactElement; // 컴포넌트도 가능
  id: string;
  disabled?: boolean;
};

export type TabListStyles = {
  tabList: {
    backgroundColor: string;
    borderRadius?: number;
    boxShadow?: string;
  };
  tab: {
    color: string;
    backgroundColor: string;
    activeColor: string;
    activeBackgroundColor: string;
    activeBorderBottomColor?: string;
    BorderBottomColor?: string;
    borderRadius: number;
    boxShadow?: string;
  };
};

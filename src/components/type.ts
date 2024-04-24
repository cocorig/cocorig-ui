export type StateType = {
  default?: string;
  disabled?: string;
  hover: string;
  active: string;
};
export type ColorType = {
  background: StateType;
  border?: StateType;
  text: StateType;
};

export type ColorKeyType = Record<string, ColorType>;

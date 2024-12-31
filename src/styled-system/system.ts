import { ColorPaletteOptions, StatusVariantOptions } from '../foundation/styles/colorPalette';

import { StyledProperties } from './types/propTypes';

type OptionalValue<T> = T | undefined;

type ExcludeStyledProperties = 'formControl' | 'switch' | 'blockquote' | 'accordion' | 'menu';

export type SystemProps<T extends keyof ComponentConfig> = T extends ExcludeStyledProperties
  ? ComponentConfig[T]
  : ComponentConfig[T] & StyledProperties;
/**
 * Button
 */
export interface ButtonVariant {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  variant: 'base' | 'soft' | 'subtle' | 'outline' | 'ghost';
  colorScheme: ColorPaletteOptions;
}

export type ButtonVariantProps = {
  [K in keyof ButtonVariant]?: OptionalValue<ButtonVariant[K]>;
};

/**
 * Tooltip
 */
export interface TooltipVariant {
  direction: 'top' | 'right' | 'bottom' | 'left';
  colorScheme: ColorPaletteOptions;
}

export type TooltipVariantProps = {
  [K in keyof TooltipVariant]?: OptionalValue<TooltipVariant[K]>;
};

/**
 * text Input
 */
export interface InputVariant {
  inputSize: 'xl' | 'lg' | 'md' | 'sm';
  variant: 'outline' | 'filled' | 'underlined';
  colorScheme: ColorPaletteOptions | StatusVariantOptions;
}

export type InputVariantProps = {
  [K in keyof InputVariant]?: OptionalValue<InputVariant[K]>;
};

/**
 * FormControl
 */
export interface FormControlVariant {
  status: StatusVariantOptions;
  label: string;
  helperText: string;
  required: boolean;
}

export type FormControlVariantProps = {
  [K in keyof FormControlVariant]?: OptionalValue<FormControlVariant[K]>;
};

/**
 * Badge
 */
export interface BadgeVariant {
  size: 'md' | 'sm' | 'xs' | '2xs';
  variant: 'base' | 'soft' | 'subtle' | 'outline';
  colorScheme: ColorPaletteOptions;
}

export type BadgeVariantProps = {
  [K in keyof BadgeVariant]?: OptionalValue<BadgeVariant[K]>;
};

/**
 * blockquote
 */
export interface BlockquoteVariant {
  colorScheme: ColorPaletteOptions;
}

export type BlockquoteVariantProps = {
  [K in keyof BlockquoteVariant]?: OptionalValue<BlockquoteVariant[K]>;
};
/**
 * Tab
 */
export interface TabVariant {
  size: 'sm' | 'md' | 'lg';
  variant: 'lifted' | 'boxed' | 'underlined';
  colorScheme: ColorPaletteOptions;
}

export type TabVariantProps = {
  [K in keyof TabVariant]?: OptionalValue<TabVariant[K]>;
};

/**
 * Accordion
 */
export interface AccordionVariant {
  size: 'sm' | 'md' | 'lg';
  variant: 'filled' | 'underlined';
  colorScheme: ColorPaletteOptions;
  allowMultiple: boolean;
  defaultId: number[];
}

export type AccordionVariantProps = {
  [K in keyof AccordionVariant]?: OptionalValue<AccordionVariant[K]>;
};

/**
 * Menu
 */
export interface MenuVariant {
  size: 'sm' | 'md';
}

export type MenuVariantProps = {
  [K in keyof MenuVariant]?: OptionalValue<MenuVariant[K]>;
};

/**
 * Table
 */
export interface TableVariant {
  variant: 'line' | 'outline';
  size: 'sm' | 'md' | 'lg';
  colorScheme: ColorPaletteOptions;
}

export type TableVariantProps = {
  [K in keyof TableVariant]?: OptionalValue<TableVariant[K]>;
};

/**
 * Switch
 */
export interface SwitchVariant {
  size: 'md' | 'lg';
  colorScheme: ColorPaletteOptions;
}

export type SwitchVariantProps = {
  [K in keyof SwitchVariant]?: OptionalValue<SwitchVariant[K]>;
};
export interface ComponentConfig {
  button: ButtonVariantProps;
  badge: BadgeVariantProps;
  tooltip: TooltipVariantProps;
  input: InputVariantProps;
  formControl: FormControlVariantProps;
  textarea: InputVariantProps;
  tab: TabVariantProps;
  blockquote: BlockquoteVariantProps;
  accordion: AccordionVariantProps;
  menu: MenuVariantProps;
  table: TableVariantProps;
  switch: SwitchVariantProps;
}

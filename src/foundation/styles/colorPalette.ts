import { COLOR_SET as color } from '../color';

export const statesOptions = ['error', 'warning', 'info', 'success'] as const;

export type StatusVariantOptions = (typeof statesOptions)[number];

export const colorPaletteOptions = [
  'blue',
  'gray',
  'green',
  'orange',
  'pink',
  'red',
  'teal',
  'yellow',
  'indigo',
  'purple',
] as const;

export type ColorPaletteOptions = (typeof colorPaletteOptions)[number];
export type CombinedColorOptions = ColorPaletteOptions | StatusVariantOptions;

// 상태 색상 타입 가드
const isStatusVariant = (colorScheme: CombinedColorOptions): colorScheme is StatusVariantOptions =>
  statesOptions.some((v) => v === colorScheme);

export const getColorStyles = (colorScheme: CombinedColorOptions = 'gray') => {
  if (isStatusVariant(colorScheme)) {
    return {
      status: COLOR_PALLETTE.status[colorScheme],
    };
  }

  return {
    base: COLOR_PALLETTE.base[colorScheme],
    subtle: COLOR_PALLETTE.subtle[colorScheme],
    soft: COLOR_PALLETTE.soft[colorScheme],
  };
};
export type ColorStyleReturnType = ReturnType<typeof getColorStyles>;

type ColorPallette = {
  base: Record<ColorPaletteOptions, string>;
  status: Record<StatusVariantOptions, string>;
  subtle: Record<ColorPaletteOptions, string>;
  soft: Record<ColorPaletteOptions, string>;
  font: Record<ColorPaletteOptions | StatusVariantOptions, string>;
};
export const COLOR_PALLETTE: ColorPallette = {
  base: {
    blue: color.blue[500],
    gray: color.black,
    green: color.green[500],
    orange: color.orange[500],
    pink: color.pink[500],
    red: color.red[500],
    teal: color.teal[500],
    yellow: color.yellow[400],
    indigo: color.indigo[700],
    purple: color.purple[500],
  },

  status: {
    error: color.red[500],
    warning: color.yellow[500],
    info: color.blue[600],
    success: color.green[600],
  },
  subtle: {
    blue: color.blue[100],
    gray: color.gray[300],
    green: color.green[100],
    orange: color.orange[100],
    pink: color.pink[100],
    red: color.red[100],
    teal: color.teal[100],
    yellow: color.yellow[100],
    indigo: color.indigo[100],
    purple: color.purple[100],
  },
  soft: {
    blue: color.blue[50],
    gray: color.gray[100],
    green: color.green[50],
    orange: color.orange[50],
    pink: color.pink[50],
    red: color.red[50],
    teal: color.teal[50],
    yellow: color.yellow[50],
    indigo: color.indigo[50],
    purple: color.purple[50],
  },

  font: {
    blue: color.white,
    gray: color.white,
    green: color.white,
    orange: color.white,
    pink: color.white,
    red: color.white,
    teal: color.white,
    yellow: color.yellow[800],
    indigo: color.white,
    purple: color.white,
    error: color.white,
    warning: color.white,
    info: color.white,
    success: color.white,
  },
} as const;
export const TEXT_COLORS = {
  default: COLOR_PALLETTE.font,
  muted: {
    ...COLOR_PALLETTE.base,
    gray: color.black,
    yellow: color.yellow[800],
  },
  interactive: {
    ...COLOR_PALLETTE.base,
    gray: color.black,
  },
} as const;

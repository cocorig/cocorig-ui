export type FontWeightsToken = 'regular' | 'bold' | 'extraBold';

export const WEIGHT_SET: Record<FontWeightsToken, number> = {
  regular: 400,
  bold: 500,
  extraBold: 700,
} as const;

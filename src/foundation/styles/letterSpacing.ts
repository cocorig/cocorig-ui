export type LetterSpacingsToken = 'tighter' | 'tight' | 'wide' | 'wider' | 'widest';

export const LETTER_SPACING_SET: Record<LetterSpacingsToken, string> = {
  tighter: '-0.05em',
  tight: '-0.02em',
  wide: '0.02em',
  wider: '0.05em',
  widest: '0.1em',
};

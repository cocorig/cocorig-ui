import {
  BreakpointsToken,
  BordersToken,
  LetterSpacingsToken,
  TextSizeToken,
  ShadowsToken,
  FontWeightsToken,
} from '../foundation';

export type Number = number & {};
export type String = string & {};

export type Token<T extends keyof Tokens> = Tokens[T];

export type Tokens = {
  shadows: ShadowsToken;
  borders: BordersToken;
  fontSizes: TextSizeToken;
  fontWeights: FontWeightsToken;
  breakpoints: BreakpointsToken;
  lineHeights: TextSizeToken;
  letterSpacings: LetterSpacingsToken;
} & { [token: string]: never };

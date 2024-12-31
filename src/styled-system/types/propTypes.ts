import { Token } from '../token';

export interface StyledProperties {
  borderRadius?: Token<'borders'>;
  weight?: Token<'fontWeights'>;
  shadow?: Token<'shadows'>;
  fullWidth?: boolean;
}

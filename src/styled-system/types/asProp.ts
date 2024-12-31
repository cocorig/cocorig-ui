import { ElementType } from 'react';

export type WithAsProp<T extends ElementType> = {
  as?: T;
};

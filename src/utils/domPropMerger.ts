import { AriaAttributes, AriaRole } from 'react';

import { SerializedStyles } from '@emotion/react';

import { Merge } from './mergeTypes';

export type PropsMerger<P = Record<string, unknown>, R = DOMAttributes> = (props?: Merge<DOMAttributes, P>) => R;

export interface DOMAttributes<T = Element> extends AriaAttributes, React.DOMAttributes<T> {
  [dataAttr: string]: unknown;
  id?: string;
  role?: AriaRole;
  tabIndex?: number;
  css?: Css;
}

export type Css = SerializedStyles[] | SerializedStyles;

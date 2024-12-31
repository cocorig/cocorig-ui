import { BlockquoteHTMLAttributes, forwardRef, Ref, useMemo } from 'react';

import styled from '@emotion/styled';

import { toSizeUnit } from '../../css';
import {
  marginProps,
  marginStyle,
  paddingProps,
  paddingStyle,
  SpacingProp,
  ColorStyleReturnType,
  getColorStyles,
} from '../../foundation';
import { SystemProps } from '../../styled-system';

interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement>, CommonProps {}
type CommonProps = { borderRadius?: string | number } & SystemProps<'blockquote'> & SpacingProp;

type BlockStyle = ColorStyleReturnType & CommonProps;

export const Blockquote = forwardRef(
  ({ children, colorScheme = 'pink', ...props }: BlockquoteProps, ref: Ref<HTMLQuoteElement>) => {
    const COLOR = useMemo(() => getColorStyles(colorScheme), [colorScheme]);
    return (
      <BaseBlockquote {...props} {...COLOR} ref={ref} {...marginProps(props)} {...paddingProps(props)}>
        {children}
      </BaseBlockquote>
    );
  },
);

const BaseBlockquote = styled.blockquote<BlockStyle>`
  --blockquote-bg: ${({ soft }) => soft};
  --border-color: ${({ base }) => base};
  border-radius: ${({ borderRadius }) => (borderRadius ? toSizeUnit(borderRadius) : 'none')};
  display: flex;
  border-left: 5px solid var(--border-color);
  background-color: var(--blockquote-bg);
  padding: 1rem;
  ${marginStyle}
  ${paddingStyle}
`;

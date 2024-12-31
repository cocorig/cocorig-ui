import { Ref, forwardRef } from 'react';

import styled from '@emotion/styled';

export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icon = forwardRef(({ children, ...props }: IconProps, ref: Ref<SVGSVGElement>) => {
  return (
    <Svg {...props} ref={ref}>
      {children}
    </Svg>
  );
});

const Svg = styled.svg`
  --icon-size: 1em;
  stroke: currentColor;
  stroke-width: 0;
  display: inline-block;
  vertical-align: middle;
  width: var(--icon-size);
  height: var(--icon-size);
  flex-shrink: 0;
`;

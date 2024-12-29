import { css, SerializedStyles } from '@emotion/react';

import { BORDER_RADIUS_SET, WEIGHT_SET, SHADOWS_SET } from '../foundation';
import { StyledProperties } from '../styled-system';

export const getCommonStyles = (props: StyledProperties): SerializedStyles => css`
  ${props.borderRadius &&
  css`
    border-radius: ${BORDER_RADIUS_SET[props.borderRadius]};
  `}

  ${props.weight &&
  css`
    font-weight: ${WEIGHT_SET[props.weight]};
  `}

  ${props.shadow &&
  css`
    box-shadow: ${SHADOWS_SET[props.shadow]};
  `}

  ${props.fullWidth &&
  css`
    width: 100%;
  `}
`;
import styled from '@emotion/styled';

import { COLOR_SET, WEIGHT_SET } from '../../foundation';
import { toSizeUnit } from '../../utils';

import { FormControlStyle } from './types';

export const StyledFormControl = styled.div<FormControlStyle>`
  --label-size: ${({ labelSize }) => toSizeUnit(labelSize ?? 1)};
  --helperText-size: ${({ helperTextSize }) => toSizeUnit(helperTextSize ?? 0.875)};
  --helperText-color: ${({ statusColor, helperTextColor }) => helperTextColor ?? statusColor ?? COLOR_SET.gray[800]};
  display: flex;
  width: 100%;
  position: relative;
  gap: 0.3rem;
  flex-direction: column;
  align-items: flex-start;

  input,
  textarea {
    ${({ statusColor }) =>
      statusColor &&
      `--input-color: ${statusColor};
      --input-focusColor: ${statusColor};`}
  }
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
  font-size: var(--label-size);
  font-weight: ${WEIGHT_SET.bold};
  gap: 0.25rem;
`;

export const Indicator = styled.span`
  color: ${COLOR_SET.red[600]};
`;

export const HelperText = styled.span`
  color: var(--helperText-color);
  font-size: var(--helperText-size);
`;

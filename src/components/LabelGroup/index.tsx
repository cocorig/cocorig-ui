import React from 'react';
import styled from '@emotion/styled';
import { spacing } from '../../foundation/spacing';
export interface LabelGroupProps {
  children?: React.ReactNode;
}

const LabelGroup = ({ children }: LabelGroupProps) => (
  <Wrapper>{children}</Wrapper>
);
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${[spacing.px(1), spacing.py(2)]};
`;

export default LabelGroup;

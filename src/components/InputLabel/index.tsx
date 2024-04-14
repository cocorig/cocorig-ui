import styled from '@emotion/styled';
import Input, { InputProps } from '../Input';

interface InputLabelProps extends InputProps {
  children: React.ReactNode;
  isHorizontal?: boolean; // 라벨과 인풋 정렬 상태
}

const InputLabel: React.FC<InputLabelProps> = ({
  children,
  isHorizontal,
  ...inputProps
}) => {
  return (
    <>
      <Label isHorizontal={isHorizontal}>
        {children}
        <Input {...inputProps} />
      </Label>
    </>
  );
};

const Label = styled.label<{ isHorizontal?: boolean }>`
  display: ${({ isHorizontal }) => (isHorizontal ? 'flex' : 'inline')};
  align-items: center;
  gap: 8px;
`;
export default InputLabel;

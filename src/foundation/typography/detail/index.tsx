import { BaseTypography, TypographyComponentProps } from '../Base/baseTypography';

interface DetailProps extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>, TypographyComponentProps {
  tag?: 'small';
}
export const Detail = ({ size = 'xs', tag, children, ...props }: DetailProps) => {
  return (
    <BaseTypography as={tag} size={size} {...props}>
      {children}
    </BaseTypography>
  );
};

import { BaseTypography, TypographyComponentProps } from '../Base/baseTypography';

interface BodyProps extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>, TypographyComponentProps {
  tag?: 'span' | 'p';
}
export const Body = ({ tag = 'span', size = 'sm', children, ...props }: BodyProps) => {
  return (
    <BaseTypography as={tag} size={size} {...props}>
      {children}
    </BaseTypography>
  );
};

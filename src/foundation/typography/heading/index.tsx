import { BaseTypography, TypographyComponentProps } from '../Base/baseTypography';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, TypographyComponentProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = ({ tag = 'h1', size = '2xl', children, ...props }: HeadingProps) => {
  return (
    <BaseTypography as={tag} size={size} {...props}>
      {children}
    </BaseTypography>
  );
};

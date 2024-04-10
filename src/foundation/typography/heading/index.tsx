import {
  BaseTypographyProps,
  TypographyComponent,
} from '../common/baseTypography';

interface HeadingProps extends BaseTypographyProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
  tag: Tag = 'h1',
  size = 'xxl',
  ...props
}) => {
  return <TypographyComponent tag={Tag} size={size} {...props} />;
};

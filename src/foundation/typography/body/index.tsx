import {
  BaseTypographyProps,
  TypographyComponent,
} from '../common/baseTypography';
interface BodyProps extends BaseTypographyProps {
  tag?: 'span' | 'p';
}

export const Body: React.FC<BodyProps> = ({
  tag: Tag = 'span',
  size = 'sm',
  ...props
}) => {
  return <TypographyComponent tag={Tag} size={size} {...props} />;
};

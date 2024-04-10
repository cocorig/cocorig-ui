import {
  BaseTypographyProps,
  TypographyComponent,
} from '../common/baseTypography';
interface DetailProps extends BaseTypographyProps {
  tag?: 'small';
}

export const Detail: React.FC<DetailProps> = ({
  tag: Tag,
  size = 'xs',
  ...props
}) => {
  return <TypographyComponent tag={Tag} size={size} {...props} />;
};

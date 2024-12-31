import styled from '@emotion/styled';

import { centerContent } from '../../css';
import { COLOR_SET } from '../../foundation';
import { Icon, IconProps } from '../Icon';

import { useAccordionItem } from './AccordionContext';

type AccordionIconProps = IconProps & { color?: string };

export const AccordionIcon = ({ ...props }: AccordionIconProps) => {
  const { getIconProps } = useAccordionItem();
  const iconProps = getIconProps(props);

  const iconStyles = {
    width: '1.2em',
    height: '1.2em',
    transform: iconProps.open ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'cubic-bezier(0,0,.2,1) .2s',
    transformOrigin: 'center',
  };

  return (
    <StyledIcon {...iconProps}>
      <Icon viewBox="0 0 24 24" fill="none" style={iconStyles}>
        <path
          d="M 6 9 L 12 15 L 18 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </StyledIcon>
  );
};

const StyledIcon = styled.div<Pick<AccordionIconProps, 'color'>>`
  ${centerContent('inline')};

  color: ${({ color }) => color ?? COLOR_SET.gray['900']};
  font-size: inherit;
`;

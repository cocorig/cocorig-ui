import { MarginSpacing } from '../../foundation';
import { SystemProps } from '../../styled-system';

import type { ButtonStyles } from '../Button/types';

export type CommonProps = MarginSpacing & SystemProps<'badge'>;

export type BadgeStyleProps = ButtonStyles & CommonProps;

import { style } from '@vanilla-extract/css';
import { CircleNotch } from '@phosphor-icons/react';

import * as styles from './Spinner.css';

import { Icon } from '@/components';

export const Spinner = ({ size = undefined, weight = undefined }) => (
    <Icon size={size} weight={weight}>
        <CircleNotch className={styles.animated} />
    </Icon>
);
Spinner.displayName = 'Spinner';

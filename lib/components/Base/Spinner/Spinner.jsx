import { forwardRef } from 'react';
import { CircleNotch } from '@phosphor-icons/react';
import { Icon } from '@/components';
import * as styles from './Spinner.css';

export const Spinner = forwardRef(({ size = undefined, weight = undefined }, ref) => (
    <Icon size={size} weight={weight}>
        <CircleNotch ref={ref} className={styles.animated} />
    </Icon>
));
Spinner.displayName = 'Spinner';

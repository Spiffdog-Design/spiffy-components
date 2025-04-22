// src/components/Button/Button.tsx
import * as styles from './Button.css';
import cn from 'classnames';

import { Spinner } from '@/components';

export const Button = ({ busy, children, className, rounded, ...props }) => {
    return (
        <button className={cn(styles.base, className, { rounded: rounded })} {...props}>
            {children}
            <div className={cn(styles.busy, { rounded: rounded, show: busy })}>
                <Spinner />
            </div>
        </button>
    );
};

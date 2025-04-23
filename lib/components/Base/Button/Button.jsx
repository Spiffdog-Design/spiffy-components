// src/components/Button/Button.tsx
import { forwardRef } from 'react';
import * as styles from './Button.css';
import cn from 'classnames';

import { Spinner } from '@/components';

export const Button = forwardRef(
    ({ appearance = 'solid', busy, children, className, disabled, rounded, variant = 'primary', ...props }, ref) => {
        const displayClassName = cn(styles.base, className, {
            rounded: rounded,
            [`${styles.basic}`]: appearance === 'basic',
            [`${styles.outline}`]: appearance === 'outline',
            [`${styles.alert}`]: variant === 'alert',
            [`${styles.primary}`]: variant === 'primary',
            [`${styles.success}`]: variant === 'success',
            [`${styles.warning}`]: variant === 'warning',
        });

        return (
            <button ref={ref} className={displayClassName} disabled={disabled || busy} {...props}>
                {children}
                <div className={cn(styles.busy, { rounded: rounded, show: busy })}>
                    <Spinner />
                </div>
            </button>
        );
    },
);

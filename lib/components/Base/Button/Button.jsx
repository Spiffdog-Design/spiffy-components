// src/components/Button/Button.tsx
import { forwardRef } from 'react';
import * as styles from './Button.css';
import cn from 'classnames';

import { Spinner } from '@/components';

export const Button = forwardRef(
    ({ appearance = 'solid', busy, children, className, disabled, rounded, variant = 'base', ...props }, ref) => {
        const displayClassName = cn(
            styles.base,
            {
                rounded: rounded,
                [`${styles.basic}`]: appearance === 'basic',
                [`${styles.outline}`]: appearance === 'outline',
                [`${styles.alert}`]: variant === 'alert',
                [`${styles.primary}`]: variant === 'primary',
                [`${styles.success}`]: variant === 'success',
                [`${styles.warning}`]: variant === 'warning',
            },
            className,
        );

        return (
            <button ref={ref} className={displayClassName} disabled={disabled || busy} {...props}>
                <div className={styles.content}>{children}</div>
                <div className={cn(styles.busy, { rounded: rounded, show: busy })}>
                    <Spinner size={28} />
                </div>
            </button>
        );
    },
);
Button.displayName = 'Button';

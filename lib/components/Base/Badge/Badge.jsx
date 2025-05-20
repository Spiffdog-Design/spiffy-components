// src/components/Base/Badge/Badge.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import { FaIcon } from '@/components';

import * as styles from './Badge.css';

export const Badge = forwardRef(
    ({ appearance = 'solid', value, label, className, mode = 'none', onClick, variant = 'base', ...props }, ref) => {
        const displayClassName = cn(styles.badge, className, {
            [`${styles.pointer}`]: mode === 'toggle',
            [`${styles.alert}`]: variant === 'alert',
            [`${styles.base}`]: variant === 'base',
            [`${styles.primary}`]: variant === 'primary',
            [`${styles.success}`]: variant === 'success',
            [`${styles.warning}`]: variant === 'warning',
            [`${styles.basic}`]: appearance === 'basic',
            [`${styles.outline}`]: appearance === 'outline',
        });
        const handleClick = (args) => () => {
            if (mode === 'toggle' && onClick != null) {
                onClick(args);
            }
            if (mode === 'close' && onClick != null) {
                onClick(args);
            }
        };

        return (
            <div
                ref={ref}
                data-type={mode === 'close' ? 'close' : ''}
                className={displayClassName}
                onClick={handleClick(value)}
            >
                <div className={styles.content}>{label}</div>
                {mode === 'close' && (
                    <button className={styles.button} onClick={handleClick(value)}>
                        <FaIcon name="xmark" />
                    </button>
                )}
            </div>
        );
    },
);
Badge.displayName = 'Badge';

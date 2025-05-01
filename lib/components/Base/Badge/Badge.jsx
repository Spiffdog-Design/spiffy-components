// src/components/Base/Badge/Badge.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import { FaIcon } from '@/components';

import * as styles from './Badge.css';

export const Badge = forwardRef(
    ({ appearance = 'base', children, className, onClose, variant = 'base', ...props }, ref) => {
        const displayClassName = cn(styles.badge, className, {
            [`${styles.alert}`]: variant === 'alert',
            [`${styles.base}`]: variant === 'base',
            [`${styles.primary}`]: variant === 'primary',
            [`${styles.success}`]: variant === 'success',
            [`${styles.warning}`]: variant === 'warning',
            [`${styles.basic}`]: appearance === 'basic',
            [`${styles.outline}`]: appearance === 'outline',
        });

        return (
            <div data-type={onClose != null ? 'close' : 'base'} className={displayClassName}>
                <div className={styles.content}>{children}</div>
                {onClose != null && (
                    <button className={styles.button} onClick={onClose}>
                        <FaIcon name="xmark" />
                    </button>
                )}
            </div>
        );
    },
);
Badge.displayName = 'Badge';

// src/components/Base/Badge/Badge.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import { Icon } from '@/components';

import * as styles from './Badge.css';

export const Badge = forwardRef(function Badge(
    { appearance = 'solid', value, children, className, onClick, variant = 'base', ...props },
    ref,
) {
    const displayClassName = cn(styles.badge, className, {
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.base}`]: variant === 'base',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
        [`${styles.basic}`]: appearance === 'basic',
        [`${styles.outline}`]: appearance === 'outline',
    });
    const handleClick = (args) => () => {
        if (onClick != null) onClick(args);
    };

    return (
        <div {...props} ref={ref} data-type={onClick != null ? 'close' : ''} className={displayClassName}>
            <div className={styles.content}>{children}</div>
            {onClick != null && (
                <button className={cn(styles.closeButton, styles.pointer)} onClick={handleClick(value)}>
                    <Icon name="xmark" size={14} />
                </button>
            )}
        </div>
    );
});

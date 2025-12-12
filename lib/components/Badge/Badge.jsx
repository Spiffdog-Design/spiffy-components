// src/components/Base/Badge/Badge.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import { Icon } from '@/components';

import styles from './Badge.module.css';

export const Badge = forwardRef(function Badge(
    { appearance = 'solid', value, children, className, onClick, variant = 'base', ...props },
    ref,
) {
    const displayClassName = cn(styles['sc-badge'], className, {
        [styles['sc-badge-alert']]: variant === 'alert',
        [styles['sc-badge-base']]: variant === 'base',
        [styles['sc-badge-primary']]: variant === 'primary',
        [styles['sc-badge-success']]: variant === 'success',
        [styles['sc-badge-warning']]: variant === 'warning',
        [styles['sc-badge-basic']]: appearance === 'basic',
        [styles['sc-badge-outline']]: appearance === 'outline',
    });
    const handleClick = (args) => () => {
        if (onClick != null) onClick(args);
    };

    return (
        <div {...props} ref={ref} data-type={onClick != null ? 'close' : ''} className={displayClassName}>
            <div className={styles['sc-badge-content']}>{children}</div>
            {onClick != null && (
                <button
                    className={cn(styles['sc-badge-close-button'], styles['sc-badge-pointer'])}
                    onClick={handleClick(value)}
                >
                    <Icon name="xmark" size="sm" />
                </button>
            )}
        </div>
    );
});

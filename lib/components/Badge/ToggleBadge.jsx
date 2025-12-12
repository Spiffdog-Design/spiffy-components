// src/components/Base/Badge/ToggleBadge.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './Badge.module.css';

export const ToggleBadge = forwardRef(function Badge(
    { selected, value, children, className, onClick, variant = 'base', ...props },
    ref,
) {
    const displayClassName = cn(styles['sc-badge'], styles['sc-badge-pointer'], className, {
        [styles['sc-badge-alert']]: variant === 'alert',
        [styles['sc-badge-base']]: variant === 'base',
        [styles['sc-badge-primary']]: variant === 'primary',
        [styles['sc-badge-success']]: variant === 'success',
        [styles['sc-badge-warning']]: variant === 'warning',
        [styles['sc-badge-basic']]: selected === false,
    });
    const handleClick = (args) => () => {
        if (onClick != null) onClick(args);
    };

    return (
        <div {...props} ref={ref} className={displayClassName} onClick={handleClick(value)}>
            <div className={styles['sc-badge-content']}>{children}</div>
        </div>
    );
});

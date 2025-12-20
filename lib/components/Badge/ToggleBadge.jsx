// src/components/Base/Badge/ToggleBadge.tsx
import { forwardRef } from 'react';
import { cn } from '@/utilities';

import styles from './Badge.module.css';

export const ToggleBadge = forwardRef(function Badge(
    { selected, value, children, className, onClick, variant = 'base', ...props },
    ref,
) {
    const displayClassName = cn(styles['sc-badge'], className);
    const handleClick = (args) => () => {
        if (onClick != null) onClick(args);
    };

    return (
        <div
            {...props}
            ref={ref}
            className={displayClassName}
            onClick={handleClick(value)}
            data-variant={variant}
            data-appearance={selected === false ? 'outline' : 'solid'}
        >
            <div className={styles['sc-badge-content']}>{children}</div>
        </div>
    );
});

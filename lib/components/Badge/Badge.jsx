// src/components/Base/Badge/Badge.tsx
import { forwardRef } from 'react';
import { cn } from '@/utilities';

import { Icon } from '@/components';

import styles from './Badge.module.css';

export const Badge = forwardRef(function Badge(
    { appearance = 'solid', value, children, className, onClick, variant = 'base', rounded = true, ...props },
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
            data-variant={variant}
            data-appearance={appearance}
            data-closable={onClick != null ? 'true' : 'false'}
            data-rounded={rounded ? 'true' : 'false'}
        >
            <div className={styles['sc-badge-content']}>{children}</div>
            {onClick != null && (
                <button className={styles['sc-badge-close-button']} onClick={handleClick(value)}>
                    <Icon name="xmark" size="sm" />
                </button>
            )}
        </div>
    );
});

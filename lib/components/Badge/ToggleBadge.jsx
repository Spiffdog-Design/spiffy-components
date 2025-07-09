// src/components/Base/Badge/ToggleBadge.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './Badge.css';

export const ToggleBadge = forwardRef(function Badge(
    { selected, value, children, className, onClick, variant = 'base', ...props },
    ref,
) {
    const displayClassName = cn(styles.badge, styles.pointer, className, {
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.base}`]: variant === 'base',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
        [`${styles.basic}`]: selected === false,
    });
    const handleClick = (args) => () => {
        if (onClick != null) onClick(args);
    };

    return (
        <div {...props} ref={ref} className={displayClassName} onClick={handleClick(value)}>
            <div className={styles.content}>{children}</div>
        </div>
    );
});

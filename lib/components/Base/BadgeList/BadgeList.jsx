// src/components/Base/BadgeList/BadgeList.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import { Badge } from '@/components';

import * as styles from './BadgeList.css';

export const BadgeList = forwardRef(
    ({ data, className, appearance, rounded, variant = 'base', onClose, ...props }, ref) => {
        const closeFn = (id) => (onClose != null ? () => onClose(id) : undefined);
        const displayClassName = cn(
            styles.badgeList,
            {
                [`${styles.alert}`]: variant === 'alert',
                [`${styles.primary}`]: variant === 'primary',
                [`${styles.success}`]: variant === 'success',
                [`${styles.warning}`]: variant === 'warning',
                [`${styles.rounded}`]: rounded === true,
            },
            className,
        );

        return (
            <div ref={ref} className={displayClassName} {...props}>
                {(data ?? []).map((i, idx) => {
                    return (
                        <Badge
                            tabIndex={idx}
                            key={i.id}
                            appearance={appearance}
                            variant={variant}
                            onClose={closeFn(i.id)}
                        >
                            {i.label}
                        </Badge>
                    );
                })}
            </div>
        );
    },
);
BadgeList.displayName = 'BadgeList';

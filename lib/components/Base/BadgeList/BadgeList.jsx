// src/components/Base/BadgeList/BadgeList.tsx
import { forwardRef } from 'react';
import cn from 'classnames';

import { Badge } from '@/components';

import * as styles from './BadgeList.css';

export const BadgeList = forwardRef(
    ({ data, className, appearance, bordered = false, rounded = false, variant = 'base', onClose, ...props }, ref) => {
        const closeFn = (id) => (onClose != null ? () => onClose(id) : undefined);
        const displayClassName = cn(
            styles.badgeList,
            {
                [`${styles.border}`]: bordered === true,
                [`${styles.rounded}`]: rounded === true,

                [`${styles.alert}`]: variant === 'alert',
                [`${styles.base}`]: variant === 'base',
                [`${styles.primary}`]: variant === 'primary',
                [`${styles.success}`]: variant === 'success',
                [`${styles.warning}`]: variant === 'warning',
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

import { forwardRef } from 'react';
import cn from 'classnames';

import { Badge, FaIcon, Tooltip } from '@/components';

import * as styles from './BadgeList.css';

export const BadgeList = forwardRef(
    (
        {
            data,
            className,
            appearance,
            bordered = false,
            rounded = false,
            maxLength,
            variant = 'base',
            onClose,
            ...props
        },
        ref,
    ) => {
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

        const maxItems = maxLength != null ? Math.max(maxLength, 1) : data?.length;
        const items = data?.slice(0, maxItems) ?? [];
        const extItems = data?.slice(maxItems) ?? [];

        return (
            <div ref={ref} className={displayClassName} {...props}>
                {(items ?? []).map((i, idx) => {
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
                {extItems?.length > 0 && (
                    <Tooltip
                        align="end"
                        side="bottom"
                        className={styles.tooltip}
                        variant={variant}
                        trigger={
                            <div>
                                <Badge appearance={appearance} variant={variant}>
                                    <FaIcon name="angle-down" size={15} />
                                </Badge>
                            </div>
                        }
                    >
                        {extItems?.map((i) => (
                            <Badge key={i.id} appearance={appearance} variant={variant} onClose={closeFn(i.id)}>
                                {i.label}
                            </Badge>
                        ))}
                    </Tooltip>
                )}
            </div>
        );
    },
);
BadgeList.displayName = 'BadgeList';

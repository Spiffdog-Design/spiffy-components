import { forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

import { Badge, FaIcon, Tooltip } from '@/components';

import * as styles from './BadgeList.css';

export const BadgeToggleList = forwardRef(
    (
        {
            data,
            className,
            appearance,
            bordered = false,
            rounded = false,
            maxLength,
            variant = 'base',
            onChange,
            ...props
        },
        ref,
    ) => {
        const [items, setItems] = useState([]);
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

        const handleBadgeClick = (id) => () => {
            setItems((itms) => itms.map((i) => ({ ...i, selected: i.id === id ? !i.selected : i.selected })));
        };

        useEffect(() => {
            if (onChange != null) {
                onChange(
                    items.reduce((acc, i) => {
                        if (i.selected) {
                            acc.push(i.id);
                        }
                        return acc;
                    }, []),
                );
            }
        }, [items]);

        useEffect(() => {
            setItems(data.map((d) => ({ ...d, selected: d.selected ?? false })));
        }, [data]);

        const maxItems = maxLength != null ? Math.max(maxLength, 1) : items?.length;
        const displayItems = items?.slice(0, maxItems) ?? [];
        const displayItemExt = items?.slice(maxItems) ?? [];

        return (
            <div ref={ref} className={displayClassName} {...props}>
                {(displayItems ?? []).map((i, idx) => {
                    return (
                        <Badge
                            tabIndex={idx}
                            key={i.id}
                            appearance={i.selected ? 'solid' : 'basic'}
                            variant={variant}
                            onClick={handleBadgeClick(i.id)}
                        >
                            {i.label}
                        </Badge>
                    );
                })}
                {displayItemExt?.length > 0 && (
                    <Tooltip
                        align="end"
                        side="bottom"
                        className={styles.tooltip}
                        variant={variant}
                        trigger={
                            <div>
                                <Badge
                                    appearance={displayItemExt?.some((i) => i.selected) ? 'solid' : 'basic'}
                                    variant={variant}
                                >
                                    <FaIcon name="angle-down" size={15} />
                                </Badge>
                            </div>
                        }
                    >
                        {displayItemExt?.map((i) => (
                            <Badge
                                key={i.id}
                                appearance={i.selected ? 'solid' : 'basic'}
                                variant={variant}
                                onClick={handleBadgeClick(i.id)}
                            >
                                {i.label}
                            </Badge>
                        ))}
                    </Tooltip>
                )}
            </div>
        );
    },
);
BadgeToggleList.displayName = 'BadgeToggleList';

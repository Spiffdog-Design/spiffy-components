import { Children, cloneElement, forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { Badge, Icon, Popover } from '@/components';

import * as styles from './BadgeList.css';
import { useMemo } from 'react';

export const BadgeList = forwardRef(
    ({ children, className, bordered = false, rounded = false, variant = 'base', onClick, ...props }, ref) => {
        const containerRef = useRef(null);
        const measureRef = useRef(null);
        const [visibleCount, setVisibleCount] = useState(Children.count(children));
        const lastCountRef = useRef(visibleCount);

        useImperativeHandle(ref, () => containerRef.current, []);

        const displayClassName = cn(
            styles.badgeList,
            {
                [styles.border]: bordered === true,
                [styles.rounded]: rounded === true,
                [styles.alert]: variant === 'alert',
                [styles.base]: variant === 'base',
                [styles.primary]: variant === 'primary',
                [styles.success]: variant === 'success',
                [styles.warning]: variant === 'warning',
            },
            className,
        );

        const badgeArray = useMemo(() => {
            return children == null
                ? []
                : Children.map(children, (child) =>
                      cloneElement(child, {
                          ...child.props,
                          variant,
                          selected: child.props.selected ?? false,
                      }),
                  );
        }, [children]);

        const updateVisibleCount = () => {
            const container = containerRef.current;
            const measure = measureRef.current;
            if (!container || !measure) return;

            measure.style.display = 'flex';
            const containerWidth = container.offsetWidth;
            const badges = Array.from(measure.children);

            let totalWidth = 0;
            let count = 0;

            for (let i = 0; i < badges.length; i++) {
                const badge = badges[i];
                totalWidth += badge.offsetWidth + 4; // 4px gap
                if (totalWidth > containerWidth) break;
                count++;
            }

            const nextCount = count < badges.length ? Math.max(count - 1, 0) : count;

            // Always update state to ensure growth works
            if (lastCountRef.current !== nextCount) {
                setVisibleCount(nextCount);
                lastCountRef.current = nextCount;
            }
            measure.style.display = 'none';
        };

        useLayoutEffect(() => {
            const container = containerRef.current;
            if (!container) return;

            const resizeObserver = new ResizeObserver(() => {
                requestAnimationFrame(updateVisibleCount);
            });

            resizeObserver.observe(container);
            window.addEventListener('resize', updateVisibleCount);

            updateVisibleCount(); // Initial check

            return () => {
                resizeObserver.disconnect();
                window.removeEventListener('resize', updateVisibleCount);
            };
        }, [badgeArray.length]);

        const visibleBadges = badgeArray.slice(0, visibleCount - 1);
        const remCount = badgeArray.length - (visibleCount + 1);
        const remBadges = badgeArray.slice(visibleCount);

        return (
            <>
                <div {...props} ref={containerRef}>
                    <div className={displayClassName}>
                        {visibleBadges}
                        {remCount > 0 && (
                            <Popover
                                mode="click"
                                placement="bottom-start"
                                className={styles.popover}
                                variant={variant}
                                trigger={({ events }) => (
                                    <div {...events}>
                                        <Badge appearance="basic" variant={variant}>
                                            <span>+ {remCount}</span>
                                            <Icon name="angle-down" />
                                        </Badge>
                                    </div>
                                )}
                            >
                                <div className={styles.badgeListRemaining}>{remBadges}</div>
                            </Popover>
                        )}
                    </div>
                </div>
                <div className={cn(displayClassName, styles.measuringContainer)} ref={measureRef} aria-hidden>
                    {badgeArray}
                </div>
            </>
        );
    },
);

BadgeList.displayName = 'BadgeList';

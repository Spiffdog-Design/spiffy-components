import { Children, cloneElement, forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { Badge, ToggleBadge, FaIcon, Popover } from '@/components';

import * as styles from './BadgeList.css';

export const BadgeList = forwardRef(
    (
        {
            children,
            className,
            appearance,
            bordered = false,
            mode = 'close',
            rounded = false,
            variant = 'base',
            onClick,
            ...props
        },
        ref,
    ) => {
        const containerRef = useRef(null);
        const measureRef = useRef(null);
        const [visibleCount, setVisibleCount] = useState(Children.count(children));
        const lastCountRef = useRef(visibleCount);
        const handleClick = (id) => () => {
            console.log('handleClick', id);

            return mode === 'toggle'
                ? data.map((d) => {
                      return {
                          ...d,
                          enabled: d.id === id ? !d.enabled : d.enabled,
                      };
                  })
                : mode === 'close'
                ? data.filter((d) => d.id != id)
                : null;
        };
        const allChildren =
            children == null
                ? []
                : Children.map(children, (child) =>
                      cloneElement(child, {
                          ...child.props,
                          appearance,
                          mode,
                          variant,
                          onClick: handleClick(child.props.value),
                          enabled: child.props.enabled ?? false,
                      }),
                  );

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

        const updateVisibleCount = () => {
            const container = containerRef.current;
            const measure = measureRef.current;
            if (!container || !measure) return;

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
        }, [allChildren.length]);

        const visibleBadges = allChildren.slice(0, visibleCount);
        const remCount = allChildren.length - visibleCount;
        const remBadges = allChildren.slice(visibleCount);
        const hasRemToggled = remBadges.some((badge) => badge.props.enabled);

        return (
            <>
                <div ref={containerRef} className={displayClassName} {...props}>
                    {visibleBadges}
                    {remCount > 0 && (
                        <Popover
                            open={true}
                            align="end"
                            side="bottom"
                            showHeader={false}
                            className={styles.popover}
                            variant={variant}
                            trigger={
                                <div>
                                    {mode === 'toggle' ? (
                                        <ToggleBadge
                                            enabled={hasRemToggled}
                                            label={
                                                <>
                                                    <span>+ {remCount}</span>
                                                    <FaIcon name="angle-down" size={15} />
                                                </>
                                            }
                                        />
                                    ) : (
                                        <Badge
                                            appearance={appearance}
                                            variant={variant}
                                            label={
                                                <>
                                                    <span>+ {remCount}</span>
                                                    <FaIcon name="angle-down" size={15} />
                                                </>
                                            }
                                        />
                                    )}
                                </div>
                            }
                        >
                            <div className={styles.badgeListRemaining}>{remBadges}</div>
                        </Popover>
                    )}
                </div>
                <div className={cn(displayClassName, styles.measuringContainer)} ref={measureRef} aria-hidden>
                    {allChildren}
                </div>
            </>
        );
    },
);

BadgeList.displayName = 'BadgeList';

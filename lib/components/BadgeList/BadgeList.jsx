import {
    Children,
    cloneElement,
    forwardRef,
    useImperativeHandle,
    useLayoutEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import { cn } from '@/utilities';

import { Badge, Icon, Popover } from '@/components';

import styles from './BadgeList.module.css';
import { useMemo } from 'react';

export const BadgeList = forwardRef(
    ({ children, className, bordered = false, rounded = false, variant = 'base', onClick, ...props }, ref) => {
        const [visibleCount, setVisibleCount] = useState(Children.count(children));

        const containerRef = useRef(null);
        const lastCountRef = useRef(visibleCount);
        const measureRef = useRef(null);

        useImperativeHandle(ref, () => containerRef.current, []);

        const displayClassName = cn(styles['sc-badge-list'], className);

        const badgeArray = useMemo(() => {
            return children == null
                ? []
                : Children.map(children, (child) =>
                      cloneElement(child, {
                          ...child.props,
                          selected: child.props.selected ?? false,
                      }),
                  );
        }, [children]);

        const updateVisibleCount = () => {
            const container = containerRef.current;
            const measure = measureRef.current;
            if (!container || !measure) return;

            // measure.style.display = 'flex';
            const containerWidth = container.offsetWidth;
            const badges = Array.from(measure.children);

            let totalWidth = 0;
            let count = 0;
            let gap = 0;

            if (badges != null && badges.length > 0) {
                const badge = badges[0];
                const style = window.getComputedStyle(badge);
                gap = parseInt(style.gap.replace('px', ''), 10) || 0;
            }
            const counterBadgeWidth = gap * 2 + 32; // Add width for the counter badge if needed

            for (let i = 0; i < badges.length; i++) {
                const badge = badges[i];
                totalWidth += badge.offsetWidth + gap; // Add 16px for the badge's border
                const containerWidthWithCounter = totalWidth + counterBadgeWidth;
                if (containerWidthWithCounter > containerWidth) break;
                count++;
            }

            const nextCount = count <= badges.length ? Math.max(count, 0) : count;

            // Always update state to ensure growth works
            if (lastCountRef.current !== nextCount) {
                setVisibleCount(nextCount);
                lastCountRef.current = nextCount;
            }
            // measure.style.display = 'none';
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

        const visibleBadges = badgeArray.slice(0, visibleCount);
        const remCount = badgeArray.length - visibleCount;
        const remBadges = badgeArray.slice(visibleCount);

        console.log('render BadgeList:', { visibleCount, remCount });

        return (
            <>
                <div>
                    <div
                        className={displayClassName}
                        ref={containerRef}
                        data-variant={variant}
                        data-bordered={bordered ? 'true' : 'false'}
                        data-rounded={rounded ? 'true' : 'false'}
                        {...props}
                    >
                        {visibleBadges}
                        {remCount > 0 && (
                            <Popover
                                mode="click"
                                placement="bottom-start"
                                className={styles['sc-badge-list-popover']}
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
                                <div className={styles['sc-badge-list-remaining']}>{remBadges}</div>
                            </Popover>
                        )}
                    </div>
                    <div
                        className={cn(displayClassName, styles['sc-badge-list-measuring-container'])}
                        ref={measureRef}
                        aria-hidden
                    >
                        {badgeArray}
                    </div>
                </div>
            </>
        );
    },
);

BadgeList.displayName = 'BadgeList';

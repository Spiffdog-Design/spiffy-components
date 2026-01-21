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

/**
 * BadgeList component - A container for displaying multiple badges with overflow handling.
 * 
 * Automatically handles overflow by showing a "+N" popover when badges don't fit.
 * Uses ResizeObserver to dynamically calculate visible badge count.
 * 
 * @typedef {'base' | 'primary' | 'success' | 'warning' | 'alert'} BadgeListVariant
 * @typedef {'xs' | 'sm' | 'md'} BadgeListSize
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge components to display
 * @param {BadgeListVariant} [props.variant='base'] - Color variant
 * @param {BadgeListSize} [props.size='md'] - Size variant
 * @param {boolean} [props.bordered=false] - Whether to show border around the list
 * @param {boolean} [props.rounded=false] - Whether to apply rounded corners
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.Ref<HTMLDivElement>} ref
 */
export const BadgeList = forwardRef(
    ({ children, className, bordered = false, rounded = false, variant = 'base', size = 'md', onClick, ...props }, ref) => {
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

            // Get container width (accounting for padding)
            const containerStyle = window.getComputedStyle(container);
            const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
            const paddingRight = parseFloat(containerStyle.paddingRight) || 0;
            const containerWidth = container.offsetWidth - paddingLeft - paddingRight;
            
            // Get gap from container
            const gap = parseFloat(containerStyle.gap) || 0;
            
            const badges = Array.from(measure.children);
            if (badges.length === 0) {
                setVisibleCount(0);
                return;
            }

            // Estimate width of the "+N" counter badge based on size
            // These are conservative estimates for "+ 99" text + icon + padding
            const counterBadgeWidthEstimates = {
                xs: 50,
                sm: 55,
                md: 60,
            };
            const estimatedCounterBadgeWidth = counterBadgeWidthEstimates[size] || 60;

            let totalWidth = 0;
            let count = 0;

            for (let i = 0; i < badges.length; i++) {
                const badge = badges[i];
                const badgeWidth = badge.offsetWidth;
                
                // Calculate total width including this badge and gap (except for first badge)
                const widthWithThisBadge = totalWidth + (i > 0 ? gap : 0) + badgeWidth;
                
                // Check if adding this badge would exceed container width (accounting for counter badge)
                const wouldExceed = widthWithThisBadge + gap + estimatedCounterBadgeWidth > containerWidth;
                
                if (wouldExceed && i < badges.length) {
                    // This badge would cause overflow, stop here
                    break;
                }
                
                totalWidth = widthWithThisBadge;
                count++;
            }

            const nextCount = Math.max(0, Math.min(count, badges.length));

            // Update state if count changed
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
        }, [badgeArray.length]);

        const visibleBadges = badgeArray.slice(0, visibleCount);
        const remCount = badgeArray.length - visibleCount;
        const remBadges = badgeArray.slice(visibleCount);
        const remBadgesHasSelected = remBadges.some((badge) => badge.props.selected);

        return (
            <>
                <div>
                    <div
                        className={displayClassName}
                        ref={containerRef}
                        data-variant={variant}
                        data-size={size}
                        data-bordered={bordered ? 'true' : 'false'}
                        data-rounded={rounded ? 'true' : 'false'}
                        {...props}
                    >
                        {visibleBadges}
                        {remCount > 0 && (
                            <Popover
                                triggerType="click"
                                type="dropdown"
                                position="right bottom"
                                portal={true}
                                className={styles['sc-badge-list-popover']}
                                data-badge-list="true"
                                trigger={
                                    <Badge appearance={remBadgesHasSelected ? "solid" : "basic"} variant={variant} size={size} style={{ cursor: 'pointer' }}>
                                        <span>+ {remCount}</span>
                                        <Icon name="chevron-down" />
                                    </Badge>
                                }
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

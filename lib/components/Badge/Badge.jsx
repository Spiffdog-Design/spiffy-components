// src/components/Base/Badge/Badge.tsx
import { forwardRef } from 'react';
import { Icon } from '@/components';
import { cn } from '@/utilities';

import styles from './Badge.module.css';

/**
 * Badge component for labels, tags, and status indicators.
 *
 * @typedef {'base' | 'primary' | 'success' | 'warning' | 'alert'} BadgeVariant
 * @typedef {'solid' | 'outline' | 'basic'} BadgeAppearance
 * @typedef {'xs' | 'sm' | 'md'} BadgeSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display in the badge
 * @param {BadgeVariant} [props.variant='base'] - Color variant
 * @param {BadgeAppearance} [props.appearance='solid'] - Visual appearance
 * @param {BadgeSize} [props.size='md'] - Size variant
 * @param {boolean} [props.rounded=true] - Whether to apply rounded corners
 * @param {Function} [props.onClick] - Click handler - makes badge closable with X button
 * @param {*} [props.value] - Value passed to onClick handler
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.Ref<HTMLDivElement>} ref
 */
export const Badge = forwardRef(function Badge(
    {
        appearance = 'solid',
        value,
        children,
        className,
        onClick,
        variant = 'base',
        rounded = true,
        size = 'md',
        ...props
    },
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
            data-size={size}
            data-closable={onClick != null ? 'true' : 'false'}
            data-rounded={rounded ? 'true' : 'false'}
        >
            <div className={styles['sc-badge-content']}>{children}</div>
            {onClick != null && (
                <button className={styles['sc-badge-close-button']} onClick={handleClick(value)}>
                    <Icon name="x" size="sm" />
                </button>
            )}
        </div>
    );
});

Badge.displayName = 'Badge';

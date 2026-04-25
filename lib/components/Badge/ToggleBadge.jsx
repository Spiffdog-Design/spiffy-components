// src/components/Base/Badge/ToggleBadge.tsx
import { forwardRef } from 'react';
import { cn } from '@/utilities';

import styles from './Badge.module.css';

/**
 * ToggleBadge component - A badge that can be toggled between selected and unselected states.
 *
 * Automatically switches between `solid` and `outline` appearance based on selection state.
 * Perfect for filter chips and toggleable tags.
 *
 * @typedef {'base' | 'primary' | 'success' | 'warning' | 'alert'} ToggleBadgeVariant
 * @typedef {'xs' | 'sm' | 'md'} ToggleBadgeSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display in the badge
 * @param {boolean} props.selected - Controls selected state
 * @param {ToggleBadgeVariant} [props.variant='base'] - Color variant
 * @param {ToggleBadgeSize} [props.size='md'] - Size variant
 * @param {Function} props.onClick - Toggle handler
 * @param {*} [props.value] - Value passed to onClick handler
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.Ref<HTMLDivElement>} ref
 */
export const ToggleBadge = forwardRef(function Badge(
    { selected, value, children, className, onClick, variant = 'base', size = 'md', ...props },
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
            onClick={handleClick(value)}
            data-variant={variant}
            data-size={size}
            data-appearance={selected === false ? 'outline' : 'solid'}
        >
            <div className={styles['sc-badge-content']}>{children}</div>
        </div>
    );
});

ToggleBadge.displayName = 'ToggleBadge';

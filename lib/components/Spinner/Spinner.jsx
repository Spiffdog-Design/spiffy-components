import { forwardRef } from 'react';
import { cn } from '@/utilities';

import styles from './Spinner.module.css';

/**
 * Spinner component for indicating loading states.
 *
 * Uses token-based sizing consistent with the design system.
 *
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'} SpinnerSize
 *
 * @param {Object} props
 * @param {SpinnerSize} [props.size='md'] - Size of the spinner
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.CSSProperties} [props.style] - Additional inline styles
 * @param {React.Ref<HTMLSpanElement>} ref
 */
export const Spinner = forwardRef(function Spinner({ className, size = 'md', style, ...props }, ref) {
    return (
        <span
            {...props}
            ref={ref}
            className={cn(styles['sc-spinner'], styles[`sc-spinner-${size}`], className)}
            data-size={size}
            style={style}
        ></span>
    );
});

Spinner.displayName = 'Spinner';

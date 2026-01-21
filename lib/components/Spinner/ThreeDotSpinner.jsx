import { forwardRef } from 'react';
import { cn } from '@/utilities';

import styles from './ThreeDotSpinner.module.css';

/**
 * Three-dot spinner component for indicating loading states.
 * 
 * Uses token-based sizing consistent with the design system.
 * 
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'} SpinnerSize
 * 
 * @param {Object} props
 * @param {SpinnerSize} [props.size='md'] - Size of the spinner
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.Ref<HTMLDivElement>} ref
 */
export const ThreeDotSpinner = forwardRef(function ThreeDotSpinner({ size = 'md', className, ...props }, ref) {
    return (
        <div {...props} ref={ref} className={cn(styles['sc-three-dot-spinner'], styles[`sc-three-dot-spinner-${size}`], className)} data-size={size}>
            <div className={cn(styles['sc-three-dot'], styles['sc-three-dot-1'])}></div>
            <div className={cn(styles['sc-three-dot'], styles['sc-three-dot-2'])}></div>
            <div className={cn(styles['sc-three-dot'], styles['sc-three-dot-3'])}></div>
        </div>
    );
});

ThreeDotSpinner.displayName = 'ThreeDotSpinner';

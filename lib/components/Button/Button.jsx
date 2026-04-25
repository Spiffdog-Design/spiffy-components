import { forwardRef } from 'react';
import { Spinner, useTheme } from '@/components';
import { cn } from '@/utilities';

import styles from './Button.module.css';

/**
 * Button component - A customizable button that supports various appearances, variants, and states.
 * Implements ARIA-recommended behaviors for accessibility.
 *
 * @typedef {'basic' | 'outline' | 'solid'} ButtonAppearance
 * @typedef {'base' | 'primary' | 'success' | 'warning' | 'alert'} ButtonVariant
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'} ButtonSize
 *
 * @param {Object} props
 * @param {React.ReactNode | Function} props.children - Content to display in the button. Can be a function that receives props (including size) for dynamic rendering
 * @param {ButtonAppearance} [props.appearance='solid'] - Visual appearance style
 * @param {ButtonVariant} [props.variant='base'] - Color variant
 * @param {ButtonSize} [props.size='md'] - Size variant
 * @param {boolean} [props.busy=false] - If true, shows a busy state with spinner and disables interaction. Used for operations like API calls
 * @param {boolean} [props.disabled=false] - Disables the button, preventing user interaction
 * @param {boolean} [props.rounded=false] - Whether to apply rounded corners
 * @param {string} [props.type='button'] - Button type ('button', 'submit', 'reset')
 * @param {string} [props['aria-label']] - ARIA label for accessibility
 * @param {string} [props['aria-describedby']] - ARIA describedby for accessibility
 * @param {string} [props.className] - Additional CSS class names
 * @param {Function} [props.onClick] - Click handler
 * @param {React.Ref<HTMLButtonElement>} ref
 */
export const Button = forwardRef(function Button(props, ref) {
    const {
        busy,
        children,
        disabled,
        rounded,
        size,
        type = 'button',
        'aria-label': ariaLabel,
        'aria-describedby': ariaDescribedby,
        ...restProps
    } = props;
    const { themeName } = useTheme();

    // ARIA attributes for busy state and accessibility
    const ariaAttributes = {
        'aria-disabled': disabled || busy,
        'aria-busy': busy,
        ...(busy && !ariaLabel && !children && { 'aria-label': 'Loading' }),
        ...(ariaLabel && { 'aria-label': ariaLabel }),
        ...(ariaDescribedby && { 'aria-describedby': ariaDescribedby }),
    };

    return (
        <button
            {...restProps}
            {...ariaAttributes}
            ref={ref}
            type={type}
            className={cn(styles['sc-button'], restProps.className)}
            data-theme={themeName}
            data-appearance={props.appearance || 'solid'}
            data-variant={props.variant || 'base'}
            data-size={props.size || 'md'}
            data-rounded={props.rounded ? 'true' : 'false'}
            disabled={disabled || busy}
        >
            <div className={styles['sc-button-content']}>
                {typeof children === 'function' ? children(props) : children}
            </div>
            <div className={cn(styles['sc-button-busy'], { rounded: rounded, show: busy })}>
                <Spinner size={['xs', 'sm'].includes(size) ? 'sm' : 'md'} />
            </div>
        </button>
    );
});

Button.displayName = 'Button';

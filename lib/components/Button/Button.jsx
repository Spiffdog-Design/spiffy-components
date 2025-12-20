import { forwardRef } from 'react';
import { cn } from '@/utilities';

import { Spinner, useTheme } from '@/components';

import styles from './Button.module.css';

/**
 * A customizable button component that supports various appearances, variants, and states.
 * Implements ARIA-recommended behaviors for accessibility.
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
                <Spinner size={['xs', 'sm'].includes(size) ? 20 : 28} />
            </div>
        </button>
    );
});

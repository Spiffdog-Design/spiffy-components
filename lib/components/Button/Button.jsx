import { forwardRef } from 'react';
import * as Aria from '@ariakit/react';
import cn from 'classnames';

import { Spinner, useTheme } from '@/components';

import styles from './Button.module.css';

/**
 * A customizable button component that supports various appearances, variants, and states.
 */
export const Button = forwardRef(function Button(props, ref) {
    const { busy, children, disabled, rounded, size } = props;
    const { themeName } = useTheme();
    return (
        <Aria.Button
            {...props}
            ref={ref}
            className={getClass(styles, props)}
            data-theme={themeName}
            disabled={disabled || busy}
        >
            <div className={styles['sc-button-content']}>
                {typeof children === 'function' ? children(props) : children}
            </div>
            <div className={cn(styles['sc-button-busy'], { rounded: rounded, show: busy })}>
                <Spinner size={['xs', 'sm'].includes(size) ? 20 : 28} />
            </div>
        </Aria.Button>
    );
});

const getClass = (styles, props) => {
    const { appearance = 'solid', className, rounded, size = 'md', variant = 'base' } = props;
    return cn(className, styles['sc-button'], {
        rounded: rounded === true,
        [styles['sc-button-basic']]: appearance === 'basic',
        [styles['sc-button-outline']]: appearance === 'outline',
        [styles['sc-button-alert']]: variant === 'alert',
        [styles['sc-button-primary']]: variant === 'primary',
        [styles['sc-button-success']]: variant === 'success',
        [styles['sc-button-warning']]: variant === 'warning',
        [styles['sc-button-xs']]: size === 'xs',
        [styles['sc-button-sm']]: size === 'sm',
        [styles['sc-button-md']]: size === 'md',
        [styles['sc-button-lg']]: size === 'lg',
        [styles['sc-button-xl']]: size === 'xl',
        [styles['sc-button-x2']]: size === 'x2',
    });
};

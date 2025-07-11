import { forwardRef } from 'react';
import * as Aria from '@ariakit/react';
import cn from 'classnames';

import { Spinner, useTheme } from '@/components';

import * as styles from './Button.css';

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
            <div className={styles.content}>{typeof children === 'function' ? children(props) : children}</div>
            <div className={cn(styles.busy, { rounded: rounded, show: busy })}>
                <Spinner size={['xs', 'sm'].includes(size) ? 20 : 28} />
            </div>
        </Aria.Button>
    );
});

const getClass = (styles, props) => {
    const { appearance = 'solid', className, rounded, size = 'md', variant = 'base' } = props;
    return cn(className, styles.button, {
        rounded: rounded === true,
        [`${styles.basic}`]: appearance === 'basic',
        [`${styles.outline}`]: appearance === 'outline',
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
        [`${styles.xs}`]: size === 'xs',
        [`${styles.sm}`]: size === 'sm',
        [`${styles.md}`]: size === 'md',
        [`${styles.lg}`]: size === 'lg',
        [`${styles.xl}`]: size === 'xl',
        [`${styles.x2}`]: size === 'x2',
        [`${styles.x3}`]: size === 'x3',
    });
};

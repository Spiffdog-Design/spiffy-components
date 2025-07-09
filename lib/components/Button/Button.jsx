import { forwardRef } from 'react';
import * as Aria from '@ariakit/react';
import cn from 'classnames';

import { Spinner, useTheme } from '@/components';

import * as styles from './Button.css';

export const Button = forwardRef(function Button(
    { appearance = 'solid', busy, children, className, compact, disabled, rounded, variant = 'base', ...props },
    ref,
) {
    const { themeName } = useTheme();
    const displayClassName = cn(className, styles.button, {
        rounded: rounded,
        [`${styles.compact}`]: compact === true,
        [`${styles.basic}`]: appearance === 'basic',
        [`${styles.outline}`]: appearance === 'outline',
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
    });

    return (
        <Aria.Button
            {...props}
            ref={ref}
            className={displayClassName}
            data-theme={themeName}
            disabled={disabled || busy}
        >
            <div className={styles.content}>
                {typeof children === 'function' ? children({ iconSize: compact === true && '1.2rem' }) : children}
            </div>
            <div className={cn(styles.busy, { rounded: rounded, show: busy })}>
                <Spinner size={compact === true ? 20 : 28} />
            </div>
        </Aria.Button>
    );
});

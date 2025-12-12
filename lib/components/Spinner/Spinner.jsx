import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './Spinner.module.css';

export const Spinner = forwardRef(function Spinner({ className, size, style, ...props }, ref) {
    const pxSize = size != null && !isNaN(size) ? `${Math.min(size, 30)}px` : '48px';

    return (
        <span
            {...props}
            ref={ref}
            className={cn(styles['sc-spinner'])}
            style={{
                ...style,
                '--size': pxSize,
            }}
        ></span>
    );
});

import { forwardRef } from 'react';
import { cn } from '@/utilities';

import styles from './Label.module.css';

export const Label = forwardRef(function Label({ children, required = false, ...props }, ref) {
    return (
        <label
            {...props}
            ref={ref}
            className={cn(styles['sc-label'], { [styles['sc-label-required']]: required === true })}
        >
            {children}
        </label>
    );
});

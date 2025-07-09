import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './FormControl.css';

export const FormControl = forwardRef(function FormControl({ className, direction = 'horizontal', ...props }, ref) {
    return (
        <div
            ref={ref}
            className={cn(className, styles.control, {
                [`${styles.horizontal}`]: direction === 'horizontal',
                [`${styles.vertical}`]: direction === 'vertical',
            })}
            {...props}
        />
    );
});

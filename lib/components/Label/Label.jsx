import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './Label.css';

export const Label = forwardRef(function Label({ children, required = false, ...props }, ref) {
    return (
        <label {...props} ref={ref} className={cn(styles.root, { [`${styles.required}`]: required === true })}>
            {children}
        </label>
    );
});

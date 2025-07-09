// https://fontawesome.com/icons
import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './Icon.css';

export const Icon = forwardRef(function Icon({ className, name, set = 'solid', size = 20, style, ...props }, ref) {
    return (
        <i
            {...props}
            ref={ref}
            className={cn(`fa-${set} fa-${name} fa-fw`, styles.icon, className)}
            style={{ ...style, fontSize: size }}
        />
    );
});

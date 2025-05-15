// https://daypicker.dev/
import { forwardRef } from 'react';
import { DayPicker } from 'react-day-picker';
import cn from 'classnames';

import * as styles from './InlineDatePicker.css';
import 'react-day-picker/style.css';

export const InlineDatePicker = forwardRef(
    (
        { appearance = 'base', animate = true, mode = 'single', children, className, variant = 'base', ...props },
        ref,
    ) => {
        const displayClassName = cn(styles.picker, className, {
            [`${styles.alert}`]: variant === 'alert',
            [`${styles.base}`]: variant === 'base',
            [`${styles.primary}`]: variant === 'primary',
            [`${styles.success}`]: variant === 'success',
            [`${styles.warning}`]: variant === 'warning',
        });

        return <DayPicker animate={animate} mode={mode} {...props} />;
    },
);
InlineDatePicker.displayName = 'InlineDatePicker';

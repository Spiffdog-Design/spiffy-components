import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './ThreeDotSpinner.module.css';

export const ThreeDotSpinner = forwardRef(function ThreeDotSpinner(props, ref) {
    return (
        <div {...props} ref={ref} className={styles['sc-three-dot-spinner']}>
            <div className={cn(styles['sc-three-dot'], styles['sc-three-dot-1'])}></div>
            <div className={cn(styles['sc-three-dot'], styles['sc-three-dot-2'])}></div>
            <div className={cn(styles['sc-three-dot'], styles['sc-three-dot-3'])}></div>
        </div>
    );
});

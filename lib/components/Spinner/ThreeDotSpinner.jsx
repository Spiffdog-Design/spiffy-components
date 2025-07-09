import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './ThreeDotSpinner.css';

export const ThreeDotSpinner = forwardRef(function ThreeDotSpinner(props, ref) {
    return (
        <div {...props} ref={ref} class={styles.spinner}>
            <div class={cn(styles.threedot, styles.threedot1)}></div>
            <div class={cn(styles.threedot, styles.threedot2)}></div>
            <div class={cn(styles.threedot, styles.threedot3)}></div>
        </div>
    );
});

import * as styles from './ThreeDotSpinner.css';
import cn from 'classnames';

export const ThreeDotSpinner = () => {
    return (
        <div class={styles.spinner}>
            <div class={cn(styles.threedot, styles.threedot1)}></div>
            <div class={cn(styles.threedot, styles.threedot2)}></div>
            <div class={cn(styles.threedot, styles.threedot3)}></div>
        </div>
    );
};

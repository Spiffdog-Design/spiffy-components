import * as styles from './Label.css';
import cn from 'classnames';

export const Label = ({ children, required = false, ...props }) => {
    return (
        <label className={cn(styles.root, { [`${styles.required}`]: required === true })} {...props}>
            {children}
        </label>
    );
};
Label.displayName = 'Label';

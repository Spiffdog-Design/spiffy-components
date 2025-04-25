import * as styles from './BaseLabel.css';
import cn from 'classnames';

export const BaseLabel = ({ children, required = false, ...props }) => {
    return (
        <label className={cn(styles.root, { [`${styles.required}`]: required === true })} {...props}>
            {children}
        </label>
    );
};
BaseLabel.displayName = 'BaseLabel';

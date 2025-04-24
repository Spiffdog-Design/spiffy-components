import * as styles from './Label.css';
import cn from 'classnames';

export const Label = ({ children, required = false, ...props }) => {
    return (
        <div className={cn(styles.root, { [`${styles.required}`]: required === true })} {...props}>
            {children}
        </div>
    );
};
Label.displayName = 'Label';

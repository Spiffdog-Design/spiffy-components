// src/components/Button/Button.tsx
import * as styles from './Button.css';

export const Button = ({ ...props }) => {
    return <button className={styles.button} {...props} />;
};

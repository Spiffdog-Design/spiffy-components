import { AppRoot } from '@/components';

import styles from './ThemeWrapper.module.css';
import './ThemeWrapper-SB.css';

const ThemeWrapper = ({ children, title, actions }) => (
    <div className={styles.themeWrapper}>
        {(title || actions) && (
            <div className={styles.themeWrapperHeader}>
                {title && <h2 className={styles.themeWrapperTitle}>{title}</h2>}
                {actions && <div className={styles.themeWrapperActions}>{actions}</div>}
            </div>
        )}
        <AppRoot>{children}</AppRoot>
    </div>
);

export default ThemeWrapper;

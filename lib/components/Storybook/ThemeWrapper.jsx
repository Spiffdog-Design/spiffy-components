import { AppRoot } from '@/components';

import styles from './ThemeWrapper.module.css';
import './ThemeWrapper-SB.css';

const ThemeWrapper = ({ children }) => (
    <div className={styles.themeWrapper}>
        <AppRoot>{children}</AppRoot>
    </div>
);

export default ThemeWrapper;

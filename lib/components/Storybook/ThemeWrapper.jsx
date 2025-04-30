import React, { useRef } from 'react';

import { AppRoot, Button, FaIcon, ThemeSwitcher } from '@/components';

import * as styles from './ThemeWrapper.css.js';
import './ThemeWrapper-SB.css';

const ThemeWrapper = ({ children, title }) => {
    const winRef = useRef(window);
    const handleReload = () => winRef.current?.location.reload();

    return (
        <AppRoot>
            <div className={styles.themeWrapper}>
                <div className={styles.line}>
                    <h3 className="title">{title}</h3>
                    <div className={styles.actions}>
                        <ThemeSwitcher />
                        <Button appearance="basic" variant="base" rounded={true} onClick={handleReload}>
                            <FaIcon name="rotate" />
                        </Button>
                    </div>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </AppRoot>
    );
};

export default ThemeWrapper;

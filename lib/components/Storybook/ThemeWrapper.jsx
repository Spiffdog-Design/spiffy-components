import React, { forwardRef, useRef } from 'react';

import { AppRoot, Button, Icon, ThemeSwitcher } from '@/components';

import * as styles from './ThemeWrapper.css.js';
import './ThemeWrapper-SB.css';

const ThemeWrapper = forwardRef(function ThemeWrapper({ actions, children, title }, ref) {
    const winRef = useRef(window);
    const handleReload = () => winRef.current?.location.reload();

    return (
        <AppRoot>
            <div ref={ref} className={styles.themeWrapper}>
                <div className={styles.line}>
                    <h3 className="title">{title}</h3>
                    <div className={styles.actions}>
                        {actions}
                        <ThemeSwitcher />
                        <Button appearance="basic" variant="base" rounded={true} onClick={handleReload}>
                            <Icon name="rotate" />
                        </Button>
                    </div>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </AppRoot>
    );
});

export default ThemeWrapper;

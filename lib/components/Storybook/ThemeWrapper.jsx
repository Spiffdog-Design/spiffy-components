import React, { useRef } from 'react';
import { ArrowsClockwise } from '@phosphor-icons/react';

import { AppRoot, Button, Icon, ThemeSwitcher } from '@/components';

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
                        <Button appearance="basic" rounded={true} onClick={handleReload}>
                            <Icon>
                                <ArrowsClockwise />
                            </Icon>
                        </Button>
                    </div>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </AppRoot>
    );
};

export default ThemeWrapper;

import React from 'react';
import { ArrowsClockwise } from '@phosphor-icons/react';

// import { AppRoot, Button, Icon, ThemeSwitcher } from '@/components';
import { AppRoot, Button } from '@/components';

import * as styles from './ThemeWrapper.css.js';
import './ThemeWrapper-SB.css';

const ThemeWrapper = ({ children, title, ...props }) => {
    return (
        <AppRoot>
            <div className={styles.themeWrapper}>
                <div className={styles.line}>
                    <h3 className="title">{title}</h3>
                    <div>
                        <ThemeSwitcher />
                        <Button appearance="basic" rounded={true} onClick={() => _this.location.reload()}>
                            {/* <Icon> */}
                            <ArrowsClockwise />
                            {/* </Icon> */}
                        </Button>
                    </div>
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </AppRoot>
    );
};

export default ThemeWrapper;

'use client';

import { useState } from 'react';
import { Button, Icon, defaultTheme } from '/lib';
import { useLocalStorage } from '@spiffdog/spiffy-hooks';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useLocalStorage('theme');
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        setTheme(newMode == 'light' ? defaultTheme.light : defaultTheme.dark);
    };

    return (
        <Button appearance="basic" rounded size="small" variant="primary" onClick={toggleMode}>
            {mode === 'light' ? <Icon.Sun size={20} weight="bold" /> : <Icon.Moon size={20} weight="bold" />}
        </Button>
    );
};

export default ThemeSwitcher;

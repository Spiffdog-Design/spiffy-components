'use client';

import { useEffect, useState } from 'react';
import { Button, Icons, defaultTheme } from '/lib';

const ThemeSwitcher = () => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        const theme = newMode == 'light' ? defaultTheme.light : defaultTheme.dark;
        setMode(newMode);
        localStorage.setItem('theme', JSON.stringify(theme));
        window.dispatchEvent(new Event('theme-changed', { bubbles: true }));
    };

    return (
        <Button appearance="basic" rounded size="small" variant="primary" onClick={toggleMode}>
            {mode === 'light' ? <Icons.Sun size={20} weight="bold" /> : <Icons.Moon size={20} weight="bold" />}
        </Button>
    );
};

export default ThemeSwitcher;

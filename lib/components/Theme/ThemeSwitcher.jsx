'use client';

import { useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Button, defaultTheme } from '@/components';

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
            {mode === 'light' ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
        </Button>
    );
};
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;

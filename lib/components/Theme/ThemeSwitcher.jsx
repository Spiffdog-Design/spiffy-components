'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons
import { useLocalStorage } from '@spiffdog/spiffy-hooks';

import { Button, defaultTheme } from '@/components';

const ThemeSwitcher = () => {
    const [mode, setMode] = useState('light');
    const [_, setTheme] = useLocalStorage('theme', defaultTheme.light);

    const toggleMode = () => {
        setMode((m) => (m === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        setTheme(mode == 'light' ? defaultTheme.light : defaultTheme.dark);
    }, [mode]);

    return (
        <Button appearance="basic" rounded size="sm" variant="primary" onClick={toggleMode}>
            {mode === 'light' ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
        </Button>
    );
};
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;

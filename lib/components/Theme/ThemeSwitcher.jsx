'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons
import { useLocalStorage } from '@spiffdog/spiffy-hooks';

import { Button, Icon, defaultTheme } from '@/components';

const ThemeSwitcher = () => {
    const [mode, setMode] = useState('light');
    const [_, setTheme] = useLocalStorage('theme', defaultTheme.light);

    const toggleMode = () => {
        console.log('plop');

        setMode((m) => (m === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        setTheme(mode == 'light' ? defaultTheme.light : defaultTheme.dark);
    }, [mode]);

    return (
        <Button appearance="basic" rounded size="sm" variant="primary" onClick={toggleMode}>
            <Icon>{mode === 'light' ? <Sun weight="bold" /> : <Moon weight="bold" />}</Icon>
        </Button>
    );
};
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;

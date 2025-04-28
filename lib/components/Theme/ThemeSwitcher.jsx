import { forwardRef, useEffect } from 'react';
import { Sun, Moon } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Button, Icon, useTheme } from '@/components';

const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light');
const ThemeSwitcher = forwardRef(({ variant = 'base' }, ref) => {
    const { themeName, setThemeName } = useTheme();

    const toggleMode = () => {
        var t = themeName === 'light' ? 'dark' : 'light';
        setThemeName(t);
    };

    useEffect(() => {
        setThemeName(themeName ?? getSystemTheme());
    }, []);

    return (
        <Button ref={ref} appearance="basic" rounded={true} size="sm" variant={variant} onClick={toggleMode}>
            <Icon>{themeName === 'light' ? <Sun weight="bold" /> : <Moon weight="bold" />}</Icon>
        </Button>
    );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;

import { forwardRef, useEffect } from 'react';

import { Button, FaIcon, useTheme } from '@/components';

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
            <FaIcon set="regular" name={themeName === 'light' ? 'sun' : 'moon'} />
        </Button>
    );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;

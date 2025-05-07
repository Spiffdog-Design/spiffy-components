import { forwardRef, useEffect } from 'react';

import { Button, FaIcon, Tooltip, useTheme } from '@/components';

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
        <Tooltip
            trigger={
                <Button ref={ref} appearance="basic" rounded={true} size="sm" variant={variant} onClick={toggleMode}>
                    {themeName === 'light' ? (
                        <FaIcon set="regular" name="lightbulb" />
                    ) : (
                        <FaIcon set="solid" name="moon" />
                    )}
                </Button>
            }
        >
            <span>Switch to {themeName === 'light' ? 'dark' : 'light'} theme</span>
        </Tooltip>
    );
});
ThemeSwitcher.displayName = 'ThemeSwitcher';

export default ThemeSwitcher;

import { forwardRef, useEffect, useState } from 'react';

import { Button, Icon, Popover, useTheme } from '@/components';

const getSystemTheme = () => (window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light');
export const ThemeSwitcher = forwardRef(function ThemeSwitcher({ variant = 'base' }, ref) {
    const { themeName, setThemeName } = useTheme();

    const toggleMode = () => {
        var t = themeName === 'light' ? 'dark' : 'light';
        setThemeName(t);
    };

    useEffect(() => {
        setThemeName(themeName ?? getSystemTheme());
    }, []);

    return (
        <Popover
            trigger={({ events }) => {
                return (
                    <Button
                        {...events}
                        ref={ref}
                        mode="hover"
                        appearance="basic"
                        rounded={true}
                        size="sm"
                        variant={variant}
                        onClick={toggleMode}
                    >
                        {themeName === 'light' ? (
                            <Icon set="regular" name="lightbulb" />
                        ) : (
                            <Icon set="solid" name="moon" />
                        )}
                    </Button>
                );
            }}
        >
            <span>Switch to {themeName === 'light' ? 'dark' : 'light'} theme</span>
        </Popover>
    );
});

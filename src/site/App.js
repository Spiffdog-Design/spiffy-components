import React from 'react';
import { Button, ThemeProvider } from '../components';
import './App.css';

const newTheme = {
    disabled: {
        opacity: 0.85,
    },
};

export const App = () => {
    return (
        <ThemeProvider theme={newTheme}>
            <Button size="md">Plop</Button>
        </ThemeProvider>
    );
};

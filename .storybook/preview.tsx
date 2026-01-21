import type { Preview } from '@storybook/react-vite';
import ThemeWrapper from '../lib/components/Storybook/ThemeWrapper';
import React from 'react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeWrapper>
                <Story />
            </ThemeWrapper>
        ),
    ],
    tags: ['autodocs'],
};

export default preview;

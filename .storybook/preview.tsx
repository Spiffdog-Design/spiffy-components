import type { Preview } from '@storybook/react-vite';
import React from 'react';
import ThemeWrapper from '../lib/components/Storybook/ThemeWrapper';

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

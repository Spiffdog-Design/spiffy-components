import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Badge } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Badges/Standard Badge',
    component: Badge,
};

export default meta;

export const ReadOnlyBadge = {
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
    args: {
        appearance: 'solid',
        variant: 'base',
    },

    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                <Badge {...args}>My Read Only Badge</Badge>
            </div>
        </ThemeWrapper>
    ),
};

export const CloseBadge = {
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
    args: {
        appearance: 'solid',
        variant: 'base',
    },

    render: (args) => {
        const handleClick = (id) => {
            action('on close triggered')(id);
        };
        return (
            <ThemeWrapper>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                    <Badge value="badge-id" onClick={handleClick} {...args}>
                        My Close Badge
                    </Badge>
                </div>
            </ThemeWrapper>
        );
    },
};

import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Badge, ToggleBadge } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Badge',
    component: Badge,
};

export default meta;

export const BadgeDemo = {
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        mode: {
            options: ['none', 'close', 'toggle'],
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
        mode: 'close',
    },

    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                <Badge label="My Cool Badge" value={42} mode="close" onClick={action('clicked')} {...args} />
            </div>
        </ThemeWrapper>
    ),
};

export const ToggleBadgeDemo = {
    argTypes: {
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
    args: {
        variant: 'base',
    },

    render: () => {
        const [toggled, setToggled] = useState(true);
        const handleClick = (id) => {
            setToggled((t) => !t);
            action('clicked')(id);
        };
        return (
            <ThemeWrapper>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                    <ToggleBadge label="My Cool Badge" enabled={toggled} value={42} onClick={handleClick} />
                </div>
            </ThemeWrapper>
        );
    },
};

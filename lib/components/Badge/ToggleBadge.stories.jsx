import { useState } from 'react';
import { action } from 'storybook/actions';

import { ToggleBadge } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Badges/Toggle Badge',
    component: ToggleBadge,
};

export default meta;

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

    render: (args) => {
        const [toggled, setToggled] = useState(false);
        const handleClick = (value) => {
            setToggled((t) => !t);
            action('toggled')(value);
        };
        return (
            <ThemeWrapper>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                    <ToggleBadge value="toggle-badge-id" selected={toggled} onClick={handleClick} {...args}>
                        My Toggle Badge
                    </ToggleBadge>
                </div>
            </ThemeWrapper>
        );
    },
};

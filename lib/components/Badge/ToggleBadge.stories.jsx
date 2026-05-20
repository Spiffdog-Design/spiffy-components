import { useState } from 'react';
import { action } from 'storybook/actions';

import { ToggleBadge } from '@/components';

const meta = {
    title: 'Base/Badges/Toggle Badge',
    component: ToggleBadge,
    parameters: {
        docs: {
            description: {
                component: `
A badge that can be toggled between selected and unselected states.

Automatically switches between \`solid\` and \`outline\` appearance based on selection state. Perfect for filter chips and toggleable tags.

## Props

- **children**: Content to display in the badge
- **selected**: Controls selected state (required)
- **onClick**: Toggle handler (required)
- **variant**: Color variant (\`'base' | 'primary' | 'success' | 'warning' | 'alert'\`) - Default: \`'base'\`
- **size**: Size variant (\`'xs' | 'sm' | 'md'\`) - Default: \`'md'\`
- **value**: Value passed to onClick handler
- **className**: Additional CSS class names
                `.trim(),
            },
        },
    },
};

export default meta;

export const ToggleBadgeDemo = {
    argTypes: {
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        size: {
            options: ['xs', 'sm', 'md'],
            control: { type: 'radio' },
        },
    },
    args: {
        variant: 'base',
        size: 'md',
    },

    render: (args) => {
        const [toggled, setToggled] = useState(false);
        const handleClick = (value) => {
            setToggled((t) => !t);
            action('toggled')(value);
        };
        return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                <ToggleBadge value="toggle-badge-id" selected={toggled} onClick={handleClick} {...args}>
                    My Toggle Badge
                </ToggleBadge>
            </div>
        );
    },
};

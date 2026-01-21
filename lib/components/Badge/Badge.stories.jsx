import { action } from 'storybook/actions';

import { Badge } from '@/components';

const meta = {
    title: 'Base/Badges/Standard Badge',
    component: Badge,
    parameters: {
        docs: {
            description: {
                component: `
Badge component for labels, tags, and status indicators.

## Props

- **children**: Content to display in the badge
- **variant**: Color variant (\`'base' | 'primary' | 'success' | 'warning' | 'alert'\`) - Default: \`'base'\`
- **appearance**: Visual appearance (\`'solid' | 'outline' | 'basic'\`) - Default: \`'solid'\`
- **size**: Size variant (\`'xs' | 'sm' | 'md'\`) - Default: \`'md'\`
- **rounded**: Whether to apply rounded corners - Default: \`true\`
- **onClick**: Click handler - makes badge closable with X button
- **value**: Value passed to onClick handler
                `.trim(),
            },
        },
    },
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
        rounded: {
            control: { type: 'boolean' },
        },
    },
    args: {
        appearance: 'solid',
        variant: 'base',
        rounded: true,
    },

    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
            <Badge {...args}>My Read Only Badge</Badge>
        </div>
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
        rounded: {
            control: { type: 'boolean' },
        },
    },
    args: {
        appearance: 'solid',
        variant: 'base',
        rounded: true,
    },

    render: (args) => {
        const handleClick = (value) => {
            action('on close triggered')(value);
        };
        return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                <Badge value="badge-id" onClick={handleClick} {...args}>
                    My Close Badge
                </Badge>
            </div>
        );
    },
};

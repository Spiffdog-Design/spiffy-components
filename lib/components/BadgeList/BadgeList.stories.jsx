import { useState } from 'react';
import { action } from 'storybook/actions';
import { Badge, BadgeList, Button, ToggleBadge } from '@/components';
import { demoListData } from '@/components/Storybook/demoData';

const meta = {
    title: 'Base/Badges/Badge List',
    component: BadgeList,
    parameters: {
        docs: {
            description: {
                component: `
A container for displaying multiple badges with overflow handling.

Automatically handles overflow by showing a "+N" popover when badges don't fit. Uses ResizeObserver to dynamically calculate visible badge count.

## Props

- **children**: Badge components to display
- **variant**: Color variant (\`'base' | 'primary' | 'success' | 'warning' | 'alert'\`) - Default: \`'base'\`
- **size**: Size variant (\`'xs' | 'sm' | 'md'\`) - Default: \`'md'\`
- **bordered**: Whether to show border around the list - Default: \`false\`
- **rounded**: Whether to apply rounded corners - Default: \`false\`
- **onClick**: Click handler
- **className**: Additional CSS class names
                `.trim(),
            },
        },
    },
};

export default meta;

export const ReadOnlyBadgeList = {
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        bordered: {
            control: { type: 'boolean' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
    args: {
        appearance: undefined,
        bordered: false,
        rounded: false,
        variant: 'base',
    },

    render: (args) => {
        const [data] = useState(demoListData);
        const { bordered, rounded, variant, appearance } = args;

        return (
            <BadgeList bordered={bordered} rounded={rounded} variant={variant}>
                {data.map((item) => {
                    return (
                        <Badge key={item.id} value={item.id} appearance={appearance} variant={variant}>
                            {item.label}
                        </Badge>
                    );
                })}
            </BadgeList>
        );
    },
};

export const CloseBadgeList = {
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        bordered: {
            control: { type: 'boolean' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
    args: {
        appearance: undefined,
        bordered: false,
        rounded: false,
        variant: 'base',
    },

    render: (args) => {
        const [data, setData] = useState(demoListData);
        const { bordered, rounded, variant, appearance } = args;

        const handleBadgeClose = (value) => {
            console.log(value, data);

            setData((items) => items.filter((i) => i.id !== value));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button appearance="basic" onClick={() => setData(demoListData)}>
                        Reset
                    </Button>
                </div>
                <BadgeList bordered={bordered} rounded={rounded} variant={variant}>
                    {data.map((item) => {
                        return (
                            <Badge key={item.id} value={item.id} onClick={handleBadgeClose} appearance={appearance} variant={variant}>
                                {item.label}
                            </Badge>
                        );
                    })}
                </BadgeList>
            </div>
        );
    },
};

export const ToggleBadgeList = {
    args: {
        bordered: false,
        rounded: false,
        variant: 'base',
    },
    argTypes: {
        bordered: {
            control: { type: 'boolean' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },

    render: (args) => {
        const [data, setData] = useState(demoListData);

        const handleClick = (value) => {
            const newData = data.map((d) => ({ ...d, selected: d.id === value ? !d.selected : d.selected }));
            setData(newData);
            action('selected')(newData.filter((d) => d.selected));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button appearance="basic" onClick={() => setData(demoListData)}>
                        Reset
                    </Button>
                </div>
                <BadgeList {...args}>
                    {data.map((item) => {
                        return (
                            <ToggleBadge key={item.id} value={item.id} selected={item.selected} onClick={handleClick}>
                                {item.label}
                            </ToggleBadge>
                        );
                    })}
                </BadgeList>
            </div>
        );
    },
};

export const ShortBadgeList = {
    args: {
        bordered: false,
        rounded: false,
        variant: 'base',
    },
    argTypes: {
        bordered: {
            control: { type: 'boolean' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },

    render: (args) => {
        const [data, setData] = useState(demoListData.slice(0, 6));

        const handleClick = (value) => {
            const newData = data.map((d) => ({ ...d, selected: d.id === value ? !d.selected : d.selected }));
            setData(newData);
            action('selected')(newData.filter((d) => d.selected));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button appearance="basic" onClick={() => setData(demoListData)}>
                        Reset
                    </Button>
                </div>
                <BadgeList {...args}>
                    {data.map((item) => {
                        return (
                            <ToggleBadge key={item.id} value={item.id} selected={item.selected} onClick={handleClick}>
                                {item.label}
                            </ToggleBadge>
                        );
                    })}
                </BadgeList>
            </div>
        );
    },
};

import { useState } from 'react';
import { action } from 'storybook/actions';
import { Badge, BadgeList, Button, ToggleBadge } from '@/components';

import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { demoListData } from '@/components/Storybook/demoData';

const meta = {
    title: 'Base/Badges/Badge List',
    component: BadgeList,
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

        return (
            <ThemeWrapper>
                <BadgeList {...args}>
                    {data.map((item) => {
                        return (
                            <Badge key={item.id} value={item.id} {...args}>
                                {item.label}
                            </Badge>
                        );
                    })}
                </BadgeList>
            </ThemeWrapper>
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

        const handleBadgeClose = (value) => {
            console.log(value, data);

            setData((items) => items.filter((i) => i.id !== value));
        };

        return (
            <ThemeWrapper
                actions={
                    <Button appearance="basic" onClick={() => setData(demoListData)}>
                        Reset
                    </Button>
                }
            >
                <BadgeList {...args}>
                    {data.map((item) => {
                        return (
                            <Badge key={item.id} value={item.id} onClick={handleBadgeClose} {...args}>
                                {item.label}
                            </Badge>
                        );
                    })}
                </BadgeList>
            </ThemeWrapper>
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
            <ThemeWrapper
                actions={
                    <Button appearance="basic" onClick={() => setData(demoListData)}>
                        Reset
                    </Button>
                }
            >
                <BadgeList {...args}>
                    {data.map((item) => {
                        return (
                            <ToggleBadge key={item.id} value={item.id} selected={item.selected} onClick={handleClick}>
                                {item.label}
                            </ToggleBadge>
                        );
                    })}
                </BadgeList>
            </ThemeWrapper>
        );
    },
};

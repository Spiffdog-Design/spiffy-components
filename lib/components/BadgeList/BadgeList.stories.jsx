import { useEffect, useState } from 'react';
import { Badge, BadgeList, ToggleBadge } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/BadgeList',
    component: BadgeList,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        bordered: {
            control: { type: 'boolean' },
        },
        mode: {
            options: ['none', 'close', 'toggle'],
            control: { type: 'radio' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        appearance: undefined,
        bordered: false,
        mode: 'none',
        rounded: false,
        variant: 'base',
    },

    render: (args) => {
        const TAGS = Array.from({ length: 50 }).map((_, i, a) => ({
            id: i,
            label: `v1.2.0-beta.${i + 1}`,
            enabled: false,
        }));
        const [data, setData] = useState(TAGS);

        const handleClick = (items) => {
            console.log(items);
            setData(items);
        };

        return (
            <ThemeWrapper>
                <BadgeList onClick={handleClick} {...args}>
                    {data.map((item) => {
                        return args.mode === 'toggle' ? (
                            <ToggleBadge key={item.id} value={item.id} label={item.label} enabled={item.enabled} />
                        ) : (
                            <Badge key={item.id} value={item.id} label={item.label} {...args} />
                        );
                    })}
                </BadgeList>
            </ThemeWrapper>
        );
    },
};

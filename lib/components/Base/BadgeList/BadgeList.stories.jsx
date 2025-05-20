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
        const [data, setData] = useState(demoData.map((d) => ({ ...d, enabled: false })));

        const handleClose = (id) => setData(data.filter((d) => d.CountryID != id));
        const handleToggle = (id) =>
            setData(data.map((d) => ({ ...d, enabled: d.CountryID === id ? !d.enabled : d.enabled })));

        return (
            <ThemeWrapper>
                <BadgeList onClick={args.mode === 'close' ? handleClose : handleToggle} {...args}>
                    {data.map((item) => {
                        return args.mode === 'toggle' ? (
                            <ToggleBadge
                                key={item.CountryID}
                                value={item.CountryID}
                                label={item.Name}
                                enabled={item.enabled}
                            />
                        ) : (
                            <Badge key={item.CountryID} value={item.CountryID} label={item.Name} {...args} />
                        );
                    })}
                </BadgeList>
            </ThemeWrapper>
        );
    },
};

const demoData = [
    {
        CountryID: 58,
        Name: 'Czech Republic',
    },
    {
        CountryID: 66,
        Name: 'Dominican Republic',
    },
    {
        CountryID: 75,
        Name: 'Ecuador',
    },
    {
        CountryID: 67,
        Name: 'Egypt',
    },
    {
        CountryID: 177,
        Name: 'El Salvador',
    },
    {
        CountryID: 33,
        Name: 'Iceland',
    },
    {
        CountryID: 29,
        Name: 'India',
    },
    {
        CountryID: 78,
        Name: 'Panama',
    },
    {
        CountryID: 46,
        Name: 'Thailand',
    },
    {
        CountryID: 21,
        Name: 'United States',
    },
    {
        CountryID: 50,
        Name: 'Zimbabwe',
    },
];

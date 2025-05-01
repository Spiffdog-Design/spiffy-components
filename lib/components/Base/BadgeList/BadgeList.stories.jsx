import { useState } from 'react';
import { BadgeList, createDataList } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/BadgeList',
    component: BadgeList,
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
};

export default meta;

export const Demo = {
    args: {
        appearance: 'base',
        rounded: false,
        variant: 'base',
    },

    render: (args) => {
        const [data, setData] = useState(createDataList(demoData, 'CountryID', 'Name'));

        const handleClose = (id) => {
            setData((data) => data.filter((d) => d.id != id));
        };

        return (
            <ThemeWrapper>
                <BadgeList data={data} onClose={handleClose} {...args} />
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

import { useState } from 'react';
import { BadgeToggleList, createDataList } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/BadgeToggleList',
    component: BadgeToggleList,
    argTypes: {
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        bordered: {
            control: { type: 'boolean' },
        },
        maxLength: {
            control: { type: 'number' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        bordered: false,
        maxLength: 3,
        rounded: false,
        variant: 'base',
    },
    render: (args) => {
        const handleChange = (ids) => {
            console.log(ids);
        };

        return (
            <ThemeWrapper>
                <BadgeToggleList
                    data={createDataList(demoData, 'CountryID', 'Name')}
                    onChange={handleChange}
                    {...args}
                />
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

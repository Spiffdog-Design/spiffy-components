import { action } from '@storybook/addon-actions';

import { Checkbox, FormControl, Label } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useEffect, useId, useState } from 'react';

const meta = {
    title: 'Base/Form/Checkbox',
    component: Checkbox,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        checked: {
            control: { type: 'boolean' },
        },
        compact: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Default = {
    args: {
        appearance: 'solid',
        checked: false,
        compact: false,
        disabled: false,
        variant: 'base',
    },
    render: ({ checked, ...args }) => {
        const [isChecked, setIsChecked] = useState(checked);

        const handleCheck = (arg) => {
            setIsChecked(arg);
            action(arg);
        };

        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return (
            <ThemeWrapper>
                <Checkbox onChange={handleCheck} checked={isChecked} {...args} />
            </ThemeWrapper>
        );
    },
};

export const HorizontalLabel = {
    args: {
        appearance: 'solid',
        checked: false,
        compact: false,
        disabled: false,
        variant: 'base',
    },
    render: ({ checked, ...args }) => {
        const id = useId();
        const [isChecked, setIsChecked] = useState(checked);

        const handleCheck = (arg) => {
            setIsChecked(arg);
            action(arg);
        };

        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return (
            <ThemeWrapper>
                <FormControl direction="horizontal">
                    <Label htmlFor={id}>Checkbox 1</Label>
                    <Checkbox id={id} onChange={handleCheck} checked={isChecked} {...args} />
                </FormControl>
            </ThemeWrapper>
        );
    },
};

export const VerticalLabel = {
    args: {
        appearance: 'solid',
        checked: false,
        compact: false,
        disabled: false,
        variant: 'base',
    },
    render: ({ checked, ...args }) => {
        const id = useId();
        const [isChecked, setIsChecked] = useState(checked);

        const handleCheck = (arg) => {
            setIsChecked(arg);
            action(arg);
        };

        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return (
            <ThemeWrapper>
                <FormControl direction="vertical">
                    <Label htmlFor={id}>Checkbox 1</Label>
                    <Checkbox id={id} onChange={handleCheck} checked={isChecked} {...args} />
                </FormControl>
            </ThemeWrapper>
        );
    },
};

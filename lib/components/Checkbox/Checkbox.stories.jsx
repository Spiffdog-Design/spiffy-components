import { action } from '@storybook/addon-actions';

import { Checkbox, FormControl, Label } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useEffect, useState } from 'react';

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

export const WithLabel = {
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
                <FormControl>
                    {(id) => (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 8,
                            }}
                        >
                            <Label htmlFor={id}>Checkbox 1</Label>
                            <Checkbox id={id} onChange={handleCheck} checked={isChecked} {...args} />
                        </div>
                    )}
                </FormControl>
            </ThemeWrapper>
        );
    },
};

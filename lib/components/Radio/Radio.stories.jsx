import { action } from 'storybook/actions';

import { FormControl, Label, Radio } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useId, useState } from 'react';

const meta = {
    title: 'Base/Form/Radio',
    component: Radio,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        compact: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Default = {
    args: {
        appearance: 'solid',
        compact: false,
        disabled: false,
        variant: 'base',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false);

        const handleCheck = (arg) => {
            setChecked(arg);
            action(arg);
        };

        return (
            <ThemeWrapper>
                <Radio onChange={handleCheck} checked={checked} {...args} />
            </ThemeWrapper>
        );
    },
};

export const HorizontalLabel = {
    args: {
        appearance: 'solid',
        compact: false,
        disabled: false,
        variant: 'base',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false);
        const id = useId();

        const handleCheck = (arg) => {
            setChecked(arg);
            action(arg);
        };

        return (
            <ThemeWrapper>
                <FormControl direction="horizontal">
                    <Label htmlFor={id}>Checkbox 1</Label>
                    <Radio id={id} onChange={handleCheck} checked={checked} {...args} />
                </FormControl>
            </ThemeWrapper>
        );
    },
};

export const VerticalLabel = {
    args: {
        appearance: 'solid',
        compact: false,
        disabled: false,
        variant: 'base',
    },
    render: (args) => {
        const [checked, setChecked] = useState(false);
        const id = useId();

        const handleCheck = (arg) => {
            setChecked(arg);
            action(arg);
        };

        return (
            <ThemeWrapper>
                <FormControl direction="vertical">
                    <Label htmlFor={id}>Checkbox 1</Label>
                    <Radio id={id} onChange={handleCheck} checked={checked} {...args} />
                </FormControl>
            </ThemeWrapper>
        );
    },
};

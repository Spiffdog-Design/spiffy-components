import { Input } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useState } from 'react';

const meta = {
    title: 'Form/Input',
    component: Input,
    argTypes: {
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        layout: {
            options: ['horizontal', 'vertical', 'unset'],
            control: { type: 'radio' },
        },
        required: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        helperText: 'Fill out this form',
        label: 'This is a label',
        layout: 'unset',
        placeholder: 'Enter text in the field',
        required: false,
    },

    render: (args) => {
        const [text, setText] = useState('');
        const handleChange = (v) => setText(v);

        return (
            <ThemeWrapper>
                <Input onChange={handleChange} value={text} {...args}></Input>
            </ThemeWrapper>
        );
    },
};

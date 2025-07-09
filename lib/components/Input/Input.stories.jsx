import { useState } from 'react';

import { Button, Icon, Input } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Form/Input',
    component: Input,
    argTypes: {
        appearance: {
            options: ['default', 'transparent'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Basic = {
    args: {
        appearance: 'default',
        variant: 'base',
    },

    render: (args) => {
        const [text, setText] = useState('');
        const handleChange = (v) => setText(v);

        return (
            <ThemeWrapper>
                <Input placeholder="Enter something here" onChange={handleChange} value={text} {...args} />
            </ThemeWrapper>
        );
    },
};

export const WithActions = {
    args: {
        appearance: 'default',
        variant: 'base',
    },

    render: (args) => {
        const [text, setText] = useState('');
        const handleChange = (v) => setText(v);

        return (
            <ThemeWrapper>
                <Input
                    placeholder="Enter something here"
                    actions={({ variant }) => (
                        <>
                            <Button variant={variant}>
                                <span>Submit</span>
                                <Icon name="arrow-right" />
                            </Button>
                        </>
                    )}
                    onChange={handleChange}
                    value={text}
                    {...args}
                />
            </ThemeWrapper>
        );
    },
};

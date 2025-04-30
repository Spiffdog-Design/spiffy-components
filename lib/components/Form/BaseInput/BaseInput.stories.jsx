import { useState } from 'react';

import { Button, FaIcon, BaseInput } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Form/Base/BaseInput',
    component: BaseInput,
    argTypes: {
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        variant: 'base',
    },

    render: (args) => {
        const [text, setText] = useState('');
        const handleChange = (v) => setText(v);

        return (
            <ThemeWrapper>
                <BaseInput
                    placeholder="Enter something here"
                    actions={({ variant }) => (
                        <>
                            <Button variant={variant}>
                                <span>Submit</span>
                                <FaIcon name="arrow-right" />
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

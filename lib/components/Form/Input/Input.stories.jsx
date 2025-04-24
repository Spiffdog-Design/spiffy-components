import { useState } from 'react';
import { ArrowFatRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Button, Icon, Input } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Form/Input',
    component: Input,
    argTypes: {
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Primary = {
    args: {
        variant: 'base',
    },

    render: (args) => {
        const [text, setText] = useState('');
        const handleChange = (v) => setText(v);

        return (
            <ThemeWrapper>
                <Input
                    placeholder="Enter something here"
                    actions={
                        <>
                            <Button>
                                <Icon>
                                    <ArrowFatRight weight="fill" />
                                </Icon>
                            </Button>
                        </>
                    }
                    onChange={handleChange}
                    value={text}
                    {...args}
                />
            </ThemeWrapper>
        );
    },
};

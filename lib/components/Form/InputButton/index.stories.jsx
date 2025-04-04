import { useState } from 'react';
import { CaretCircleDoubleRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { InputButton, Icon } from '@/components';

import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Form/InputButton',
    component: InputButton,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
        type: {
            options: ['submit', 'reset'],
            control: { type: 'radio' },
        },
    },
};

export default meta;
export const Primary = {
    args: {
        appearance: 'solid',
        variant: 'primary',
        busy: false,
        rounded: false,
        type: 'submit',
    },

    render: ({ type, ...args }) => {
        const handleSubmit = (e) => {
            e.preventDefault();
            var object = {};
            const formData = new FormData(e.target);
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            setData(object);
        };
        const [data, setData] = useState(null);

        return (
            <ThemeWrapper>
                <form action={null} onSubmit={handleSubmit}>
                    <input name="test" defaultValue="Test Value" />
                    <InputButton type={type} {...args}>
                        {type}
                    </InputButton>
                </form>
                {data != null && (
                    <pre>
                        <code>{JSON.stringify(data, null, 4)}</code>
                    </pre>
                )}
            </ThemeWrapper>
        );
    },
};

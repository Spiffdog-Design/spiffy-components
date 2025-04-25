import { action } from '@storybook/addon-actions';
import { ArrowFatRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Button, Icon } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Button',
    component: Button,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        appearance: 'solid',
        variant: 'base',
        busy: false,
        disabled: false,
        rounded: false,
        children: (
            <>
                <span>Click Me</span>
                <Icon>
                    <ArrowFatRight weight="fill" />
                </Icon>
            </>
        ),
    },

    render: (args) => (
        <ThemeWrapper>
            <Button {...args} onClick={action('clicked')} />
        </ThemeWrapper>
    ),
};

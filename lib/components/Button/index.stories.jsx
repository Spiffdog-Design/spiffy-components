import { action } from '@storybook/addon-actions';

import { Button } from '@/components';

import StoryWrapper from '../Storybook/StoryWrapper';

const meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'info', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Primary = {
    args: {
        appearance: 'solid',
        variant: 'primary',
        size: 'medium',
        rounded: true,
        children: 'Plop',
    },

    render: (args) => (
        <StoryWrapper>
            <Button {...args} onClick={action('clicked')} />
        </StoryWrapper>
    ),
};

import { action } from '@storybook/addon-actions';

import { Button } from '/lib';

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
            options: ['alert', 'primary', 'success', 'warning'],
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
    },

    render: (args) => (
        <StoryWrapper>
            <Button {...args} onClick={action('clicked')}>
                Plop
            </Button>
        </StoryWrapper>
    ),
};

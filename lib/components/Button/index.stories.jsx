import { action } from '@storybook/addon-actions';
import { ArrowFatRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

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
        active: false,
        rounded: false,
        children: (
            <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <span>Click Me</span> <ArrowFatRight size={20} weight="fill" />
            </div>
        ),
    },

    render: (args) => (
        <StoryWrapper>
            <Button {...args} onClick={action('clicked')} />
        </StoryWrapper>
    ),
};

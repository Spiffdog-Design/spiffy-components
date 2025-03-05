import { action } from '@storybook/addon-actions';

import { Button, ButtonBar } from '@/components';
import StoryWrapper from '../Storybook/StoryWrapper';

const meta = {
    title: 'Button Bar',
    component: ButtonBar,
    argTypes: {
        showBorder: {
            control: { type: 'boolean' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'info', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Primary = {
    args: {
        active: 1,
        showBorder: true,
        size: 'medium',
        variant: 'primary',
    },

    render: (args) => (
        <StoryWrapper>
            <ButtonBar {...args} onActiveClick={action('clicked')}>
                <Button>Button #1</Button>
                <Button>Button #2</Button>
                <Button>Button #3</Button>
                <Button>Button #4</Button>
                <Button>Button #5</Button>
                <Button>Button #6</Button>
            </ButtonBar>
        </StoryWrapper>
    ),
};

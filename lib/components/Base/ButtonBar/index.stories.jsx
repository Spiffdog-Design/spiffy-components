import { action } from '@storybook/addon-actions';
import { Bluetooth } from '@phosphor-icons/react';

import { Button, ButtonBar, Icon } from '@/components';

import ThemeWrapper from '../../Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Button Bar',
    component: ButtonBar,
    argTypes: {
        multiple: {
            control: { type: 'boolean' },
            description: 'Allow multiple values to be selected.',
        },
        border: {
            control: { type: 'boolean' },
            description: 'Show the button bar border.',
        },
        value: {
            control: { type: 'array' },
            description: 'An array of button indexes to pre-select.',
        },
        variant: {
            control: { type: 'radio' },
            description: 'Select the display variant mode.',
            options: ['alert', 'info', 'primary', 'success', 'warning'],
        },
    },
};

export default meta;

export const Primary = {
    args: {
        border: true,
        multiple: true,
        value: [1],
        variant: 'primary',
    },

    render: (args) => (
        <ThemeWrapper>
            <ButtonBar {...args} onActiveClick={action('clicked')}>
                <Button>
                    <Icon>
                        <Bluetooth />
                    </Icon>
                </Button>
                <Button>Button #2</Button>
                <Button>Button #3</Button>
                <Button>Button #4</Button>
                <Button>Button #5</Button>
                <Button>Button #6</Button>
            </ButtonBar>
        </ThemeWrapper>
    ),
};

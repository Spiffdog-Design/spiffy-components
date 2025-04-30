import { action } from '@storybook/addon-actions';

import { Button, FaIcon } from '@/components';
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
        children: <></>,
    },

    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 4, height: 50 }}>
                <Button {...args} onClick={action('clicked')}>
                    <FaIcon set="regular" name="heart" />
                    <span>With Icons</span>
                    <FaIcon set="regular" name="face-smile" />
                </Button>
                <Button {...args} onClick={action('clicked')}>
                    <span>Without Icons</span>
                </Button>
            </div>
        </ThemeWrapper>
    ),
};

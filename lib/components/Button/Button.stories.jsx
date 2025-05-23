import { action } from '@storybook/addon-actions';

import { Button, FaIcon, Label } from '@/components';
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
export const LongText = {
    args: {
        appearance: 'solid',
        variant: 'base',
        busy: false,
        disabled: false,
        rounded: false,
    },

    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Label>Raw Text</Label>
                    <Button {...args} onClick={action('clicked')}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        classical literature, discovered the undoubtable source.
                    </Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Label>Text Inside a &lt;SPAN /&gt; container</Label>
                    <Button {...args} onClick={action('clicked')}>
                        <span>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source.
                        </span>
                    </Button>
                </div>
            </div>
        </ThemeWrapper>
    ),
};

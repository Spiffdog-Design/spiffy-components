import { action } from 'storybook/actions';
import {
    ArgTypes,
    Canvas,
    Controls,
    Description,
    Primary,
    Source,
    Story,
    Subtitle,
    Title,
} from '@storybook/addon-docs/blocks';

import { Button, Icon, Label } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Button',
    component: Button,
    parameters: {
        componentSubtitle: 'BUTTONS!',
        layout: 'fullscreen',
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />

                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid', 'contained', 'text', 'outlined', 'elevated'],
            control: { type: 'radio' },
            description: 'Defines the visual style of the button. Choose between "basic", "outline", or "solid".',
            defaultValue: 'solid',
        },
        busy: {
            control: { type: 'boolean' },
            description:
                'If true, the button will show a busy state.  This will blur the button, show a spinner and disable any interactivity.  Used when doing an operation where multiple clicks are undesirable (like making API calls, etc)',
            defaultValue: false,
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
            description:
                'Specifies the variant of the button, affecting its color scheme. Options include "alert", "base", "primary", "success", and "warning".',
            defaultValue: 'base',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disables the button, preventing user interaction.',
            defaultValue: false,
        },
        rounded: {
            control: { type: 'boolean' },
            description: 'If true, the button will have rounded corners.',
            defaultValue: false,
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'x2'],
            control: { type: 'radio' },
            defaultValue: 'md',
        },
    },
};

export default meta;

export const DefaultButton = {
    args: {
        appearance: 'solid',
        busy: false,
        disabled: false,
        rounded: false,
        size: 'md',
        variant: 'base',
    },
    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 4, height: 50 }}>
                <Button {...args} onClick={action('clicked')}>
                    <span>Default Button</span>
                </Button>
            </div>
        </ThemeWrapper>
    ),
};

export const IconButton = {
    args: {
        appearance: 'solid',
        busy: false,
        disabled: false,
        rounded: false,
        size: 'md',
        variant: 'base',
    },
    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 4, height: 50 }}>
                <Button {...args} onClick={action('clicked')}>
                    {({ size }) => (
                        <>
                            <Icon set="regular" name="plus" size={size} />
                            <span>With Icons</span>
                            <Icon set="solid" name="angle-right" size={size} />
                        </>
                    )}
                </Button>
            </div>
        </ThemeWrapper>
    ),
};
export const LongText = {
    args: {
        appearance: 'solid',
        busy: false,
        disabled: false,
        rounded: false,
        size: 'md',
        variant: 'base',
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
                    <Label>Text Inside a &lt;span&gt; element</Label>
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

export const Variants = {
    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Button {...args} appearance="contained" onClick={action('contained')}>
                        Contained
                    </Button>
                    <Button {...args} appearance="elevated" onClick={action('elevated')}>
                        Elevated
                    </Button>
                    <Button {...args} appearance="outlined" onClick={action('outlined')}>
                        Outlined
                    </Button>
                    <Button {...args} appearance="text" onClick={action('text')}>
                        Text
                    </Button>
                    <Button {...args} appearance="basic" onClick={action('basic')}>
                        Basic
                    </Button>
                </div>
            </div>
        </ThemeWrapper>
    ),
};

export const ColorVariants = {
    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', gap: 8 }}>
                <Button {...args} appearance="contained" variant="primary">
                    Primary
                </Button>
                <Button {...args} appearance="contained" variant="success">
                    Success
                </Button>
                <Button {...args} appearance="contained" variant="alert">
                    Alert
                </Button>
                <Button {...args} appearance="contained" variant="warning">
                    Warning
                </Button>
            </div>
        </ThemeWrapper>
    ),
};

export const States = {
    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', gap: 8 }}>
                <Button {...args} appearance="contained">
                    Normal
                </Button>
                <Button {...args} appearance="contained" disabled>
                    Disabled
                </Button>
                <Button {...args} appearance="contained" busy>
                    Busy
                </Button>
                <Button {...args} appearance="contained" rounded>
                    Rounded
                </Button>
            </div>
        </ThemeWrapper>
    ),
};

export const Sizes = {
    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Button {...args} appearance="contained" size="xs">
                    XS
                </Button>
                <Button {...args} appearance="contained" size="sm">
                    SM
                </Button>
                <Button {...args} appearance="contained" size="md">
                    MD
                </Button>
                <Button {...args} appearance="contained" size="lg">
                    LG
                </Button>
                <Button {...args} appearance="contained" size="xl">
                    XL
                </Button>
                <Button {...args} appearance="contained" size="x2">
                    X2
                </Button>
            </div>
        </ThemeWrapper>
    ),
};

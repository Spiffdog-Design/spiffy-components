import { action } from 'storybook/actions';

import { Button, Icon } from '@/components';

const Label = ({ children }) => <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>{children}</label>;

const meta = {
    title: 'Base/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
A customizable button component that supports various appearances, variants, and states. Implements ARIA-recommended behaviors for accessibility.

## Props

- **appearance**: Visual style of the button (\`'basic' | 'outline' | 'solid'\`)
- **variant**: Color variant (\`'base' | 'primary' | 'success' | 'warning' | 'alert'\`)
- **size**: Size variant (\`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'\`)
- **busy**: Shows a busy state with spinner and disables interaction
- **disabled**: Disables the button, preventing user interaction
- **rounded**: Whether to apply rounded corners
- **children**: Content to display. Can be a function that receives props (including size) for dynamic rendering
                `.trim(),
            },
        },
    },
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: 4, height: 50 }}>
            <Button {...args} onClick={action('clicked')}>
                <span>Default Button</span>
            </Button>
        </div>
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: 4, height: 50 }}>
            <Button {...args} onClick={action('clicked')}>
                {({ size }) => (
                    <>
                        <Icon name="plus" size={size} />
                        <span>With Icons</span>
                        <Icon name="chevron-right" size={size} />
                    </>
                )}
            </Button>
        </div>
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
    ),
};

export const Variants = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8 }}>
                <Button {...args} appearance="solid" onClick={action('solid')}>
                    Solid
                </Button>
                <Button {...args} appearance="outline" onClick={action('outline')}>
                    Outline
                </Button>
                <Button {...args} appearance="basic" onClick={action('basic')}>
                    Basic
                </Button>
            </div>
        </div>
    ),
};

export const ColorVariants = {
    render: (args) => (
        <div style={{ display: 'flex', gap: 8 }}>
            <Button {...args} appearance="solid" variant="primary">
                Primary
            </Button>
            <Button {...args} appearance="solid" variant="success">
                Success
            </Button>
            <Button {...args} appearance="solid" variant="alert">
                Alert
            </Button>
            <Button {...args} appearance="solid" variant="warning">
                Warning
            </Button>
        </div>
    ),
};

export const States = {
    render: (args) => (
        <div style={{ display: 'flex', gap: 8 }}>
            <Button {...args} appearance="solid">
                Normal
            </Button>
            <Button {...args} appearance="solid" disabled>
                Disabled
            </Button>
            <Button {...args} appearance="solid" busy>
                Busy
            </Button>
            <Button {...args} appearance="solid" rounded>
                Rounded
            </Button>
        </div>
    ),
};

export const Sizes = {
    render: (args) => (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Button {...args} appearance="solid" size="xs">
                XS
            </Button>
            <Button {...args} appearance="solid" size="sm">
                SM
            </Button>
            <Button {...args} appearance="solid" size="md">
                MD
            </Button>
            <Button {...args} appearance="solid" size="lg">
                LG
            </Button>
            <Button {...args} appearance="solid" size="xl">
                XL
            </Button>
            <Button {...args} appearance="solid" size="x2">
                X2
            </Button>
        </div>
    ),
};

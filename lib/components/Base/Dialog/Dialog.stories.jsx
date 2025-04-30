import { action } from '@storybook/addon-actions';

import { Button, Dialog, FaIcon } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Dialog',
    component: Dialog,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        open: false,
        variant: 'base',
        title: 'Format Hard Drive',
        description: 'Format your disk to allocate space and make it visible to the operating system.',
        footer: "This is just a demo.  We won't really format your disk... or will we? 😈",
    },

    render: (args) => (
        <ThemeWrapper>
            <Dialog
                onClick={action('clicked')}
                actions={(onClose) => (
                    <>
                        <Button appearance="basic" variant={args.variant} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="alert">
                            <FaIcon set="regular" name="trash-can" />
                            Me!
                        </Button>
                    </>
                )}
                trigger={<Button variant={args.variant}>Open Dialog</Button>}
                {...args}
            >
                <p>This action will remove all data from your hard drive. Are you sure you want to continue?</p>
            </Dialog>
        </ThemeWrapper>
    ),
};

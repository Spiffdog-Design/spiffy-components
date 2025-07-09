import { action } from '@storybook/addon-actions';

import { Button, Dialog, Icon } from '@/components';
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
        modal: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        children: 'This action will remove all data from your hard drive. Are you sure you want to continue?',
        description: 'This is sample description text',
        modal: true,
        variant: 'base',
        title: 'Format Hard Drive',
    },

    render: ({ children, ...args }) => (
        <ThemeWrapper>
            <Dialog
                {...args}
                actions={({ onClose }) => (
                    <>
                        <Button appearance="basic" variant={args.variant} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="alert">
                            <Icon set="regular" name="trash-can" />
                            Me!
                        </Button>
                    </>
                )}
                onClick={action('clicked')}
                trigger={({ onShow }) => (
                    <Button onClick={onShow} variant={args.variant}>
                        Open Dialog
                    </Button>
                )}
            >
                {children}
            </Dialog>
        </ThemeWrapper>
    ),
};

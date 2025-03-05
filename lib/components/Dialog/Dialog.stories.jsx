import { action } from '@storybook/addon-actions';

import { Button, Dialog } from '/lib';

import StoryWrapper from '../Storybook/StoryWrapper';

const meta = {
    title: 'Dialog',
    component: Dialog,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        variant: {
            options: ['alert', 'info', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Primary = {
    args: {
        open: true,
        variant: 'primary',
        title: 'Format Hard Drive',
        description: 'Format your disk to allocate space and make it visible to the operating system.',
        footer: "This is just a demo.  We won't really format your disk... or will we?",
    },

    render: (args) => (
        <StoryWrapper>
            <Dialog
                onClick={action('clicked')}
                actions={(onClose) => (
                    <>
                        <Button appearance="basic" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="alert">Nuke Me!</Button>
                    </>
                )}
                trigger={<Button>Open Dialog</Button>}
                {...args}
            >
                <p>This action will remove all data from your hard drive. Are you sure you want to continue?</p>
            </Dialog>
        </StoryWrapper>
    ),
};

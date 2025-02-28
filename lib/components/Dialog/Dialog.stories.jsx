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
        variant: 'primary',
        title: 'Format Hard Drive',
        description: 'Formatting your hard drive will erase all data.',
        footer: "This is just a demo.  We won't really format your disk.",
    },

    render: (args) => (
        <StoryWrapper>
            <Dialog
                onClick={action('clicked')}
                actions={
                    <>
                        <Button appearance="basic">Cancel</Button>
                        <Button variant="alert">Nuke Me!</Button>
                    </>
                }
                trigger={<Button>Open Dialog</Button>}
                {...args}
            >
                <p>This action will remove all data from your hard drive.</p>
                <p>Are you sure you want to continue?</p>
            </Dialog>
        </StoryWrapper>
    ),
};

import { action } from '@storybook/addon-actions';

import { AppRoot, Dialog } from '/lib';

const meta = {
    title: 'Dialog',
    component: Dialog,
};

export default meta;

export const Primary = {
    args: {
        appearance: 'SOLID',
        variant: 'PRIMARY',
    },

    render: (args) => (
        <AppRoot>
            <Dialog {...args} onClick={action('clicked')}>
                Plop
            </Dialog>
        </AppRoot>
    ),
};

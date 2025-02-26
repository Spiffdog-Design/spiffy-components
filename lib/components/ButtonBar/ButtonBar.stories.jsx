import { action } from '@storybook/addon-actions';

import { AppRoot, Button, ButtonBar } from '/lib';

const meta = {
    title: 'Button Bar',
    component: ButtonBar,
};

export default meta;

export const Primary = {
    render: (args) => (
        <AppRoot>
            <ButtonBar {...args} onActiveClick={action('clicked')}>
                <Button>Button #1</Button>
                <Button>Button #2</Button>
                <Button>Button #3</Button>
                <Button>Button #4</Button>
                <Button>Button #5</Button>
                <Button>Button #6</Button>
            </ButtonBar>
        </AppRoot>
    ),
};

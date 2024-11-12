import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AppRoot, Button, ButtonBar, ButtonBarProps } from 'components';

const meta: Meta<typeof ButtonBar> = {
  title: 'Button Bar',
  component: ButtonBar,
};

export default meta;

type Story = StoryObj<typeof ButtonBar>;

export const Primary: Story = {
  render: (args: ButtonBarProps) => (
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

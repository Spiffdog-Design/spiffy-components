import type { Meta, StoryObj } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

import { AppRoot, Label } from 'components';

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  render: () => (
    <AppRoot>
      <Label>This is a label</Label>
    </AppRoot>
  ),
};

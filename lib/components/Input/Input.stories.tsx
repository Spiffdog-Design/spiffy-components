import type { Meta, StoryObj } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

import { AppRoot, Input } from 'components';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: () => (
    <AppRoot>
      <Input />
    </AppRoot>
  ),
};

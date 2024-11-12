import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AppRoot, Button, ButtonProps } from 'components';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    appearance: 'SOLID',
    variant: 'PRIMARY',
    size: 'MD',
    rounded: true,
  },

  render: (args: ButtonProps) => (
    <AppRoot>
      <Button {...args} onClick={action('clicked')}>
        Plop
      </Button>
    </AppRoot>
  ),
};

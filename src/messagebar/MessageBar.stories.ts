import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MessageBar from './MessageBar';

const meta = {
  title: 'Example/MessageBar',
  component: MessageBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof MessageBar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Example: Story = {
  args: {
    children: 'MessageBar',
  },
};

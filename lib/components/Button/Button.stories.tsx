import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps } from '.';
import AppRoot from '../AppRoot';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'centered',
  // },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   children: { control: 'text' },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args: ButtonProps) => (
    <AppRoot>
      <Button {...args} onClick={action('clicked')}>
        Plop
      </Button>
    </AppRoot>
  ),
};

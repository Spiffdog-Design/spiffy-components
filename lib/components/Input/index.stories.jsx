import { action } from '@storybook/addon-actions';
import { Sun } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Button, Input } from '@/components';

import StoryWrapper from '../Storybook/StoryWrapper';

const meta = {
    title: 'Input',
    component: Input,
    argTypes: {},
};

export default meta;

export const Primary = {
    args: {
        label: 'Label',
        value: 'This is an input value',
    },

    render: (args) => (
        <StoryWrapper>
            <Input
                actions={
                    <Button>
                        <Sun size={20} weight="bold" />
                    </Button>
                }
                onChange={action('changed')}
                onClick={action('clicked')}
                {...args}
            />
        </StoryWrapper>
    ),
};

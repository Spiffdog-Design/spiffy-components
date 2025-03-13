import { action } from '@storybook/addon-actions';
import { ArrowCircleRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

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
                        <ArrowCircleRight size={40} weight="fill" />
                    </Button>
                }
                onChange={action('changed')}
                onClick={action('clicked')}
                {...args}
            />
        </StoryWrapper>
    ),
};

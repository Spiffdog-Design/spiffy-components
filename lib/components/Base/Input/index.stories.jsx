import { action } from '@storybook/addon-actions';
import { ArrowCircleRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Button, Icon, Input } from '@/components';

import ThemeWrapper from '../../Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Input',
    component: Input,
    argTypes: {
        variant: {
            options: ['alert', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Primary = {
    args: {
        label: 'Label',
        value: 'This is an input value',
        variant: 'primary',
    },

    render: (args) => (
        <ThemeWrapper>
            <Input
                actions={
                    <Button>
                        <Icon>
                            <ArrowCircleRight weight="fill" />
                        </Icon>
                    </Button>
                }
                onChange={action('changed')}
                onClick={action('clicked')}
                {...args}
            />
        </ThemeWrapper>
    ),
};

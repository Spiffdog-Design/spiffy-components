import { action } from '@storybook/addon-actions';
import { CaretCircleDoubleRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Button, Icon } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Button',
    component: Button,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Primary = {
    args: {
        appearance: 'solid',
        variant: 'primary',
        busy: false,
        rounded: false,
        children: (
            <div style={{ display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <span>Click Me</span>
                <Icon>
                    <CaretCircleDoubleRight weight="fill" />
                </Icon>
            </div>
        ),
    },

    render: (args) => (
        <ThemeWrapper>
            <Button {...args} onClick={action('clicked')} />
        </ThemeWrapper>
    ),
};

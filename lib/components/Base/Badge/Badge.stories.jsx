import { action } from '@storybook/addon-actions';

import { Badge } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Badge',
    component: Badge,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        variant: {
            options: ['alert', 'base', 'primary', 'success', 'warning'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        appearance: 'solid',
        variant: 'base',
    },

    render: (args) => (
        <ThemeWrapper>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
                <Badge {...args}>Without onClose</Badge>
                <Badge onClose={action('clicked')} {...args}>
                    With onClose
                </Badge>
            </div>
        </ThemeWrapper>
    ),
};

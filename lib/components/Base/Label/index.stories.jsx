import { Label } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Label',
    component: Label,
    argTypes: {
        required: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Primary = {
    args: {
        required: false,
    },

    render: (args) => (
        <ThemeWrapper>
            <Label {...args}>This is a label</Label>
        </ThemeWrapper>
    ),
};

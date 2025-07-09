import { Label } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Form/Label',
    component: Label,
    argTypes: {
        required: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        required: false,
    },

    render: (args) => (
        <ThemeWrapper>
            <Label {...args}>This is a label</Label>
        </ThemeWrapper>
    ),
};

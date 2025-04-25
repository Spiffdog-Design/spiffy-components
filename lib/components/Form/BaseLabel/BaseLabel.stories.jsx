import { BaseLabel } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Form/Base/BaseLabel',
    component: BaseLabel,
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
            <BaseLabel {...args}>This is a label</BaseLabel>
        </ThemeWrapper>
    ),
};

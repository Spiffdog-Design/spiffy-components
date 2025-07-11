import { Select, SelectItem } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
};

export default meta;

export const Demo = {
    args: {
        maxSelections: null,
        readOnly: false,
        onItemCreate: (item) => {
            console.log('Custom item created:', item);
        },
    },

    render: (args) => {
        return (
            <ThemeWrapper>
                <Select {...args}>
                    <SelectItem value="apple">🍎 Apple</SelectItem>
                    <SelectItem value="banana">🍌 Banana</SelectItem>
                    <SelectItem value="orange">🍊 Orange</SelectItem>
                    <SelectItem value="pear">🍐 Pear</SelectItem>
                    <SelectItem value="grape">🍇 Grape</SelectItem>
                </Select>
            </ThemeWrapper>
        );
    },
};

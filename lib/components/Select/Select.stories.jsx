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
                    <SelectItem value="Apple">🍎 Apple</SelectItem>
                    <SelectItem value="Banana">🍌 Banana</SelectItem>
                    <SelectItem value="Orange">🍊 Orange</SelectItem>
                    <SelectItem value="Pear">🍐 Pear</SelectItem>
                    <SelectItem value="Grape">🍇 Grape</SelectItem>
                </Select>
            </ThemeWrapper>
        );
    },
};

import { action } from '@storybook/addon-actions';
import { Combobox, createDataList } from '@/components';

import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { demoListData } from '@/components/Storybook/demoData';

const meta = {
    title: 'Base/Combobox',
    component: Combobox,
    argTypes: {
        appearance: {
            options: ['basic', 'outline', 'solid'],
            control: { type: 'radio' },
        },
        compact: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        rounded: {
            control: { type: 'boolean' },
        },
        position: {
            options: ['horizontal', 'vertical'],
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
        compact: false,
        disabled: false,
        label: 'Combobox Label',
        position: 'horizontal',
        required: false,
        rounded: false,
        variant: 'base',
    },

    render: (args) => {
        const list = createDataList(demoListData, 'id', 'label', {
            isSelected: (item, idx) => idx === 0,
        });

        return (
            <ThemeWrapper>
                <div style={{ maxWidth: '400px' }}>
                    <Combobox data={list} onChange={action('changed')} {...args} />
                </div>
            </ThemeWrapper>
        );
    },
};

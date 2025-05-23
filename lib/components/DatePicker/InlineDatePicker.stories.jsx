import { useState } from 'react';

import { InlineDatePicker } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'DatePicker/InlineDatePicker',
    component: InlineDatePicker,
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

    render: (args) => {
        const [date, setDate] = useState(new Date());
        return (
            <ThemeWrapper>
                <InlineDatePicker selected={date} onChange={(date) => setDate(date)} {...args} />
            </ThemeWrapper>
        );
    },
};

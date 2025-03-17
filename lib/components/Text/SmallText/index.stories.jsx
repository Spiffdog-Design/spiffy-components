import { AppRoot, SmallText } from '@/components';

const meta = {
    title: 'Text/SmallText',
    component: SmallText,
};

export default meta;

export const Primary = {
    args: {
        children: 'This is a small-text label.',
    },

    render: (args) => (
        <AppRoot>
            <SmallText {...args} />
        </AppRoot>
    ),
};

import { AppRoot, Input } from '@/components';

const meta = {
    title: 'Input',
    component: Input,
};

export default meta;

export const Primary = {
    render: () => (
        <AppRoot>
            <Input />
        </AppRoot>
    ),
};

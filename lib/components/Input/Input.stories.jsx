import { AppRoot, Input } from '/lib';

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

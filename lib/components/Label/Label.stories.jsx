import { AppRoot, Label } from '@/components';

const meta = {
    title: 'Label',
    component: Label,
};

export default meta;

export const Primary = {
    render: () => (
        <AppRoot>
            <Label>This is a label</Label>
        </AppRoot>
    ),
};

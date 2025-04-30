import { Spinner, FaIcon } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Spinner',
    component: Spinner,
    argTypes: {
        size: {
            control: { type: 'number' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        size: 40,
    },
    render: (args) => (
        <ThemeWrapper>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Spinner {...args} />
            </div>
        </ThemeWrapper>
    ),
};

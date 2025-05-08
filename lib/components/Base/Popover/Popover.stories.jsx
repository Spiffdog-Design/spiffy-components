import { Button, Popover } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Popover',
    component: Popover,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        align: {
            options: ['start', 'center', 'end'],
            control: { type: 'radio' },
        },
        side: {
            options: ['top', 'right', 'bottom', 'left'],
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
        align: 'start',
        showArrow: true,
        showClose: true,
        side: 'top',
        variant: 'base',
    },

    render: (args) => (
        <ThemeWrapper>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Popover
                    trigger={
                        <Button rounded={true} appearance="basic" variant={args.variant}>
                            Open Popover
                        </Button>
                    }
                    {...args}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source.
                        </p>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                            also reproduced in their exact original form, accompanied by English versions from the 1914
                            translation by H. Rackham.
                        </p>
                    </div>
                </Popover>
            </div>
        </ThemeWrapper>
    ),
};

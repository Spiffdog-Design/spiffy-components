import { Button, Popover } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useState } from 'react';

const meta = {
    title: 'Base/Popover/Popover',
    component: Popover,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        mode: {
            options: ['click', 'hover'],
            control: { type: 'radio' },
        },
        placement: {
            options: [
                'bottom',
                'bottom-end',
                'bottom-start',
                'top',
                'top-end',
                'top-start',
                'left',
                'left-end',
                'left-start',
                'right',
                'right-end',
                'right-start',
            ],
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
        mode: 'hover',
        padded: true,
        placement: 'bottom',
        showArrow: true,
        variant: 'base',
    },

    render: (args) => {
        return (
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
                        trigger={({ events }) => {
                            return (
                                <Button {...events} rounded={true} appearance="basic" variant={args.variant}>
                                    Open Popover
                                </Button>
                            );
                        }}
                        {...args}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                        </div>
                    </Popover>
                </div>
            </ThemeWrapper>
        );
    },
};

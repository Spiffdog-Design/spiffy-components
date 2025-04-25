import { ArrowFatRight } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons

import { Tooltip, Button, Icon } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Tooltip',
    component: Tooltip,
    argTypes: {
        enabled: {
            control: { type: 'boolean' },
        },
        open: {
            control: { type: 'boolean' },
        },
        padded: {
            control: { type: 'boolean' },
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
        enabled: true,
        //open: false,
        padded: true,
        side: 'bottom',
        variant: 'base',
    },

    render: (args) => (
        <ThemeWrapper>
            <Tooltip trigger={<p>Show Tooltip</p>} {...args}>
                {({ color }) => (
                    <div>
                        <div>
                            <strong style={{ color: color }}>Name: </strong>
                            <span>Martin Rollings</span>
                        </div>
                        <div>
                            <strong style={{ color: color }}>Source: </strong>
                            <span>IMDB</span>
                        </div>
                        <div>
                            <strong style={{ color: color }}>Description: </strong>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                )}
            </Tooltip>
        </ThemeWrapper>
    ),
};

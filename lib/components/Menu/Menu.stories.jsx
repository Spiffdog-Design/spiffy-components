import { useState } from 'react';

import { Button, FaIcon, Menu, CheckMenuItem } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Menu',
    component: Menu,
    argTypes: {
        required: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        required: false,
    },

    render: (args) => {
        const [id, setId] = useState(null);

        return (
            <ThemeWrapper>
                <Menu
                    align="start"
                    side="right"
                    title="Menu Title"
                    trigger={
                        <Button>
                            Click Me <FaIcon name="caret-right" />
                        </Button>
                    }
                >
                    <CheckMenuItem checked={id === 1} onSelect={() => setId(1)}>
                        Menu 1
                    </CheckMenuItem>
                    <CheckMenuItem checked={id === 2} onSelect={() => setId(2)}>
                        Menu 2
                    </CheckMenuItem>
                </Menu>
            </ThemeWrapper>
        );
    },
};

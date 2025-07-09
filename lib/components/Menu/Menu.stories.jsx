import { useState } from 'react';

import { Menu, MenuBar, MenuButton, MenuItem, MenuSeparator } from '@/components';
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
                <MenuBar>
                    <Menu anchor={<MenuItem render={<MenuButton />}>File</MenuItem>}>
                        <MenuItem>New Tab</MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem>Open File</MenuItem>
                        <MenuItem>Open Location</MenuItem>
                        <MenuSeparator />
                        <MenuItem>Close Window</MenuItem>
                        <MenuItem>Close Tab</MenuItem>
                        <MenuItem>Save Page As</MenuItem>
                        <MenuSeparator />
                        <Menu anchor={<MenuItem render={<MenuButton />}>Share</MenuItem>}>
                            <MenuItem>Email Link</MenuItem>
                            <MenuItem>Messages</MenuItem>
                            <MenuItem>Notes</MenuItem>
                            <MenuItem>Reminders</MenuItem>
                            <MenuItem>More...</MenuItem>
                        </Menu>
                        <MenuItem>Print</MenuItem>
                    </Menu>
                    <Menu anchor={<MenuItem render={<MenuButton />}>Edit</MenuItem>}>
                        <MenuItem>Undo</MenuItem>
                        <MenuItem>Redo</MenuItem>
                        <MenuSeparator />
                        <MenuItem>Cut</MenuItem>
                        <MenuItem>Copy</MenuItem>
                        <MenuItem>Paste</MenuItem>
                        <MenuItem>Paste and Match Style</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Select All</MenuItem>
                        <MenuSeparator />
                        <Menu anchor={<MenuItem render={<MenuButton />}>Find</MenuItem>}>
                            <MenuItem>Search the Web</MenuItem>
                            <MenuSeparator />
                            <MenuItem>Find</MenuItem>
                            <MenuItem>Find Next</MenuItem>
                            <MenuItem>Find Previous</MenuItem>
                            <MenuItem>Use Selection for Find</MenuItem>
                            <MenuItem disabled>Jump to Selection</MenuItem>
                        </Menu>
                        <Menu anchor={<MenuItem render={<MenuButton />}>Spelling and Grammar</MenuItem>}>
                            <MenuItem>Show Spelling and Grammar</MenuItem>
                            <MenuItem>Check Document Now</MenuItem>
                        </Menu>
                        <Menu anchor={<MenuItem render={<MenuButton />}>Substitutions</MenuItem>}>
                            <MenuItem>Show Substitutions</MenuItem>
                        </Menu>
                        <MenuSeparator />
                        <MenuItem disabled>Start Dictation</MenuItem>
                        <MenuItem>Emoji &amp; Symbols</MenuItem>
                    </Menu>

                    <Menu anchor={<MenuItem render={<MenuButton />}>View</MenuItem>}>
                        <MenuItem disabled>Stop</MenuItem>
                        <MenuItem>Force Reload This Page</MenuItem>
                        <MenuSeparator />
                        <MenuItem>Enter Full Screen</MenuItem>
                        <MenuItem disabled>Actual Size</MenuItem>
                        <MenuItem>Zoom In</MenuItem>
                        <MenuItem>Zoom Out</MenuItem>
                        <MenuSeparator />
                        <MenuItem>Cast</MenuItem>
                        <MenuSeparator />
                        <Menu anchor={<MenuItem render={<MenuButton />}>Developer</MenuItem>}>
                            <MenuItem>View Source</MenuItem>
                            <MenuItem>Developer Tools</MenuItem>
                            <MenuItem>Inspect Elements</MenuItem>
                            <MenuItem>JavaScript Console</MenuItem>
                            <MenuItem>Allow JavaScript from Apple Events</MenuItem>
                        </Menu>
                    </Menu>
                </MenuBar>
            </ThemeWrapper>
        );
    },
};

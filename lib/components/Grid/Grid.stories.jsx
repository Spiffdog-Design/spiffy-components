import { Grid, GridItem } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Grid',
    component: Grid,
    argTypes: {
        columns: {
            control: { type: 'text' },
            description: 'Number of columns in the grid or "auto" for responsive layout.',
            defaultValue: '4',
        },
        columnWidth: {
            control: { type: 'number' },
            description: 'Minimum calumn width in px.',
            defaultValue: '100',
        },
        gap: {
            control: { type: 'number' },
            description: 'Gap between grid items in px.',
            defaultValue: '16',
        },
    },
};

export default meta;

export const Demo = {
    args: {
        columns: '4',
        columnWidth: 100,
        gap: 16,
    },

    render: ({ ...args }) => (
        <ThemeWrapper>
            <Grid {...args}>
                <GridItem style={{ border: '3px solid lightblue', padding: 8, height: '100px' }}>Item 1</GridItem>
                <GridItem style={{ border: '3px solid lightcoral', padding: 8, height: '100px' }}>Item 2</GridItem>
                <GridItem span={2} s style={{ border: '3px solid lightgreen', padding: 8, height: '100px' }}>
                    Item 3
                </GridItem>
                <GridItem style={{ border: '3px solid aquamarine', padding: 8, height: '100px' }}>Item 4</GridItem>
                <GridItem style={{ border: '3px solid lightpink', padding: 8, height: '100px' }}>Item 5</GridItem>
                <GridItem style={{ border: '3px solid lightblue', padding: 8, height: '100px' }}>Item 6</GridItem>
                <GridItem style={{ border: '3px solid lightgreen', padding: 8, height: '100px' }}>Item 7</GridItem>
            </Grid>
        </ThemeWrapper>
    ),
};

export const Auto = {
    args: {
        columns: 'auto',
        columnWidth: 100,
        gap: 16,
    },

    render: ({ ...args }) => (
        <ThemeWrapper>
            <Grid {...args}>
                <GridItem span={3} style={{ border: '3px solid lightblue', padding: 8, height: '100px' }}>
                    Item 1
                </GridItem>
                <GridItem style={{ border: '3px solid lightcoral', padding: 8, height: '100px' }}>Item 2</GridItem>
                <GridItem style={{ border: '3px solid lightgreen', padding: 8, height: '100px' }}>Item 3</GridItem>
                <GridItem style={{ border: '3px solid aquamarine', padding: 8, height: '100px' }}>Item 4</GridItem>
                <GridItem span={2} style={{ border: '3px solid lightpink', padding: 8, height: '100px' }}>
                    Item 5
                </GridItem>
                <GridItem style={{ border: '3px solid lightblue', padding: 8, height: '100px' }}>Item 6</GridItem>
                <GridItem style={{ border: '3px solid lightgreen', padding: 8, height: '100px' }}>Item 7</GridItem>
            </Grid>
        </ThemeWrapper>
    ),
};

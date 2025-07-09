import { Accordion } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Accordion/Accordion',
    component: Accordion,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            description: 'Select the display variant mode.',
            options: ['alert', 'base', 'primary', 'success', 'warning'],
        },
    },
};

export default meta;

export const Demo = {
    args: {
        variant: 'base',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien dui, posuere eu auctor at, vulputate sed nisl. Integer nec mauris eget ex aliquet vestibulum. Nam convallis tincidunt blandit. Nulla cursus, sem at sodales congue, urna nisi ornare felis, ultricies ultrices sapien nunc at eros. Phasellus et metus neque. Curabitur commodo, mauris eget ullamcorper luctus, orci augue tristique sem, sed venenatis nibh ligula sit amet nisi. Donec hendrerit urna ut tempor mollis. Sed non ornare massa. Maecenas orci nulla, ultricies vel finibus quis, eleifend sit amet nulla. Suspendisse non finibus quam, sed vestibulum velit. Vivamus sit amet sollicitudin mauris, fermentum aliquam nulla. Cras suscipit erat quis lacus rhoncus accumsan.',
    },

    render: ({ content, ...args }) => (
        <ThemeWrapper>
            <Accordion {...args} heading="Item-1">
                {content}
            </Accordion>
        </ThemeWrapper>
    ),
};

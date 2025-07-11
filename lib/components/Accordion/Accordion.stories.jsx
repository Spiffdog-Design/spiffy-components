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
        content: (
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, venenatis at varius nec,
                dignissim non est. Maecenas a nunc sem. Cras sed ipsum lectus. Sed at dolor feugiat, maximus sapien
                mattis, suscipit dolor. Nunc sit amet augue a diam interdum mattis. Duis efficitur fringilla suscipit.
                Nunc varius porta leo, vitae eleifend massa. Phasellus vehicula nibh ut commodo efficitur. Donec maximus
                libero nibh, sed mollis dolor finibus et. Donec commodo felis in sapien euismod accumsan. Nulla
                consectetur nibh tortor, ac suscipit eros efficitur eu. Aliquam erat volutpat.
            </span>
        ),
    },

    render: ({ content, ...args }) => (
        <ThemeWrapper>
            <Accordion {...args} heading="Item-1">
                {content}
            </Accordion>
        </ThemeWrapper>
    ),
};

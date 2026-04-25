import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { Accordion } from '@/components';

const meta = {
    title: 'Base/Accordion/Accordion',
    component: Accordion,
    parameters: {
        componentSubtitle: 'Accordion Component',
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
A collapsible content section.

Uses native HTML \`<details>\` and \`<summary>\` elements for accessibility.

## Props

- **children**: Content to display when expanded
- **heading**: The heading content (displayed in summary) - Required
- **open**: Controls open/closed state - Required
- **onHeadingClick**: Callback when heading is clicked (receives new open state) - Required
- **variant**: Color variant (\`'base' | 'primary' | 'success' | 'warning' | 'alert'\`) - Default: \`'base'\`
- **size**: Size variant (\`'xs' | 'sm' | 'md'\`) - Default: \`'md'\`
- **className**: Additional CSS class names
                `.trim(),
            },
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />

                    <Canvas />
                    <Controls />
                </>
            ),
        },
    },
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
        <Accordion {...args} heading="Item-1">
            {content}
        </Accordion>
    ),
};

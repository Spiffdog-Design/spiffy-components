import { Accordion, AccordionList } from '@/components';

const meta = {
    title: 'Base/Accordion/AccordionList',
    component: AccordionList,
    parameters: {
        docs: {
            description: {
                component: `
A container for multiple accordion items.

Automatically applies the variant prop to all child Accordion components.

## Props

- **children**: Accordion components to display
- **variant**: Color variant to apply to all accordions (\`'base' | 'primary' | 'success' | 'warning' | 'alert'\`) - Default: \`'base'\`
- **className**: Additional CSS class names
                `.trim(),
            },
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, venenatis at varius nec,
                    dignissim non est. Maecenas a nunc sem. Cras sed ipsum lectus. Sed at dolor feugiat, maximus sapien
                    mattis, suscipit dolor. Nunc sit amet augue a diam interdum mattis. Duis efficitur fringilla
                    suscipit. Nunc varius porta leo, vitae eleifend massa. Phasellus vehicula nibh ut commodo efficitur.
                    Donec maximus libero nibh, sed mollis dolor finibus et. Donec commodo felis in sapien euismod
                    accumsan. Nulla consectetur nibh tortor, ac suscipit eros efficitur eu. Aliquam erat volutpat.
                </p>
                <p>
                    Fusce suscipit pellentesque vulputate. Suspendisse ultricies, ante vel rhoncus vehicula, lacus magna
                    mattis urna, eu lobortis felis velit dignissim justo. Cras at nisl nibh. Sed felis enim, convallis
                    sit amet laoreet quis, tempor quis augue. Nam eget eros finibus, semper ipsum eget, consectetur
                    libero. Fusce sodales nulla id odio convallis, sit amet blandit quam tincidunt. Duis id varius
                    ipsum, id scelerisque tortor. Nunc quis laoreet erat. Mauris auctor aliquam aliquet. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Donec ornare molestie nisl eget tempor. Praesent
                    eleifend nisi ut condimentum consequat.
                </p>
            </div>
        ),
    },

    render: ({ content, ...args }) => (
        <AccordionList {...args}>
            <Accordion heading="Item-1">{content}</Accordion>
            <Accordion heading="Item-2">{content}</Accordion>
            <Accordion heading="Item-3">{content}</Accordion>
            <Accordion heading="Item-4">{content}</Accordion>
        </AccordionList>
    ),
};

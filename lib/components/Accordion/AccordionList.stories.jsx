import { Accordion, AccordionList } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Accordion/AccordionList',
    component: AccordionList,
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
        content: 'The quick brown fox jumps over the lazy dog',
    },

    render: ({ content, ...args }) => (
        <ThemeWrapper>
            <AccordionList {...args}>
                <Accordion heading="Item-1">{content}</Accordion>
                <Accordion heading="Item-2">{content}</Accordion>
                <Accordion heading="Item-3">{content}</Accordion>
                <Accordion heading="Item-4">{content}</Accordion>
            </AccordionList>
        </ThemeWrapper>
    ),
};

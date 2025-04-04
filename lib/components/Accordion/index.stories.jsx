import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Accordion',
    component: Accordion,
    argTypes: {
        collapsible: {
            control: { type: 'boolean' },
        },
        type: {
            options: ['single', 'multiple'],
            control: { type: 'radio' },
        },
        variant: {
            control: { type: 'radio' },
            description: 'Select the display variant mode.',
            options: ['alert', 'base', 'primary', 'success', 'warning'],
        },
    },
};

export default meta;

export const Primary = {
    args: {
        type: 'single',
        defaultValue: 'item-2',
        collapsible: false,
        variant: 'primary',
        content: 'The quick brown fox jumps over the lazy dog',
    },

    render: ({ content, ...args }) => (
        <ThemeWrapper>
            <Accordion {...args}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Item-1</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Item-2</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Item-3</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Item-4</AccordionTrigger>
                    <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
            </Accordion>
        </ThemeWrapper>
    ),
};

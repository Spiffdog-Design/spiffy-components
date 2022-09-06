export default {
    title: 'Components/Button',
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};

const Template = () => `<s-button>Plop</s-button>`;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

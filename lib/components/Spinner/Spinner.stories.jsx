import { Spinner, ThreeDotSpinner } from '@/components';

const meta = {
    title: 'Base/Spinner',
    component: Spinner,
    parameters: {
        docs: {
            description: {
                component: `
Spinner component for indicating loading states.

Uses token-based sizing consistent with the design system.

## Props

- **size**: Size of the spinner (\`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'\`) - Default: \`'md'\`
- **className**: Additional CSS class names
- **style**: Additional inline styles
                `.trim(),
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'x2'],
        },
    },
};

export default meta;

export const Demo = {
    args: {
        size: 'md',
    },
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.4rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <Spinner {...args} />
            <ThreeDotSpinner size={args.size} />
        </div>
    ),
};

export const Sizes = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.4rem',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
                <Spinner size="xs" />
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
                <Spinner size="x2" />
            </div>
            <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
                <ThreeDotSpinner size="xs" />
                <ThreeDotSpinner size="sm" />
                <ThreeDotSpinner size="md" />
                <ThreeDotSpinner size="lg" />
                <ThreeDotSpinner size="xl" />
                <ThreeDotSpinner size="x2" />
            </div>
        </div>
    ),
};

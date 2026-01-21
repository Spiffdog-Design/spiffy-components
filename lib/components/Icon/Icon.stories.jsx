import { Icon } from '@/components';

const meta = {
    title: 'Base/Icon',
    component: Icon,
    parameters: {
        docs: {
            description: {
                component: `
Icon component that wraps Lucide React icons with tree-shaking support.

Icons must be registered in the iconRegistry to be used. Only registered icons will be included in the bundle (tree-shaking).

## Props

- **name**: Name of the icon (must be registered in iconRegistry) - See available icons below
- **size**: Size of the icon (\`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'\`) - Default: \`'md'\`
- **className**: Additional CSS class names
- **...props**: Additional SVG props

## Available Icons

Navigation: \`chevron-right\`, \`chevron-left\`, \`chevron-down\`, \`chevron-up\`, \`angle-right\`, \`angle-left\`, \`angle-down\`, \`angle-up\`

Actions: \`plus\`, \`minus\`, \`x\`, \`xmark\`, \`check\`, \`check-circle\`

Common: \`home\`, \`user\`, \`settings\`, \`search\`, \`bell\`, \`mail\`, \`heart\`, \`star\`, \`info\`
                `.trim(),
            },
        },
    },
    argTypes: {
        name: {
            control: { type: 'text' },
            description: 'Name of the Lucide icon (kebab-case, e.g., "chevron-right", "user-plus")',
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'x2'],
            control: { type: 'radio' },
            description: 'Size of the icon',
            defaultValue: 'md',
        },
    },
};

export default meta;

export const Default = {
    args: {
        name: 'heart',
        size: 'md',
    },
};

export const Sizes = {
    render: () => (
        <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
            <Icon name="star" size="xs" />
            <Icon name="star" size="sm" />
            <Icon name="star" size="md" />
            <Icon name="star" size="lg" />
            <Icon name="star" size="xl" />
            <Icon name="star" size="x2" />
        </div>
    ),
};

export const CommonIcons = {
    render: () => (
        <div style={{ display: 'flex', gap: '1.6rem', flexWrap: 'wrap' }}>
            <Icon name="home" size="lg" />
            <Icon name="user" size="lg" />
            <Icon name="settings" size="lg" />
            <Icon name="search" size="lg" />
            <Icon name="bell" size="lg" />
            <Icon name="mail" size="lg" />
            <Icon name="heart" size="lg" />
            <Icon name="star" size="lg" />
            <Icon name="chevron-right" size="lg" />
            <Icon name="chevron-left" size="lg" />
            <Icon name="chevron-down" size="lg" />
            <Icon name="chevron-up" size="lg" />
            <Icon name="x" size="lg" />
            <Icon name="check" size="lg" />
            <Icon name="plus" size="lg" />
            <Icon name="minus" size="lg" />
        </div>
    ),
};

export const WithColors = {
    render: () => (
        <div style={{ display: 'flex', gap: '1.6rem', flexWrap: 'wrap' }}>
            <Icon name="heart" size="lg" style={{ color: 'var(--alert-6)' }} />
            <Icon name="star" size="lg" style={{ color: 'var(--warning-6)' }} />
            <Icon name="check-circle" size="lg" style={{ color: 'var(--success-6)' }} />
            <Icon name="info" size="lg" style={{ color: 'var(--primary-6)' }} />
        </div>
    ),
};

import { Tooltip } from '@/components';
import { Button } from '@/components';

const meta = {
    title: 'Base/Tooltip',
    component: Tooltip,
    parameters: {
        docs: {
            description: {
                component: `
A lightweight tooltip that appears on hover or focus.

Wraps the Popover component with tooltip-specific defaults.

## Props

- **children**: Content to display in the tooltip
- **trigger**: Element that triggers the tooltip
- **open**: Controlled open state
- **onOpenChange**: Callback when open state changes
- **position**: Position relative to trigger (\`'top' | 'bottom' | 'left' | 'right' | 'auto'\`) - Default: \`'auto'\`
- **size**: Size variant (\`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'\`) - Default: \`'sm'\`
- **triggerType**: How the tooltip is triggered (\`'hover' | 'focus' | 'click'\`) - Default: \`'hover'\`
- **className**: Additional CSS class names
- **id**: ID for the tooltip (auto-generated if not provided)
                `.trim(),
            },
        },
    },
    argTypes: {
        position: {
            control: { type: 'select' },
            options: ['top', 'bottom', 'left', 'right', 'auto'],
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'x2'],
        },
        triggerType: {
            control: { type: 'select' },
            options: ['hover', 'focus', 'click'],
        },
    },
};

export default meta;

export const Default = {
    args: {
        trigger: <span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover me</span>,
        children: 'This is a tooltip',
        position: 'top',
        size: 'sm',
    },
};

export const Positions = {
    render: () => {
        const positions = ['top', 'bottom', 'left', 'right'];
        return (
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '4rem',
                    padding: '4rem',
                    placeItems: 'center',
                }}
            >
                {positions.map((position) => (
                    <Tooltip key={position} trigger={<Button>Tooltip {position}</Button>} position={position}>
                        Tooltip positioned {position}
                    </Tooltip>
                ))}
            </div>
        );
    },
};

export const Sizes = {
    render: () => {
        const sizes = ['xs', 'sm', 'md', 'lg'];
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    padding: '4rem',
                    alignItems: 'center',
                }}
            >
                {sizes.map((size) => (
                    <Tooltip key={size} trigger={<Button>Size: {size}</Button>} size={size}>
                        Tooltip with {size} size
                    </Tooltip>
                ))}
            </div>
        );
    },
};

export const TriggerTypes = {
    render: () => {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    padding: '4rem',
                    alignItems: 'center',
                }}
            >
                <div>
                    <Tooltip trigger={<span style={{ textDecoration: 'underline' }}>Hover me</span>} triggerType="hover">
                        Appears on hover
                    </Tooltip>
                </div>
                <div>
                    <Tooltip trigger={<input type="text" placeholder="Focus me" style={{ padding: '0.8rem' }} />} triggerType="focus">
                        Appears on focus
                    </Tooltip>
                </div>
                <div>
                    <Tooltip trigger={<Button>Click me</Button>} triggerType="click">
                        Appears on click
                    </Tooltip>
                </div>
            </div>
        );
    },
};

export const LongContent = {
    args: {
        trigger: <span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover for long tooltip</span>,
        children: 'This is a longer tooltip message that demonstrates how the tooltip handles content that spans multiple lines or contains more text than a typical tooltip.',
        position: 'top',
        size: 'md',
    },
};

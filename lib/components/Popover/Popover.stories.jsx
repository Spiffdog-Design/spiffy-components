import { useState } from 'react';
import { Popover } from '@/components';
import { Button } from '@/components';

const meta = {
    title: 'Base/Popover',
    component: Popover,
    parameters: {
        docs: {
            description: {
                component: `
A flexible overlay component that can be used as a base for Modals, Tooltips, Dropdowns, and other overlay components.

Uses native HTML capabilities:
- \`<dialog>\` element for modal behavior (with showModal() and close())
- CSS positioning for tooltips/dropdowns
- CSS transitions for animations
- Native focus management

## Props

- **children**: Content to display in the popover
- **trigger**: Element that triggers the popover
- **open**: Controlled open state (for manual trigger)
- **onOpenChange**: Callback when open state changes
- **triggerType**: How the popover is triggered (\`'click' | 'hover' | 'focus' | 'manual'\`) - Default: \`'click'\`
- **type**: Type of popover (\`'modal' | 'tooltip' | 'dropdown' | 'popover'\`) - Default: \`'popover'\`
- **position**: Position relative to trigger. Can be single value (\`'top' | 'bottom' | 'left' | 'right' | 'center' | 'auto'\`) or two-position pair (\`'left top' | 'right bottom' | 'center center'\`, etc.). X and Y can be in any order. - Default: \`'auto'\`
- **size**: Size variant (\`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'\`) - Default: \`'md'\`
- **portal**: Whether to render in a portal (default: true for modal, false for others)
- **className**: Additional CSS class names
- **id**: ID for the popover (auto-generated if not provided)
                `.trim(),
            },
        },
    },
    argTypes: {
        triggerType: {
            control: { type: 'select' },
            options: ['click', 'hover', 'focus', 'manual'],
        },
        type: {
            control: { type: 'select' },
            options: ['modal', 'tooltip', 'dropdown', 'popover'],
        },
        position: {
            control: { type: 'select' },
            options: [
                'top',
                'bottom',
                'left',
                'right',
                'center',
                'auto',
                'left top',
                'left bottom',
                'left center',
                'right top',
                'right bottom',
                'right center',
                'center top',
                'center bottom',
                'center center',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'x2'],
        },
    },
};

export default meta;

export const Dropdown = {
    args: {
        trigger: <Button>Open Dropdown</Button>,
        triggerType: 'click',
        type: 'dropdown',
        position: 'bottom',
        size: 'md',
        children: (
            <div>
                <div style={{ padding: '0.8rem', cursor: 'pointer' }}>Option 1</div>
                <div style={{ padding: '0.8rem', cursor: 'pointer' }}>Option 2</div>
                <div style={{ padding: '0.8rem', cursor: 'pointer' }}>Option 3</div>
            </div>
        ),
    },
};

export const Tooltip = {
    args: {
        trigger: <span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover for tooltip</span>,
        triggerType: 'hover',
        type: 'tooltip',
        position: 'top',
        size: 'sm',
        children: <div>This is a tooltip message</div>,
    },
};

export const Modal = {
    args: {
        trigger: <Button variant="primary">Open Modal</Button>,
        triggerType: 'click',
        type: 'modal',
        size: 'md',
        children: (
            <div>
                <h2 style={{ marginTop: 0 }}>Modal Title</h2>
                <p>This is a modal dialog using the native HTML dialog element.</p>
                <p>It supports backdrop, escape key, and focus management natively.</p>
            </div>
        ),
    },
};

export const PopoverType = {
    args: {
        trigger: <Button variant="success">Open Popover</Button>,
        triggerType: 'click',
        type: 'popover',
        position: 'bottom',
        size: 'md',
        children: (
            <div>
                <h3 style={{ marginTop: 0 }}>Popover Title</h3>
                <p>This is a popover with custom content.</p>
            </div>
        ),
    },
};

export const Positions = {
    render: () => {
        const singlePositions = ['top', 'bottom', 'left', 'right', 'center'];
        const twoPositionPairs = [
            'left top',
            'left bottom',
            'left center',
            'right top',
            'right bottom',
            'right center',
            'center top',
            'center bottom',
            'center center',
        ];
        
        return (
            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <div>
                    <h3 style={{ marginBottom: '2rem' }}>Single Positions</h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '2rem',
                            placeItems: 'center',
                        }}
                    >
                        {singlePositions.map((position) => (
                            <Popover
                                key={position}
                                trigger={<Button>Open {position}</Button>}
                                triggerType="click"
                                type="popover"
                                position={position}
                                size="md"
                            >
                                <div>
                                    <strong>Position: {position}</strong>
                                    <p>This popover is positioned {position} of the trigger.</p>
                                </div>
                            </Popover>
                        ))}
                    </div>
                </div>
                
                <div>
                    <h3 style={{ marginBottom: '2rem' }}>Two-Position Pairs (X and Y in any order)</h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '2rem',
                            placeItems: 'center',
                        }}
                    >
                        {twoPositionPairs.map((position) => (
                            <Popover
                                key={position}
                                trigger={<Button>Open {position}</Button>}
                                triggerType="click"
                                type="popover"
                                position={position}
                                size="md"
                            >
                                <div>
                                    <strong>Position: {position}</strong>
                                    <p>This popover uses x/y positioning: {position}</p>
                                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--base-9)' }}>
                                        (Order doesn't matter: "{position.split(' ').reverse().join(' ')}" works too)
                                    </p>
                                </div>
                            </Popover>
                        ))}
                    </div>
                </div>
            </div>
        );
    },
};

export const Sizes = {
    render: () => {
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'x2'];
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
                    <Popover
                        key={size}
                        trigger={<Button>Size: {size}</Button>}
                        triggerType="click"
                        type="popover"
                        position="bottom"
                        size={size}
                    >
                        <div>
                            <strong>Size: {size}</strong>
                            <p>This popover uses the {size} size variant.</p>
                        </div>
                    </Popover>
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
                    <Popover
                        trigger={<Button>Click Trigger</Button>}
                        triggerType="click"
                        type="popover"
                        position="bottom"
                    >
                        <div>Opens on click</div>
                    </Popover>
                </div>
                <div>
                    <Popover
                        trigger={<span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover Trigger</span>}
                        triggerType="hover"
                        type="tooltip"
                        position="top"
                    >
                        <div>Opens on hover</div>
                    </Popover>
                </div>
                <div>
                    <Popover
                        trigger={<input type="text" placeholder="Focus Trigger" style={{ padding: '0.8rem' }} />}
                        triggerType="focus"
                        type="popover"
                        position="bottom"
                    >
                        <div>Opens on focus</div>
                    </Popover>
                </div>
            </div>
        );
    },
};

export const Controlled = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                <div>
                    <Button onClick={() => setOpen(!open)}>Toggle Popover (Controlled)</Button>
                </div>
                <Popover
                    trigger={<Button>This trigger is disabled</Button>}
                    triggerType="manual"
                    type="popover"
                    position="bottom"
                    open={open}
                    onOpenChange={setOpen}
                >
                    <div>
                        <strong>Controlled Popover</strong>
                        <p>This popover is controlled by external state.</p>
                        <Button size="sm" onClick={() => setOpen(false)}>
                            Close
                        </Button>
                    </div>
                </Popover>
            </div>
        );
    },
};

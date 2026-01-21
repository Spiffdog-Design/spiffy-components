import { useState } from 'react';
import { Dialog } from '@/components';
import { Button } from '@/components';

const meta = {
    title: 'Base/Dialog',
    component: Dialog,
    parameters: {
        docs: {
            description: {
                component: `
Dialog/Modal component - A modal dialog that can be closed with X button or Escape key.

Wraps the Popover component with modal-specific features:
- Close button (X)
- Focus trap for keyboard navigation
- Escape key support (handled by Popover)

## Props

- **children**: Content to display in the dialog
- **trigger**: Element that triggers the dialog
- **open**: Controlled open state
- **onOpenChange**: Callback when open state changes
- **size**: Size variant (\`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'\`) - Default: \`'md'\`
- **showCloseButton**: Whether to show the close button - Default: \`true\`
- **title**: Optional title for the dialog
- **className**: Additional CSS class names
- **id**: ID for the dialog (auto-generated if not provided)
                `.trim(),
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'x2'],
        },
        showCloseButton: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export const Default = {
    args: {
        trigger: <Button variant="primary">Open Dialog</Button>,
        title: 'Dialog Title',
        children: (
            <div>
                <p>This is a dialog using the native HTML dialog element.</p>
                <p>It can be closed with the X button or the Escape key.</p>
                <p>Keyboard navigation is trapped within the dialog.</p>
            </div>
        ),
        size: 'md',
        showCloseButton: true,
    },
};

export const WithoutTitle = {
    args: {
        trigger: <Button>Open Dialog</Button>,
        children: (
            <div>
                <p>This dialog has no title but still has a close button.</p>
            </div>
        ),
        showCloseButton: true,
    },
};

export const WithoutCloseButton = {
    args: {
        trigger: <Button>Open Dialog</Button>,
        title: 'Dialog Without Close Button',
        children: (
            <div>
                <p>This dialog has no close button. You must close it with Escape key or by clicking outside.</p>
            </div>
        ),
        showCloseButton: false,
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
                    <Dialog
                        key={size}
                        trigger={<Button>Size: {size}</Button>}
                        title={`Dialog Size: ${size}`}
                        size={size}
                    >
                        <p>This dialog uses the {size} size variant.</p>
                    </Dialog>
                ))}
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
                    <Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>
                </div>
                <Dialog open={open} onOpenChange={setOpen} title="Controlled Dialog">
                    <div>
                        <p>This dialog is controlled by external state.</p>
                        <p>Current state: {open ? 'open' : 'closed'}</p>
                        <Button onClick={() => setOpen(false)}>Close from inside</Button>
                    </div>
                </Dialog>
            </div>
        );
    },
};

export const WithForm = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                <Button onClick={() => setOpen(true)}>Open Form Dialog</Button>
                <Dialog open={open} onOpenChange={setOpen} title="Form Dialog">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('Form submitted!');
                            setOpen(false);
                        }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}
                    >
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.4rem' }}>
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    border: '1px solid var(--base-6)',
                                    borderRadius: 'var(--border-radius-1)',
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.4rem' }}>
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    border: '1px solid var(--base-6)',
                                    borderRadius: 'var(--border-radius-1)',
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'flex-end' }}>
                            <Button type="button" variant="base" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </div>
                    </form>
                </Dialog>
            </div>
        );
    },
};

export const KeyboardNavigation = {
    render: () => {
        return (
            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                <Dialog
                    trigger={<Button>Test Keyboard Navigation</Button>}
                    title="Keyboard Navigation Test"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <p>Use Tab to navigate between elements. Focus should be trapped within the dialog.</p>
                        <Button>First Button</Button>
                        <Button>Second Button</Button>
                        <input type="text" placeholder="Text input" style={{ padding: '0.8rem' }} />
                        <Button>Third Button</Button>
                        <p>Press Escape to close, or use the X button.</p>
                    </div>
                </Dialog>
            </div>
        );
    },
};

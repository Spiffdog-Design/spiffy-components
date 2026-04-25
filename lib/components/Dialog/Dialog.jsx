import { forwardRef, useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/Icon/Icon';
import { Popover } from '@/components/Popover/Popover';
import { cn } from '@/utilities';
import { createFocusTrap } from '@/utilities/focusTrap';

import styles from './Dialog.module.css';

/**
 * Dialog/Modal component - A modal dialog that can be closed with X button or Escape key.
 *
 * Wraps the Popover component with modal-specific features:
 * - Close button (X)
 * - Focus trap for keyboard navigation
 * - Escape key support (handled by Popover)
 *
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'} DialogSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display in the dialog
 * @param {React.ReactNode} [props.trigger] - Element that triggers the dialog
 * @param {boolean} [props.open] - Controlled open state
 * @param {Function} [props.onOpenChange] - Callback when open state changes
 * @param {DialogSize} [props.size='md'] - Size variant
 * @param {boolean} [props.showCloseButton=true] - Whether to show the close button
 * @param {string} [props.className] - Additional CSS class names
 * @param {string} [props.id] - ID for the dialog (auto-generated if not provided)
 * @param {React.ReactNode} [props.title] - Optional title for the dialog
 * @param {React.Ref<HTMLDialogElement>} ref
 */
export const Dialog = forwardRef(function Dialog(
    {
        children,
        trigger,
        open: controlledOpen,
        onOpenChange,
        size = 'md',
        showCloseButton = true,
        className,
        id,
        title,
        ...props
    },
    ref,
) {
    const dialogRef = useRef(null);
    const [internalOpen, setInternalOpen] = useState(false);

    // Use controlled or uncontrolled state
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = (value) => {
        if (controlledOpen === undefined) {
            setInternalOpen(value);
        }
        onOpenChange?.(value);
    };

    // Focus trap for keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        let cleanup = null;

        // Wait for dialog to be in DOM (native dialog.showModal() is async)
        const timeoutId = setTimeout(() => {
            if (dialogRef.current) {
                cleanup = createFocusTrap(dialogRef.current);
            }
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            if (cleanup) {
                cleanup();
            }
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Popover
            ref={(node) => {
                dialogRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            }}
            trigger={trigger}
            open={isOpen}
            onOpenChange={setIsOpen}
            triggerType="click"
            type="modal"
            size={size}
            portal={true}
            className={className}
            id={id}
            {...props}
        >
            <div className={styles['sc-dialog-content']}>
                {(title || showCloseButton) && (
                    <div className={styles['sc-dialog-header']}>
                        {title && <h2 className={styles['sc-dialog-title']}>{title}</h2>}
                        {showCloseButton && (
                            <button
                                type="button"
                                className={styles['sc-dialog-close']}
                                onClick={handleClose}
                                aria-label="Close dialog"
                            >
                                <Icon name="x" size="md" />
                            </button>
                        )}
                    </div>
                )}
                <div className={styles['sc-dialog-body']}>{children}</div>
            </div>
        </Popover>
    );
});

Dialog.displayName = 'Dialog';

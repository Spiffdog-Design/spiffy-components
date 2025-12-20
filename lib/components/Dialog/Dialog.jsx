import { forwardRef, useState } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { cn } from '@/utilities';

import styles from './Dialog.module.css';

export const Dialog = forwardRef(function Dialog(
    { actions, className, children, description, modal = false, title, trigger, variant = 'base', ...props },
    ref,
) {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (isOpen) => {
        setOpen(isOpen);
    };

    return (
        <RadixDialog.Root open={open} onOpenChange={handleOpenChange} modal={modal}>
            {trigger != null && (
                <RadixDialog.Trigger asChild>{trigger({ onShow: () => setOpen(true) })}</RadixDialog.Trigger>
            )}
            <RadixDialog.Portal>
                <RadixDialog.Overlay className={styles['sc-dialog-backdrop']} />
                <RadixDialog.Content
                    {...props}
                    ref={ref}
                    className={cn(styles['sc-dialog'], className)}
                    data-variant={variant}
                    onEscapeKeyDown={(e) => {
                        if (modal) e.preventDefault();
                    }}
                    onPointerDownOutside={(e) => {
                        if (modal) e.preventDefault();
                    }}
                >
                    {(title != null || description != null) && (
                        <div className={styles['sc-dialog-heading-container']}>
                            {title != null && (
                                <RadixDialog.Title className={styles['sc-dialog-heading']}>{title}</RadixDialog.Title>
                            )}
                            {description != null && (
                                <RadixDialog.Description className={styles['sc-dialog-description']}>
                                    {description}
                                </RadixDialog.Description>
                            )}
                        </div>
                    )}
                    {children != null && <div className={styles['sc-dialog-body']}>{children}</div>}
                    {actions != null && (
                        <div className={styles['sc-dialog-actions']}>{actions({ onClose: () => setOpen(false) })}</div>
                    )}
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    );
});

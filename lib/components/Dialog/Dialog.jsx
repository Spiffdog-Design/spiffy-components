import { forwardRef } from 'react';
import { Dialog as AriaDialog, DialogDescription, DialogHeading, useDialogStore } from '@ariakit/react';
import cn from 'classnames';

import styles from './Dialog.module.css';

export const Dialog = forwardRef(function Dialog(
    { actions, className, children, description, modal = false, title, trigger, variant = 'base', ...props },
    ref,
) {
    const variantClass = cn(styles['sc-dialog'], className, {
        [styles['sc-dialog-alert']]: variant === 'alert',
        [styles['sc-dialog-primary']]: variant === 'primary',
        [styles['sc-dialog-success']]: variant === 'success',
        [styles['sc-dialog-warning']]: variant === 'warning',
    });

    const dialog = useDialogStore();
    return (
        <>
            {trigger != null && trigger({ onShow: dialog.show })}
            <AriaDialog
                {...props}
                ref={ref}
                hideOnEscape={!modal}
                hideOnInteractOutside={!modal}
                modal={modal}
                autoFocusOnShow={true}
                store={dialog}
                className={variantClass}
                backdrop={<div className={styles['sc-dialog-backdrop']} />}
            >
                {(title != null || description != null) && (
                    <div className={styles['sc-dialog-heading-container']}>
                        {title != null && (
                            <DialogHeading className={styles['sc-dialog-heading']}>{title}</DialogHeading>
                        )}
                        {description != null && (
                            <DialogDescription className={styles['sc-dialog-description']}>
                                {description}
                            </DialogDescription>
                        )}
                    </div>
                )}
                {children != null && <div className={styles['sc-dialog-body']}>{children}</div>}
                {actions != null && (
                    <div className={styles['sc-dialog-actions']}>{actions({ onClose: dialog.hide })}</div>
                )}
            </AriaDialog>
        </>
    );
});

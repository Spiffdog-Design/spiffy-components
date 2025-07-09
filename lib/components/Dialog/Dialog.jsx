import { forwardRef } from 'react';
import { Dialog as AriaDialog, DialogDescription, DialogHeading, useDialogStore } from '@ariakit/react';
import cn from 'classnames';

import * as styles from './Dialog.css';

export const Dialog = forwardRef(function Dialog(
    { actions, className, children, description, modal = false, title, trigger, variant = 'base', ...props },
    ref,
) {
    const variantClass = cn(styles.dialog, className, {
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
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
                backdrop={<div className={styles.backdrop} />}
            >
                {(title != null || description != null) && (
                    <div className={styles.headingContainer}>
                        {title != null && <DialogHeading className={styles.heading}>{title}</DialogHeading>}
                        {description != null && (
                            <DialogDescription className={styles.description}>{description}</DialogDescription>
                        )}
                    </div>
                )}
                {children != null && <div className={styles.body}>{children}</div>}
                {actions != null && <div className={styles.actions}>{actions({ onClose: dialog.hide })}</div>}
            </AriaDialog>
        </>
    );
});

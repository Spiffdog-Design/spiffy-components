import { forwardRef, useEffect, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { Close, Content, Description, Overlay, Portal, Root, Title, Trigger } from '@radix-ui/react-dialog';
import cn from 'classnames';

import { Button, Icon } from '@/components';

import * as styles from './Dialog.css';

export const Dialog = forwardRef(
    (
        {
            actions,
            className,
            children,
            description,
            footer,
            open = false,
            title,
            trigger,
            variant = 'primary',
            onOpenChange = () => null,
        },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(open);

        const handleOpenClose = (state) => {
            setIsOpen(state);
            if (onOpenChange != null) {
                onOpenChange(state);
            }
        };

        const handleClose = () => {
            handleOpenClose(false);
        };

        useEffect(() => {
            setIsOpen(open);
        }, [open]);

        const variantClass = cn({
            [`${styles.alert}`]: variant === 'alert',
            [`${styles.success}`]: variant === 'success',
            [`${styles.warning}`]: variant === 'warning',
        });

        return (
            <Root open={isOpen} onOpenChange={handleOpenClose} ref={ref}>
                <Trigger asChild>{trigger}</Trigger>
                <Portal>
                    <Overlay className={cn(styles.overlay, variantClass)} />
                    <Content className={cn(styles.container, variantClass, className)}>
                        <div className={styles.heading}>
                            <div>
                                {title != null && <Title className={cn(styles.title, variantClass)}>{title}</Title>}
                                {description != null && (
                                    <Description className={styles.description}>{description}</Description>
                                )}
                            </div>
                            <Close asChild>
                                <Button rounded={true} appearance="basic" variant={variant} onClick={handleClose}>
                                    <Icon>
                                        <X weight="bold" />
                                    </Icon>
                                </Button>
                            </Close>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.children}>{children}</div>
                        </div>
                        <div className={styles.footer}>
                            {footer != null && <div className={styles.footerText}>{footer}</div>}
                            {actions != null && (
                                <div className={styles.actions}>
                                    {typeof actions === 'function' ? actions(handleClose) : actions}
                                </div>
                            )}
                        </div>
                    </Content>
                </Portal>
            </Root>
        );
    },
);
Dialog.displayName = 'Dialog';

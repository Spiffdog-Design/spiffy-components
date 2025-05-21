import { forwardRef } from 'react';
import { Arrow, Content, Close, Portal, Root, Trigger } from '@radix-ui/react-popover';
import cn from 'classnames';

import { FaIcon } from '@/components';

import * as styles from './Popover.css';

export const Popover = forwardRef(
    (
        {
            className,
            children,
            onOpenChange = () => null,
            padded = true,
            showArrow = true,
            showHeader = true,
            trigger,
            variant = 'base',
            ...props
        },
        ref,
    ) => {
        const variantClass = cn({
            [`${styles.alert}`]: variant === 'alert',
            [`${styles.primary}`]: variant === 'primary',
            [`${styles.success}`]: variant === 'success',
            [`${styles.warning}`]: variant === 'warning',
        });

        return (
            <Root>
                <Trigger asChild>{trigger}</Trigger>
                <Portal>
                    <Content className={cn(styles.content, variantClass)} sideOffset={5} {...props}>
                        {showHeader === true && (
                            <div className={styles.header}>
                                <Close className={cn(styles.close, variantClass)} aria-label="Close" asChild>
                                    <FaIcon name="xmark" />
                                </Close>
                            </div>
                        )}
                        <div className={cn(styles.children, { [`${styles.padded}`]: padded === true })}>{children}</div>
                        {showArrow === true && <Arrow className={styles.arrow} width={16} height={8} />}
                    </Content>
                </Portal>
            </Root>
        );
    },
);
Popover.displayName = 'Popover';

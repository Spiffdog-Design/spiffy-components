import { forwardRef } from 'react';
import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';
import cn from 'classnames';
import * as styles from './Tooltip.css';

const abortEvent = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
};

export const Tooltip = forwardRef(
    ({ children, className, enabled = true, open, padded = true, trigger, variant, ...props }, ref) => {
        const displayClassName = cn(styles.content, className, {
            [`${styles.padded}`]: padded === true,
            [`${styles.alert}`]: variant === 'alert',
            [`${styles.primary}`]: variant === 'primary',
            [`${styles.success}`]: variant === 'success',
            [`${styles.warning}`]: variant === 'warning',
        });

        return enabled ? (
            <Provider delayDuration={100}>
                <Root open={open}>
                    <Trigger onClick={abortEvent} ref={ref} className={cn(styles.trigger, className)} asChild>
                        {trigger}
                    </Trigger>
                    <Portal>
                        <Content onPointerDownOutside={abortEvent} className={displayClassName} {...props}>
                            {children}
                        </Content>
                    </Portal>
                </Root>
            </Provider>
        ) : (
            children
        );
    },
);
Tooltip.displayName = 'Tooltip';

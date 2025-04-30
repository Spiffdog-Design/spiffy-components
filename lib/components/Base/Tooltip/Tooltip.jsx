import { forwardRef } from 'react';
import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';
import cn from 'classnames';

import { getVariantMainColor } from '../../../utilities';
import { theme } from '@/components/Theme/themes/theme.css';
import * as styles from './Tooltip.css';

const abortEvent = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
};

export const Tooltip = ({
    children,
    className,
    enabled = true,
    open,
    padded = true,
    trigger,
    variant = 'base',
    ...props
}) => {
    const displayClassName = cn(styles.content, className, {
        [`${styles.padded}`]: padded === true,
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
    });

    const color = getVariantMainColor(variant, theme);

    return enabled ? (
        <Provider delayDuration={100}>
            <Root open={open}>
                <Trigger onClick={abortEvent} className={cn(styles.trigger, className)} asChild>
                    {trigger}
                </Trigger>
                <Portal>
                    <Content onPointerDownOutside={abortEvent} className={displayClassName} {...props}>
                        {typeof children === 'function' ? children({ color }) : children}
                    </Content>
                </Portal>
            </Root>
        </Provider>
    ) : (
        children
    );
};
Tooltip.displayName = 'Tooltip';

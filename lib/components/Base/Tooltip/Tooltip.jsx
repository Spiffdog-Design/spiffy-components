import { Arrow, Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';
import cn from 'classnames';

import { getVariantMainColor } from '../../../utilities';
import { theme } from '@/components/Theme/themes/theme.css';

import * as styles from './Tooltip.css';

export const Tooltip = ({
    children,
    className,
    enabled = true,
    padded = true,
    trigger,
    variant = 'base',
    open,
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
                <Trigger className={cn(styles.trigger, className)} asChild>
                    {trigger}
                </Trigger>
                <Portal>
                    <Content className={displayClassName} sideOffset={10} {...props}>
                        {typeof children === 'function' ? children({ color }) : children}
                        <Arrow className={styles.arrow} width={16} height={8} />
                    </Content>
                </Portal>
            </Root>
        </Provider>
    ) : (
        children
    );
};
Tooltip.displayName = 'Tooltip';

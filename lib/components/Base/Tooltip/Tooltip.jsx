import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';
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
            <Root>
                <Trigger className={cn(styles.trigger, className)} asChild>
                    {trigger}
                </Trigger>
                <Portal>
                    <Content className={displayClassName} {...props}>
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

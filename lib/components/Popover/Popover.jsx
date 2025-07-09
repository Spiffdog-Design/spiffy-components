import { forwardRef, useState } from 'react';
import { Popover as AriaPopover, PopoverArrow, PopoverDisclosure, PopoverProvider } from '@ariakit/react';
import cn from 'classnames';

import { theme } from '@/components/Theme/themes/theme.css';
import { getVariantMainColor } from '@/utilities';

import * as styles from './Popover.css';

export const Popover = forwardRef(function Popover(
    {
        className,
        children,
        mode = 'hover',
        padded = true,
        placement = 'bottom',
        showArrow = true,
        trigger,
        variant = 'base',
        ...props
    },
    ref,
) {
    const variantClass = cn({
        [`${styles.padded}`]: padded === true,
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
    });
    const color = getVariantMainColor(variant, theme);
    const [open, setOpen] = useState(false);

    const handleClickOutside = () => {
        if (mode === 'click') {
            setOpen((o) => !o);
        }
    };

    const handleClick = () => {
        setOpen((o) => !o);
    };

    const handleMouseOut = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(false);
        }
    };

    const handleMouseOver = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(true);
        }
    };

    const getEvents = (mode) => {
        return mode === 'hover'
            ? {
                  onMouseOver: handleMouseOver,
                  onMouseOut: handleMouseOut,
              }
            : {
                  onClick: handleClick,
              };
    };

    return (
        <PopoverProvider placement={placement} open={open}>
            <PopoverDisclosure
                render={
                    typeof trigger === 'function'
                        ? trigger({
                              color,
                              events: getEvents(mode),
                          })
                        : trigger
                }
            />
            <AriaPopover onClose={handleClickOutside} {...props}>
                <div className={cn(styles.content, variantClass)}>
                    {typeof children === 'function' ? children({ color }) : children}
                    {showArrow === true && <PopoverArrow className={styles.arrow} />}
                </div>
            </AriaPopover>
        </PopoverProvider>
    );
});

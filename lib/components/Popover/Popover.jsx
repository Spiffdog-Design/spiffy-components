import { forwardRef, useState } from 'react';
import { Popover as AriaPopover, PopoverArrow, PopoverDisclosure, PopoverProvider } from '@ariakit/react';
import cn from 'classnames';

import { getVariantMainColor } from '@/utilities';

import styles from './Popover.module.css';

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
        [styles['sc-popover-padded']]: padded === true,
        [styles['sc-popover-alert']]: variant === 'alert',
        [styles['sc-popover-primary']]: variant === 'primary',
        [styles['sc-popover-success']]: variant === 'success',
        [styles['sc-popover-warning']]: variant === 'warning',
    });
    const color = getVariantMainColor(variant);
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
                <div className={cn(styles['sc-popover-content'], variantClass)}>
                    {typeof children === 'function' ? children({ color }) : children}
                    {showArrow === true && <PopoverArrow className={styles['sc-popover-arrow']} />}
                </div>
            </AriaPopover>
        </PopoverProvider>
    );
});

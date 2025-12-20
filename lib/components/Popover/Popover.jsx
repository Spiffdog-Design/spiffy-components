import { forwardRef, useState } from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { cn } from '@/utilities';

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
        <RadixPopover.Root open={open} onOpenChange={setOpen}>
            <RadixPopover.Trigger asChild>
                {typeof trigger === 'function'
                    ? trigger({
                          color,
                          events: getEvents(mode),
                      })
                    : trigger}
            </RadixPopover.Trigger>
            <RadixPopover.Portal>
                <RadixPopover.Content
                    {...props}
                    ref={ref}
                    side={placement}
                    className={styles['sc-popover-content']}
                    data-variant={variant}
                    data-padded={padded ? 'true' : 'false'}
                    onOpenAutoFocus={(e) => {
                        if (mode === 'hover') e.preventDefault();
                    }}
                >
                    {typeof children === 'function' ? children({ color }) : children}
                    {showArrow === true && <RadixPopover.Arrow className={styles['sc-popover-arrow']} />}
                </RadixPopover.Content>
            </RadixPopover.Portal>
        </RadixPopover.Root>
    );
});

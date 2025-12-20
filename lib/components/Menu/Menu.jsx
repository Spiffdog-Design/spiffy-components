import { forwardRef, createContext, useContext, useState } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utilities';

import styles from './Menu.module.css';

const MenuContext = createContext();

export const Menu = forwardRef(function Menu({ anchor, className, ...props }, ref) {
    const [open, setOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ open, setOpen }}>
            <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
                {anchor != null && anchor}
                <RadixDropdownMenu.Portal>
                    <RadixDropdownMenu.Content
                        ref={ref}
                        {...props}
                        className={cn(styles['sc-menu'], className)}
                        sideOffset={4}
                        collisionPadding={8}
                    />
                </RadixDropdownMenu.Portal>
            </RadixDropdownMenu.Root>
        </MenuContext.Provider>
    );
});

export const MenuBar = forwardRef(function MenuBar({ className, ...props }, ref) {
    return <div ref={ref} className={cn(styles['sc-menu-bar'], className)} {...props} />;
});

export const MenuButton = forwardRef(function MenuButton({ children, ...props }, ref) {
    return (
        <RadixDropdownMenu.Trigger ref={ref} {...props} asChild>
            <button className={styles['sc-menu-button']}>
                <span className={styles['sc-menu-label']}>{children}</span>
            </button>
        </RadixDropdownMenu.Trigger>
    );
});

export const MenuItem = forwardRef(function MenuItem({ className, ...props }, ref) {
    return <RadixDropdownMenu.Item ref={ref} {...props} className={cn(styles['sc-menu-item'], className)} />;
});

export const MenuSeparator = forwardRef(function MenuSeparator({ className, ...props }, ref) {
    return <RadixDropdownMenu.Separator ref={ref} {...props} className={cn(styles['sc-menu-separator'], className)} />;
});

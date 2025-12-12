import { forwardRef } from 'react';
import * as Ariakit from '@ariakit/react';
import cn from 'classnames';

import styles from './Menu.module.css';

export const Menu = forwardRef(function Menu({ anchor, className, ...props }, ref) {
    const menu = Ariakit.useMenuContext();

    return (
        <Ariakit.MenuProvider>
            {anchor != null && anchor}
            <Ariakit.Menu
                ref={ref}
                portal
                fitViewport
                unmountOnHide
                overlap={!!menu?.parent}
                gutter={menu?.parent ? 12 : 4}
                shift={menu?.parent ? -9 : -2}
                flip={menu?.parent ? true : 'bottom-end'}
                {...props}
                className={cn(styles['sc-menu'], className)}
            />
        </Ariakit.MenuProvider>
    );
});

export const MenuBar = forwardRef(function MenuBar({ anchor, className, ...props }, ref) {
    return <Ariakit.Menubar ref={ref} className={cn(styles['sc-menu-bar'], className)} {...props} />;
});

export const MenuButton = forwardRef(function MenuButton({ children, ...props }, ref) {
    const menu = Ariakit.useMenuContext();
    return (
        <Ariakit.MenuButton ref={ref} {...props}>
            <span className={styles['sc-menu-label']}>{children}</span>
            {!!menu?.parent && <Ariakit.MenuButtonArrow />}
        </Ariakit.MenuButton>
    );
});

export const MenuItem = forwardRef(function MenuItem({ className, ...props }, ref) {
    return <Ariakit.MenuItem ref={ref} {...props} className={cn(styles['sc-menu-item'], className)} />;
});

export const MenuSeparator = forwardRef(function MenuSeparator({ className, ...props }, ref) {
    return <Ariakit.MenuSeparator ref={ref} {...props} className={cn(styles['sc-menu-separator'], className)} />;
});

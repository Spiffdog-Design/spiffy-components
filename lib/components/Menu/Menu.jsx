import { forwardRef } from 'react';
import * as Ariakit from '@ariakit/react';
import cn from 'classnames';

import * as styles from './Menu.css';

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
                className={cn(styles.menu, className)}
            />
        </Ariakit.MenuProvider>
    );
});

export const MenuBar = forwardRef(function MenuBar({ anchor, className, ...props }, ref) {
    return <Ariakit.Menubar ref={ref} className={cn(styles.menuBar, className)} {...props} />;
});

export const MenuButton = forwardRef(function MenuButton({ children, ...props }, ref) {
    const menu = Ariakit.useMenuContext();
    return (
        <Ariakit.MenuButton ref={ref} {...props}>
            <span className={styles.menuLabel}>{children}</span>
            {!!menu?.parent && <Ariakit.MenuButtonArrow />}
        </Ariakit.MenuButton>
    );
});

export const MenuItem = forwardRef(function MenuItem({ className, ...props }, ref) {
    return <Ariakit.MenuItem ref={ref} {...props} className={cn(styles.menuItem, className)} />;
});

export const MenuSeparator = forwardRef(function MenuSeparator({ className, ...props }, ref) {
    return <Ariakit.MenuSeparator ref={ref} {...props} className={cn(styles.separator, className)} />;
});

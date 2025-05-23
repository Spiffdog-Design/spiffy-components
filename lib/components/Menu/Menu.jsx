import {
    Root,
    Arrow,
    CheckboxItem,
    Content,
    Item,
    Portal,
    Sub,
    SubTrigger,
    SubContent,
    Trigger,
    ItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import cn from 'classnames';

import { FaIcon } from '@/components';

import * as styles from './Menu.css';

export const Menu = ({ children, open, title, trigger, ...props }) => {
    return (
        <Root open={open}>
            <Trigger asChild>{trigger}</Trigger>
            <Portal>
                <Content className={cn(styles.content)} {...props}>
                    {title != null && <div className={styles.title}>{title}</div>}
                    {children}
                    <Arrow className={styles.arrow} />
                </Content>
            </Portal>
        </Root>
    );
};

export const SubMenu = ({ children, trigger }) => {
    return (
        <Sub>
            <SubTrigger className={cn(styles.item, styles.subMenu)}>{trigger}</SubTrigger>
            <Portal>
                <SubContent className={cn(styles.content)}>{children}</SubContent>
            </Portal>
        </Sub>
    );
};

export const CheckMenuItem = ({ children, ...props }) => {
    return (
        <CheckboxItem className={styles.item} {...props}>
            <ItemIndicator className={styles.indicator}>
                <FaIcon name="check" />
            </ItemIndicator>
            {children}
        </CheckboxItem>
    );
};

export const MenuItem = ({ children, ...props }) => {
    return (
        <Item className={styles.item} {...props}>
            {children}
        </Item>
    );
};

CheckMenuItem.displayName = 'CheckMenuItem';
Menu.displayName = 'Menu';
MenuItem.displayName = 'MenuItem';
SubMenu.displayName = 'SubMenu';

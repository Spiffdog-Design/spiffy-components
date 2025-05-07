// src/components/Accordion/Accordion.tsx
import { Children, cloneElement, forwardRef } from 'react';
import * as styles from './Accordion.css';
import cn from 'classnames';

import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion';

import { FaIcon } from '@/components';

const displayClassName = (className, variant) =>
    cn(className, {
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
    });

export const Accordion = forwardRef(({ children, className, variant, ...props }, ref) => {
    const classes = displayClassName(styles.root, variant);
    return (
        <Root className={classes} ref={ref} {...props}>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    ...child.props,
                    variant,
                });
            })}
        </Root>
    );
});

export const AccordionContent = forwardRef(({ children, className, variant, ...props }, ref) => {
    const classes = displayClassName(styles.content, variant);
    return (
        <Content className={classes} ref={ref} {...props}>
            {children}
        </Content>
    );
});

export const AccordionItem = forwardRef(({ children, className, variant, ...props }, ref) => {
    const classes = displayClassName(styles.item, variant);
    return (
        <Item className={classes} ref={ref} {...props}>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    ...child.props,
                    variant,
                });
            })}
        </Item>
    );
});

export const AccordionTrigger = forwardRef(({ children, className, variant, ...props }, ref) => {
    const header = displayClassName(styles.header, variant);
    const trigger = displayClassName(styles.trigger, variant);
    return (
        <Header className={header}>
            <Trigger className={trigger} ref={ref} {...props}>
                {children}
                <FaIcon className="open" name="angle-right" />
                <FaIcon className="closed" name="angle-down" />
            </Trigger>
        </Header>
    );
});

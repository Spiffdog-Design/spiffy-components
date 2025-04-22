import { Children, cloneElement, forwardRef } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

import { Icon } from '@/components';

export const Accordion = forwardRef(({ children, className, variant, ...props }, fRef) => {
    const classes = cn('root', className, variant);
    return (
        <StyledRoot className={classes} ref={fRef} {...props}>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    ...child.props,
                    variant,
                });
            })}
        </StyledRoot>
    );
});

export const AccordionContent = forwardRef(({ children, className, variant, ...props }, fRef) => {
    const classes = cn('content', className, variant);
    return (
        <StyledContent className={classes} ref={fRef} {...props}>
            {children}
        </StyledContent>
    );
});

export const AccordionItem = forwardRef(({ children, className, variant, ...props }, fRef) => {
    const classes = cn('item', className, variant);
    return (
        <StyledItem className={classes} ref={fRef} {...props}>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    ...child.props,
                    variant,
                });
            })}
        </StyledItem>
    );
});

export const AccordionTrigger = forwardRef(({ children, className, variant, ...props }, fRef) => {
    const classes = cn('header', className, variant);
    return (
        <StyledHeader className={classes}>
            <StyledTrigger {...props} ref={fRef}>
                {children}
                <Icon>
                    <CaretRight className="open" />
                </Icon>
                <Icon>
                    <CaretDown className="close" />
                </Icon>
            </StyledTrigger>
        </StyledHeader>
    );
});

const StyledContent = styled(Content)`
    padding: 12px 16px;
    background-color: var(--base-01);
    color: var(--base-11);
`;

const StyledItem = styled(Item)`
    --border-color: var(--base-08);

    border-bottom: none;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-top: 1px solid var(--border-color);
    overflow: hidden;

    &.alert {
        --border-color: var(--alert-08);
    }
    &.primary {
        --border-color: var(--primary-08);
    }
    &.success {
        --border-color: var(--success-08);
    }
    &.warning {
        --border-color: var(--warning-08);
    }
`;

const StyledHeader = styled(Header)`
    --border-color: var(--base-05);
    --color: var(--base-11);

    display: flex;
    flex-direction: row;

    background-color: var(--base-02);
    color: var(--color);
    margin: 0;
    padding: 0;

    &[data-state='open'] {
        border-bottom: 1px solid var(--border-color);
    }

    &.alert {
        --border-color: var(--alert-05);
        --color: var(--alert-11);
    }
    &.primary {
        --border-color: var(--primary-05);
        --color: var(--primary-11);
    }
    &.success {
        --border-color: var(--success-05);
        --color: var(--success-11);
    }
    &.warning {
        --border-color: var(--warning-05);
        --color: var(--warning-11);
    }
`;

const StyledRoot = styled(Root)`
    --border-color: var(--base-04);
    border-radius: 4px;

    & > div:last-child {
        border-bottom: 1px solid var(--border-color);
    }

    &.alert {
        --border-color: var(--alert-04);
    }
    &.primary {
        --border-color: var(--primary-04);
    }
    &.success {
        --border-color: var(--success-04);
    }
    &.warning {
        --border-color: var(--warning-04);
    }
`;

const StyledTrigger = styled(Trigger)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0;
    padding: 12px 16px;
    text-transform: uppercase;
    height: 100%;
    width: 100%;

    & svg.open,
    &[data-state='open'] svg.close {
        display: inline;
    }

    &[data-state='open'] svg.open,
    & svg.close {
        display: none;
    }
`;

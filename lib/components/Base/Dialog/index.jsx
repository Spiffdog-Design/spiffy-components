import { useEffect, useState } from 'react';
import {
    Close,
    Content as RdxContent,
    Description as RdxDescription,
    Overlay as RdxOverlay,
    Portal,
    Root,
    Title as RdxTitle,
    Trigger,
} from '@radix-ui/react-dialog';
import styled from 'styled-components';
import cn from 'classnames';
import { X } from '@phosphor-icons/react';
import { Icon } from '@/components';

const Dialog = ({
    actions,
    className,
    children,
    description,
    footer,
    open = false,
    title,
    trigger,
    variant = 'primary',
    onOpenChange = () => null,
}) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleOpenClose = (state) => {
        setIsOpen(state);
        if (onOpenChange != null) {
            onOpenChange(state);
        }
    };

    const handleClose = () => {
        handleOpenClose(false);
    };

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const classes = cn(variant, className);

    return (
        <Root open={isOpen} onOpenChange={handleOpenClose}>
            <Trigger asChild>{trigger}</Trigger>
            <Portal>
                <Overlay className={classes} />
                <Container className={classes}>
                    <Heading className={classes}>
                        {title != null && <Title className={classes}>{title}</Title>}
                        {description != null && <Description>{description}</Description>}
                    </Heading>
                    <Content>
                        <Children className={classes}>{children}</Children>
                    </Content>
                    <Footer>
                        {footer != null && <FooterText>{footer}</FooterText>}
                        {actions != null && (
                            <Actions>{typeof actions === 'function' ? actions(handleClose) : actions}</Actions>
                        )}
                    </Footer>
                    <Close asChild>
                        <CloseButton className={classes} onClick={handleClose}>
                            <Icon>
                                <X weight="bold" />
                            </Icon>
                        </CloseButton>
                    </Close>
                </Container>
            </Portal>
        </Root>
    );
};
Dialog.displayName = 'Dialog';

export default Dialog;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 12px;
    background-color: var(--base-04);
    width: 100%;
`;

const Children = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 8px;

    color: var(--base-12);
    height: fit-content;
    overflow: hidden;
    overflow-y: auto;

    padding: 24px;
`;

const CloseButton = styled.div`
    --fill: var(--primary-11);
    --hover: var(--primary-06);
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 5px;
    right: 5px;

    background-color: 'transparent';
    border-radius: 4px;
    padding: 4px;

    & svg {
        fill: var(--fill);
    }
    &:hover {
        background-color: var(--hover);
    }

    &.alert {
        --fill: var(--alert-11);
        --hover: var(--alert-7);
    }
    &.success {
        --fill: var(--success-11);
        --hover: var(--success-7);
    }
    &.warning {
        --fill: var(--warning-11);
        --hover: var(--warning-7);
    }
`;

const Container = styled(RdxContent)`
    --theme-1: var(--primary-10);
    --theme-2: var(--primary-11);
    display: flex;
    flex-direction: column;

    background-color: var(--base-01);
    border-width: 3px;
    border-style: solid;
    border-radius: 6px;
    border-color: var(--theme-1);
    box-shadow: rgb(from var(--theme-2) r g b / 0.65) 0px 10px 20px -8px,
        rgb(from var(--theme-1) r g b / 0.5) 0px 4px 8px -12px;
    position: fixed;
    max-height: 85vh;
    max-width: 90vw;
    min-width: 200px;
    overflow: auto;
    height: fit-content;
    width: fit-content;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:focus {
        outline: none;
    }

    &.alert {
        --theme-1: var(--alert-10);
        --theme-2: var(--alert-11);
    }
    &.success {
        --theme-1: var(--success-10);
        --theme-2: var(--success-11);
    }
    &.warning {
        --theme-1: var(--warning-10);
        --theme-2: var(--warning-11);
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Description = styled(RdxDescription)`
    color: var(--base-12);
    font-size: 1.2rem;
    margin: 0;
`;

const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;

    background-color: var(--base-04);
    margin: 0;
    padding: 8px 12px;
`;

const FooterText = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    color: var(--base-12);
    font-size: 1.2rem;
`;

const Heading = styled.div`
    --color: var(--primary-04);

    background-color: var(--color);
    padding: 8px 12px;

    &.alert {
        --color: var(--alert-04);
    }
    &.success {
        --color: var(--success-04);
    }
    &.warning {
        --color: var(--warning-04);
    }
`;

const Overlay = styled(RdxOverlay)`
    --color: var(--primary-04);

    background-color: rgb(from var(--color) r g b / 0.5);
    backdrop-filter: blur(2px);
    inset: 0;
    position: fixed;

    &.alert {
        --color: var(--alert-04);
    }
    &.success {
        --color: var(--success-04);
    }
    &.warning {
        --color: var(--warning-04);
    }
`;

const Title = styled(RdxTitle)`
    --color: var(--primary-11);

    margin: 0;
    font-weight: 700;
    color: var(--color);
    font-size: 1.6rem;
    text-transform: uppercase;

    &.alert {
        --color: var(--alert-11);
    }
    &.success {
        --color: var(--success-11);
    }
    &.warning {
        --color: var(--warning-11);
    }
`;

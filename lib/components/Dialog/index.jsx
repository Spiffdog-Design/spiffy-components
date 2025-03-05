import styled from 'styled-components';
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

import { Icons } from '/lib';
import { useEffect, useState } from 'react';

const getVariantColor = (theme, variant = 'primary', code = 12) => theme.colors[variant][code];

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 12px;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.primary[4]};
    width: 100%;
`;

const Children = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 8px;

    color: ${({ theme }) => theme.colors.primary[12]};
    height: fit-content;
    overflow: hidden;
    overflow-y: auto;

    padding: 24px;
`;

const CloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 3px;
    right: 3px;

    background-color: 'transparent';
    border-radius: 4px;
    padding: 4px;

    & svg {
        fill: ${({ theme }) => theme.colors.primary[12]};
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[7]};
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Container = styled(RdxContent)`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.primary[1]};

    border-width: ${({ variant }) => (variant === 'primary' ? 0 : '5px')};
    border-style: solid;
    border-color: ${({ theme, variant }) =>
        variant === 'primary' ? 'transparent' : getVariantColor(theme, variant, 10)};
    border-radius: 6px;
    box-shadow: ${({ theme, variant }) => getVariantColor(theme, variant, 12)} 0px 10px 38px -10px,
        ${({ theme, variant }) => getVariantColor(theme, variant, 10)} 0px 10px 20px -15px;
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
`;

const Description = styled(RdxDescription)`
    color: ${({ theme }) => theme.colors.primary[12]};
    font-size: 1.2rem;
    margin: 0;
`;

const Footer = styled.div`
    color: ${({ theme }) => theme.colors.primary[12]};
    font-size: 1.2rem;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.primary[4]};
    padding: 8px 12px 4px;
`;

const Heading = styled.div`
    background-color: ${({ theme }) => theme.colors.primary[4]};
    padding: 8px 12px;
`;

const Overlay = styled(RdxOverlay)`
    background-color: ${({ theme }) => theme.colors.primary[12] + 'cc'};
    position: fixed;
    inset: 0;
`;

const Title = styled(RdxTitle)`
    margin: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary[12]};
    font-size: 1.6rem;
    text-transform: uppercase;
`;

const Dialog = ({
    actions,
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

    return (
        <Root open={isOpen} onOpenChange={handleOpenClose}>
            <Trigger asChild>{trigger}</Trigger>
            <Portal>
                <Overlay />
                <Container variant={variant}>
                    <Heading>
                        {title != null && <Title variant={variant}>{title}</Title>}
                        {description != null && <Description>{description}</Description>}
                    </Heading>
                    <Content>
                        <Children variant={variant}>{children}</Children>
                        {footer != null && <Footer>{footer}</Footer>}
                    </Content>
                    {actions != null && (
                        <Actions>{typeof actions === 'function' ? actions(handleClose) : actions}</Actions>
                    )}
                    <Close asChild>
                        <CloseButton onClick={handleClose}>
                            <Icons.X size={24} weight="bold" />
                        </CloseButton>
                    </Close>
                </Container>
            </Portal>
        </Root>
    );
};

export default Dialog;

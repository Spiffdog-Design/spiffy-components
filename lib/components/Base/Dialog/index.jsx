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
import { X } from '@phosphor-icons/react';

import { Icon } from '@/components';

const getVariantColor = (theme, variant = 'primary', code = 12) => theme.colors[variant][code];

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 12px;
    background-color: ${({ theme }) => theme.colors.base[4]};
    width: 100%;
`;

const Children = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 8px;

    color: ${({ theme }) => theme.colors.base[12]};
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
    top: 5px;
    right: 5px;

    background-color: 'transparent';
    border-radius: 4px;
    padding: 4px;

    & svg {
        fill: ${({ theme, variant }) => getVariantColor(theme, variant, 11)};
    }
    &:hover {
        background-color: ${({ theme, variant }) => getVariantColor(theme, variant, 7)};
    }
`;

const Container = styled(RdxContent)`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.base[1]};

    border-width: 3px;
    border-style: solid;
    border-color: ${({ theme, variant }) => getVariantColor(theme, variant, 10)};
    border-radius: 6px;
    box-shadow: rgb(from ${({ theme, variant }) => getVariantColor(theme, variant, 11)} r g b / 0.65) 0px 10px 20px -8px,
        rgb(from ${({ theme, variant }) => getVariantColor(theme, variant, 10)} r g b / 0.5) 0px 4px 8px -12px;
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Description = styled(RdxDescription)`
    color: ${({ theme }) => theme.colors.base[12]};
    font-size: 1.2rem;
    margin: 0;
`;

const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;

    background-color: ${({ theme }) => theme.colors.base[4]};
    margin: 0;
    padding: 8px 12px;
`;

const FooterText = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    color: ${({ theme }) => theme.colors.base[12]};
    font-size: 1.2rem;
`;

const Heading = styled.div`
    background-color: ${({ theme, variant }) => getVariantColor(theme, variant, 4)};
    padding: 8px 12px;
`;

const Overlay = styled(RdxOverlay)`
    background-color: rgb(from ${({ theme, variant }) => getVariantColor(theme, variant, 4)} r g b / 0.5);
    backdrop-filter: blur(2px);
    inset: 0;
    position: fixed;
`;

const Title = styled(RdxTitle)`
    margin: 0;
    font-weight: 700;
    color: ${({ theme, variant }) => getVariantColor(theme, variant, 11)};
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
                <Overlay variant={variant} />
                <Container variant={variant}>
                    <Heading variant={variant}>
                        {title != null && <Title variant={variant}>{title}</Title>}
                        {description != null && <Description>{description}</Description>}
                    </Heading>
                    <Content>
                        <Children variant={variant}>{children}</Children>
                    </Content>
                    <Footer>
                        {footer != null && <FooterText>{footer}</FooterText>}
                        {actions != null && (
                            <Actions>{typeof actions === 'function' ? actions(handleClose) : actions}</Actions>
                        )}
                    </Footer>
                    <Close asChild>
                        <CloseButton variant={variant} onClick={handleClose}>
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

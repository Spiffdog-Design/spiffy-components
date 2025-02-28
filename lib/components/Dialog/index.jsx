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
import styled, { css } from 'styled-components';

import { Icons } from '/lib';

const getVariantColor = (variant) => theme.colors[variant];

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 20px;
    gap: 12;
    width: 100%;
`;

const Children = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    gap: 8px;
    height: fit-content;
    overflow: hidden;
    overflow-y: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.primary[7]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary[7]};
    padding: 24px 0;
`;

const CloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 10px;
    right: 10px;

    background-color: ${({ theme }) => theme.colors.primary[1]};
    border-radius: 9999px;
    padding: 8px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[7]};
    }

    & svg {
        fill: ${({ theme }) => theme.colors.primary[12]};
    }
`;

const Content = styled(RdxContent)`
    display: flex;
    flex-direction: column;
    gap: 12px;

    background-color: ${({ theme }) => theme.colors.primary[1]};
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    padding: 25px;
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
    font-size: 1rem;
    margin: 0;
`;

const Footer = styled.div`
    color: ${({ theme }) => theme.colors.primary[11]};
    font-size: 0.8rem;
    margin: 0;
`;

const Heading = styled.div``;

const Overlay = styled(RdxOverlay)`
    background-color: ${({ theme }) => theme.colors.primary[12] + '99'};
    position: fixed;
    inset: 0;
`;

const Title = styled(RdxTitle)`
    margin: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary[12]};
    font-size: 1.2rem;
    text-transform: uppercase;
`;

const Dialog = ({
    variant = 'primary',
    actions,
    open,
    trigger,
    title,
    description,
    footer,
    children,
    onOpenChange = () => null,
}) => {
    const handleOpenClose = (open) => {
        if (onOpenChange != null) onOpenChange(open);
    };

    const classes = {};

    return (
        <Root open={open} onOpenChange={handleOpenClose}>
            <Trigger asChild>{trigger}</Trigger>
            <Portal>
                <Overlay />
                <Content>
                    <Heading>
                        {title != null && <Title>{title}</Title>}
                        {description != null && <Description>{description}</Description>}
                    </Heading>
                    <Children>{children}</Children>
                    {footer != null && <Footer>{footer}</Footer>}
                    {actions != null && <Actions>{actions}</Actions>}
                    <Close asChild>
                        <CloseButton onClick={() => handleOpenClose(false)}>
                            <Icons.XCircle size={32} />
                        </CloseButton>
                    </Close>
                </Content>
            </Portal>
        </Root>
    );
};

export default Dialog;

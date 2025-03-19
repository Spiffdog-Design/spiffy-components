// Button.js
import styled, { css } from 'styled-components';

import { Spinner } from '@/components';

const basicStyles = (color) => css`
    background-color: transparent;
    border: 3px solid transparent;
    color: ${color};
    &:hover {
        background-color: rgb(from ${color} r g b / 0.2);
        color: ${color};
    }
`;
const outlineStyles = (color) => css`
    background-color: transparent;
    border: 3px solid rgb(from ${color} r g b / 0.75);
    color: ${color};
    &:hover {
        background-color: rgb(from ${color} r g b / 0.2);
    }
`;
const solidStyles = (color, theme) => css`
    background-color: ${color};
    border: 3px solid ${color};
    color: ${theme.colors.base[1]};
    &:hover {
        background-color: hsl(from ${color} h s calc(l + 10));
        border-color: hsl(from ${color} h s calc(l + 10));
    }
`;

// Define the button styles for different states
const buttonStyles = {
    alert: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.alert[9])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.alert[9])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.alert[9], theme)}
        `,
    },

    primary: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.primary[11])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.primary[11])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.primary[9], theme)}
        `,
    },

    success: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.success[9])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.success[9])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.success[9], theme)}
        `,
    },

    warning: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.warning[9])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.warning[9])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.warning[9], theme)}
        `,
    },
};

// Create a styled button component
const StyledButton = styled.button`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 6px 12px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    height: fit-content;
    overflow: hidden;

    border-radius: ${({ rounded }) => (rounded === true ? '16px' : 'unset')};

    ${({ appearance, variant }) => {
        appearance = appearance ?? 'solid';
        variant = variant ?? 'primary';
        return buttonStyles[variant][appearance];
    }};
`;

const SpinnerContainer = styled.div`
    position: absolute;
    backdrop-filter: blur(2px);
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;

    border-radius: ${({ rounded }) => (rounded === true ? '16px' : 'unset')};
`;

const Button = ({ children, active, asInput = false, rounded, ...props }) => {
    return (
        <StyledButton disabled={active} rounded={rounded} {...props}>
            {children}
            {active === true && (
                <SpinnerContainer rounded={rounded} {...props}>
                    <Spinner />
                </SpinnerContainer>
            )}
        </StyledButton>
    );
};
Button.displayName = 'Button';

export default Button;

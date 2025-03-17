// Button.js
import styled, { css } from 'styled-components';

import { Spinner } from '@/components';

const basicStyles = (color, hover) => css`
    background-color: transparent;
    box-shadow: 0 0 0 3px transparent;
    color: ${color};
    &:hover {
        background-color: ${hover};
        box-shadow: 0 0 0 3px ${hover};
    }
`;
const outlineStyles = (color, hover) => css`
    background-color: transparent;
    box-shadow: 0 0 0 3px ${color};
    color: ${color};
    &:hover {
        background-color: ${hover};
    }
`;
const solidStyles = (color, hover) => css`
    background-color: ${color};
    box-shadow: 0 0 0 3px ${color};
    color: ${({ theme }) => theme.colors.primary[1]};
    &:hover {
        background-color: ${hover};
        box-shadow: 0 0 0 3px ${hover};
    }
`;

// Define the button styles for different states
const buttonStyles = {
    alert: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.alert[9], theme.colors.alert[4])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.alert[9], theme.colors.alert[4])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.alert[9], theme.colors.alert[11])}
        `,
    },

    info: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.info[9], theme.colors.info[4])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.info[9], theme.colors.info[4])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.info[9], theme.colors.info[11])}
        `,
    },

    primary: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.primary[12], theme.colors.primary[7])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.primary[12], theme.colors.primary[7])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.primary[12], theme.colors.primary[11])}
        `,
    },

    success: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.success[9], theme.colors.success[4])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.success[9], theme.colors.success[4])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.success[9], theme.colors.success[11])}
        `,
    },

    warning: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.warning[9], theme.colors.warning[3])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.warning[9], theme.colors.warning[3])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.warning[9], theme.colors.warning[10])}
        `,
    },
};

// Create a styled button component
const StyledButton = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 4px 12px;
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

const StyledInput = styled.input`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 4px 12px;
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
    return asInput ? (
        <StyledButton disabled={active} type="submit" {...props}>
            {children}
            {active === true && (
                <SpinnerContainer {...props}>
                    <Spinner />
                </SpinnerContainer>
            )}
        </StyledButton>
    ) : (
        <StyledButton disabled={active} rounded={rounded} {...props}>
            {children}
            {active === true && (
                <SpinnerContainer {...props}>
                    <Spinner />
                </SpinnerContainer>
            )}
        </StyledButton>
    );
};
Button.displayName = 'Button';

export default Button;

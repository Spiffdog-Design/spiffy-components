// Button.js
import styled, { css } from 'styled-components';

const basicStyles = (color, hover) => css`
    background-color: transparent;
    border: 3px solid transparent;
    color: ${color};
    &:hover {
        background-color: ${hover};
    }
`;
const outlineStyles = (color, hover) => css`
    background-color: transparent;
    border: 3px solid ${color};
    color: ${color};
    &:hover {
        background-color: ${hover};
    }
`;
const solidStyles = (color, hover) => css`
    background-color: ${color};
    border: 3px solid ${color};
    color: ${({ theme }) => theme.colors.primary[1]};
    &:hover {
        background-color: ${hover};
        border-color: ${hover};
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
const sizeStyles = {
    small: css`
        font-size: 14px;
        padding: 8px 16px;
    `,
    medium: css`
        font-size: 16px;
        padding: 10px 20px;
    `,
    large: css`
        font-size: 18px;
        padding: 12px 24px;
    `,
};

// Create a styled button component
const Button = styled.button`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;

    ${({ size }) => sizeStyles[size] ?? sizeStyles.medium}
    ${({ appearance, variant }) => {
        appearance = appearance ?? 'solid';
        variant = variant ?? 'primary';
        return buttonStyles[variant][appearance];
    }}
`;
Button.displayName = 'Button';

export default Button;

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
        border-color: ${hover};
        color: ${({ theme }) => theme.colors.primary[1]};
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
            ${({ theme }) => basicStyles(theme.colors.danger[9], theme.colors.danger[4])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.danger[9], theme.colors.danger[11])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.danger[9], theme.colors.danger[11])}
        `,
    },

    primary: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.info[9], theme.colors.info[4])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.info[9], theme.colors.info[11])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.info[9], theme.colors.info[11])}
        `,
    },

    success: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.success[9], theme.colors.success[4])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.success[9], theme.colors.success[11])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.success[9], theme.colors.success[11])}
        `,
    },

    warning: {
        basic: css`
            ${({ theme }) => basicStyles(theme.colors.warning[8], theme.colors.warning[4])}
        `,
        outline: css`
            ${({ theme }) => outlineStyles(theme.colors.warning[9], theme.colors.warning[11])}
        `,
        solid: css`
            ${({ theme }) => solidStyles(theme.colors.warning[9], theme.colors.warning[11])}
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

const roundedStyles = {
    small: css`
        border-radius: 6px;
    `,
    medium: css`
        border-radius: 8px;
    `,
    large: css`
        border-radius: 12px;
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

    ${({ rounded, size }) => (rounded === true ? roundedStyles[size] : null)}
    ${({ size }) => sizeStyles[size] ?? sizeStyles.medium}
    ${({ appearance, variant }) => {
        appearance = appearance ?? 'solid';
        variant = variant ?? 'primary';
        return buttonStyles[variant][appearance];
    }}
`;

export default Button;

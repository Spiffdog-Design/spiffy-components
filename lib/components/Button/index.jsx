// Button.js
import styled, { css } from 'styled-components';

// Define the button styles for different states
const buttonStyles = {
    alert: {
        basic: css`
            background-color: transparent;
            color: ${({ theme }) => theme.colors.danger[10]};
            &:hover {
                background-color: ${({ theme }) => theme.colors.danger[10]};
                color: ${({ theme }) => theme.colors.primary[1]};
            }
        `,
        outline: css`
            background-color: transparent;
            border: 2px solid #dc3545;
            color: #dc3545;
            &:hover {
                background-color: #dc3545;
                color: white;
            }
        `,
        solid: css`
            background-color: #dc3545;
            border: 2px solid #dc3545;
            color: white;
            &:hover {
                background-color: #c82333;
                border: 2px solid #c82333;
            }
        `,
    },

    primary: {
        basic: css`
            background-color: transparent;
            color: #007bff;
            &:hover {
                background-color: #007bff;
                color: white;
            }
        `,
        outline: css`
            background-color: transparent;
            border: 2px solid #007bff;
            color: #007bff;
            &:hover {
                background-color: #007bff;
                color: white;
            }
        `,
        solid: css`
            background-color: #007bff;
            border: 2px solid #007bff;
            color: white;
            &:hover {
                background-color: #0056b3;
                border: 2px solid #0056b3;
            }
        `,
    },

    success: {
        basic: css`
            background-color: transparent;
            color: #28a745;
            &:hover {
                background-color: #28a745;
                color: white;
            }
        `,
        outline: css`
            background-color: transparent;
            border: 2px solid #28a745;
            color: #28a745;
            &:hover {
                background-color: #28a745;
                color: white;
            }
        `,
        solid: css`
            background-color: #28a745;
            border: 2px solid #28a745;
            color: white;
            &:hover {
                background-color: #218838;
                border: 2px solid #218838;
            }
        `,
    },

    warning: {
        basic: css`
            background-color: transparent;
            color: #ffc107;
            &:hover {
                background-color: #ffc107;
                color: black;
            }
        `,
        outline: css`
            background-color: transparent;
            border: 2px solid #ffc107;
            color: #ffc107;
            &:hover {
                background-color: #ffc107;
                color: black;
            }
        `,
        solid: css`
            background-color: #ffc107;
            border: 2px solid #ffc107;
            color: black;
            &:hover {
                background-color: #e0a800;
                border: 2px solid #e0a800;
            }
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
    transition: background-color 200ms, color 200ms;

    ${({ rounded, size }) => (rounded === true ? roundedStyles[size] : null)}
    ${({ size }) => sizeStyles[size] ?? sizeStyles.medium}
    ${({ appearance, variant }) => {
        appearance = appearance ?? 'solid';
        variant = variant ?? 'primary';
        return buttonStyles[variant][appearance];
    }}
`;

export default Button;

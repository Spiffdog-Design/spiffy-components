import styled, { css } from 'styled-components';
import cn from 'classnames';

import { Spinner } from '@/components';

// Create a styled button css template literal.
// This is used for buttons and form submit inputs.
export const buttonStyles = css`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: unset;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    height: 100%;
    overflow: hidden;
    text-transform: uppercase;

    &.rounded {
        border-radius: 999px;
    }
    &.basic {
        --color: var(--primary-11);

        background-color: transparent;
        border: 3px solid transparent;
        color: var(--color);

        &:hover {
            background-color: rgb(from var(--color) r g b / 0.2);
            color: var(--color);
        }

        &.alert {
            --color: var(--alert-09);
        }
        &.success {
            --color: var(--success-09);
        }
        &.warning {
            --color: var(--warning-09);
        }
    }
    &.outline {
        --color: var(--primary-11);

        background-color: transparent;
        border: 3px solid rgb(from var(--color) r g b / 0.75);
        color: var(--color);

        &:hover {
            background-color: rgb(from var(--color) r g b / 0.2);
        }

        &.alert {
            --color: var(--alert-09);
        }
        &.success {
            --color: var(--success-09);
        }
        &.warning {
            --color: var(--warning-09);
        }
    }
    &.solid {
        --color: var(--primary-09);

        background-color: var(--color);
        border: 3px solid var(--color);
        color: var(--base-01);

        &:hover {
            background-color: hsl(from var(--color) h s calc(l + 10));
            border-color: hsl(from var(--color) h s calc(l + 10));
        }

        &.alert {
            --color: var(--alert-09);
        }
        &.success {
            --color: var(--success-09);
        }
        &.warning {
            --color: var(--warning-09);
        }
    }
`;

const StyledButton = styled.button`
    ${buttonStyles}
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

export const Button = ({
    busy = false,
    appearance = 'solid',
    children,
    className,
    rounded = false,
    variant = 'primary',
    ...props
}) => {
    const classes = cn(className, variant, appearance, { rounded: rounded === true });
    return (
        <StyledButton disabled={busy} className={classes} {...props}>
            {children}
            {busy === true && (
                <SpinnerContainer rounded={rounded} {...props}>
                    <Spinner />
                </SpinnerContainer>
            )}
        </StyledButton>
    );
};
Button.displayName = 'Button';

import styled from 'styled-components';
import cn from 'classnames';

import { Spinner } from '@/components';

// Create a styled button component
const StyledButton = styled.button`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: ${({ rounded }) => (rounded === true ? '999px' : 'unset')};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    height: fit-content;
    overflow: hidden;
    padding: 6px 12px;
    text-transform: uppercase;

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

const SpinnerContainer = styled.div`
    position: absolute;
    backdrop-filter: blur(2px);
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;

    border-radius: ${({ rounded }) => (rounded === true ? '16px' : 'unset')};
`;

const Button = ({ active, appearance = 'solid', children, className, rounded, variant = 'primary', ...props }) => {
    const classes = cn(className, variant, appearance);
    return (
        <StyledButton disabled={active} rounded={rounded} className={classes} {...props}>
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

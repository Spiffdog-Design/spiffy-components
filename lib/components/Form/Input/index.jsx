import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styled, { css } from 'styled-components';

const Input = forwardRef(({ id = null, required = false, ...props }, ref) => {
    const inputRef = useRef(null);

    const handleClick = (evt) => {
        evt.currentTarget.focus();
        evt.currentTarget.select();
    };

    useImperativeHandle(ref, () => inputRef.current);

    return (
        <Root>
            <BaseInput id={id} ref={inputRef} onClick={handleClick} {...props} />
        </Root>
    );
});
Input.displayName = 'Input';

export default Input;

const variants = {
    alert: css`
        border-color: ${({ theme }) => theme.colors.alert[9]};
    `,
    info: css`
        border-color: ${({ theme }) => theme.colors.info[9]};
    `,
    primary: css`
        border-color: ${({ theme }) => theme.colors.primary[12]};
    `,
    success: css`
        border-color: ${({ theme }) => theme.colors.success[9]};
    `,
    warning: css`
        border-color: ${({ theme }) => theme.colors.warning[9]};
    `,
};

const BaseInput = styled.input`
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.primary[12]};
    height: 38px;
    outline: none;
    width: 100%;
    padding-left: 8px;

    &[type='number'] {
        appearance: textfield;
        -moz-appearance: textfield;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

const Root = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;

    border-style: solid;
    border-width: 3px;
    overflow: hidden;
    width: 100%;

    & button {
        height: 38px;
    }

    ${({ variant }) => variants[variant]}
`;

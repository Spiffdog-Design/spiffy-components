import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const Input = forwardRef(({ className, id = null, variant = 'primary', ...props }, ref) => {
    const classes = cn(className, variant);
    const inputRef = useRef(null);

    const handleClick = (evt) => {
        evt.currentTarget.focus();
        evt.currentTarget.select();
    };

    useImperativeHandle(ref, () => inputRef.current);

    return (
        <Root className={classes}>
            <BaseInput className={variant} id={id} ref={inputRef} onClick={handleClick} {...props} />
        </Root>
    );
});
Input.displayName = 'Input';

export default Input;

const BaseInput = styled.input`
    --color: var(--primary-02);
    --background: transparent;
    background: var(--background);
    border: 0;
    color: var(--base-12);
    height: 38px;
    outline: none;
    width: 100%;
    padding-left: 8px;

    &:hover,
    &:focus {
        --background: var(--color);
    }
    &[type='number'] {
        appearance: textfield;
        -moz-appearance: textfield;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &.alert {
        --color: var(--alert-02);
    }
    &.success {
        --color: var(--success-02);
    }
    &.warning {
        --color: var(--warning-02);
    }
`;

const Root = styled.div`
    --color: var(--primary-12);

    display: grid;
    grid-template-columns: 1fr auto auto;

    border-color: var(--color);
    border-style: solid;
    border-width: 3px;
    overflow: hidden;
    width: 100%;

    & button {
        height: 38px;
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
`;

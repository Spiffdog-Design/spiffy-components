import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { X } from '@phosphor-icons/react';

import { Button } from '@/components';
import { isNullOrEmpty } from '@/utilities';

const Input = forwardRef(({ actions = null, id = null, required = false, value = null, onChange, ...props }, ref) => {
    const [input, setInput] = useState(value ?? '');
    const innerRef = useRef(null);

    const handleChange = (event) => {
        setInput(event.target.value);
        if (onChange != null) {
            onChange(event);
        }
    };

    const handleClick = () => {
        if (innerRef.current != null) {
            innerRef.current.focus();
            innerRef.current.select();
        }
    };

    useImperativeHandle(ref, () => innerRef.current);

    return (
        <Root>
            <BaseInput id={id} ref={innerRef} value={input} onChange={handleChange} onClick={handleClick} {...props} />
            {!isNullOrEmpty(input) && (
                <ClearButton appearance="basic" onClick={() => setInput('')}>
                    <X size={20} weight="bold" />
                </ClearButton>
            )}
            {actions != null && <ActionContainer>{actions}</ActionContainer>}
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

const ClearButton = styled(Button)`
    height: 100%;
`;

const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BaseInput = styled.input`
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.primary[12]};
    height: 38px;
    outline: none;
    padding: 0 12px;
    width: 100%;

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
    display: flex;
    flex-direction: row;
    align-items: center;

    border-style: solid;
    border-width: 3px;
    overflow: hidden;
    width: 100%;

    & button {
        height: 100%;
    }

    ${({ variant }) => variants[variant]}
`;

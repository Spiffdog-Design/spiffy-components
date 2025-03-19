import { useDebug } from '@spiffdog/spiffy-hooks';
import { Children, cloneElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const styles = {
    alert: css`
        border-color: ${({ theme }) => theme.colors.alert[9]};
    `,
    primary: css`
        border-color: ${({ theme }) => theme.colors.primary[9]};
    `,
    success: css`
        border-color: ${({ theme }) => theme.colors.success[9]};
    `,
    warning: css`
        border-color: ${({ theme }) => theme.colors.warning[8]};
    `,
};

const ButtonBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 40px;
    width: fit-content;

    border: 3px solid transparent;
    overflow: hidden;

    & button {
        height: 100%;
    }

    border-radius: ${({ rounded }) => (rounded === true ? '16px' : 'unset')};

    ${({ border, variant }) => (border == true ? styles[variant] ?? styles.primary : null)}
`;

const addIndex = (arr, value, multiple) => {
    return multiple ? [...new Set([...arr, value])].sort() : [value];
};
const inArray = (arr, value) => {
    return (arr ?? []).includes(value);
};
const removeIndex = (arr, value, multiple) => {
    return multiple ? [...new Set([...arr.filter((i) => i != value)])] : [];
};
const toggleIndex = (arr, value, multiple) => {
    return inArray(arr, value) ? removeIndex(arr, value, multiple) : addIndex(arr, value, multiple);
};

const ButtonBar = ({
    border = false,
    children,
    className,
    multiple = false,
    rounded = false,
    value = [],
    variant = 'primary',
    onActiveClick = (value) => console.log(value),
    ...props
}) => {
    const [activeIds, setActiveIds] = useState(Array.isArray(value) ? value : [value]);

    const handleClick = (idx) => () => {
        const list = toggleIndex(activeIds, idx, multiple);
        setActiveIds(list);
        onActiveClick(list);
    };

    useEffect(() => {
        if (multiple === false && Array.isArray(activeIds) && activeIds.length > 1) {
            setActiveIds([activeIds[0]]);
        }
    }, [multiple]);

    useEffect(() => {
        if (value != null) {
            if (Array.isArray(value)) {
                setActiveIds(value);
            } else {
                setActiveIds([value]);
            }
        }
    }, [value]);

    return (
        <ButtonBarContainer border={border} rounded={rounded} variant={variant} {...props}>
            {Children.map(children, (child, index) => {
                const item = child;
                const activeProps = { appearance: inArray(activeIds, index) ? 'solid' : 'basic' };
                return cloneElement(item, {
                    ...activeProps,
                    variant,
                    rounded: false,
                    onClick: handleClick(index),
                });
            })}
        </ButtonBarContainer>
    );
};
ButtonBar.displayName = 'ButtonBar';

export default ButtonBar;

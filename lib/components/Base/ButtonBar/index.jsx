import { Children, cloneElement, useEffect, useState } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

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

    const classes = cn(className, variant, { border: border === true });

    return (
        <ButtonBarContainer rounded={rounded} className={classes} {...props}>
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

const ButtonBarContainer = styled.div`
    --border-color: transparent;
    --color: var(--primary-09);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 40px;
    width: fit-content;

    border: 2px solid var(--border-color);
    border-radius: ${({ rounded }) => (rounded === true ? '999px' : 'unset')};
    border-color: var(--border-color);
    overflow: hidden;

    & button {
        height: 100%;
    }

    &.border {
        --border-color: var(--color);
    }
    &.alert {
        --color: var(--alert-09);
    }
    &.success {
        --color: var(--success-09);
    }
    &.warning {
        --color: var(--warning-08);
    }
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

import { Children, cloneElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const styles = {
    alert: css`
        border: 1px solid red;
    `,
    primary: css`
        border: 1px solid blue;
    `,
    success: css`
        border: 1px solid green;
    `,
    warning: css`
        border: 1px solid yellow;
    `,
};

const ButtonBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;

    border-radius: 8px;
    ${({ variant }) => styles[variant] ?? styles.variant}
`;

const ButtonBar = ({
    active = 0,
    size = 'medium',
    variant = 'primary',
    className,
    children,
    onActiveClick = (index) => console.log(index),
    ...props
}) => {
    const [activeIdx, setActiveIdx] = useState(active);

    const handleClick = (idx) => () => {
        setActiveIdx(idx);
        onActiveClick(idx);
    };

    useEffect(() => {
        setActiveIdx(active);
    }, [active]);

    return (
        <ButtonBarContainer variant={variant} {...props}>
            {Children.map(children, (child, index) => {
                const item = child;
                const activeProps = { appearance: index === activeIdx ? 'solid' : 'outline' };
                return cloneElement(item, {
                    ...activeProps,
                    variant,
                    size,
                    rounded: false,
                    onClick: handleClick(index),
                });
            })}
        </ButtonBarContainer>
    );
};

export default ButtonBar;

import { Children, cloneElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const styles = {
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

const ButtonBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;

    border-radius: 8px;
    border: 3px solid transparent;
    overflow: hidden;

    ${({ showBorder, variant }) => (showBorder == true ? styles[variant] ?? styles.variant : null)}
`;

const ButtonBar = ({
    active = 0,
    size = 'medium',
    variant = 'primary',
    showBorder = true,
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
        <ButtonBarContainer showBorder={showBorder} variant={variant} {...props}>
            {Children.map(children, (child, index) => {
                const item = child;
                const activeProps = { appearance: index === activeIdx ? 'solid' : 'basic' };
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
ButtonBar.displayName = 'ButtonBar';

export default ButtonBar;

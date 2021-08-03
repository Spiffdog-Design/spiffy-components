import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTheme } from '../theme/Provider';

const Styled = styled.button`
    font-size: ${({ size, theme }) => getFontSize(size, theme)};
    background: none;
    border: 0;

    &:disabled {
        opacity: ${({ theme }) => theme.disabled.opacity};
    }
`;

export const Button = forwardRef(({ children, intent, size, ...props }, ref) => {
    const theme = useTheme();
    return (
        <Styled ref={ref} intent={intent} size={size} theme={theme} {...props}>
            {children}
        </Styled>
    );
});

Button.propTypes = {
    children: PropTypes.node,
    intent: PropTypes.oneOf(['default', 'outline', 'minimal']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
Button.defaultProps = {
    intent: 'default',
    size: 'md',
};

function getFontSize(size, theme) {
    return size === 'sm' ? `${theme.sizes[3]}px` : size === 'lg' ? `${theme.sizes[5]}px` : `${theme.sizes[4]}px`;
}

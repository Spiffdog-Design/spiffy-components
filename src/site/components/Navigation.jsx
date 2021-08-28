import { forwardRef, memo } from 'react';
import styled from 'styled-components';
import { useTheme } from 'components';

const Navigation = forwardRef(({ children }, ref) => {
    const theme = useTheme();

    return (
        <Container ref={ref} theme={theme}>
            {children}
        </Container>
    );
});

export default memo(Navigation);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
`;

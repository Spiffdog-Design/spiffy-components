import { forwardRef, memo } from 'react';
import styled from 'styled-components';
import { useTheme } from 'components';

const Content = forwardRef(({ children }, ref) => {
    const theme = useTheme();

    return (
        <Container ref={ref} theme={theme}>
            {children}
        </Container>
    );
});

export default memo(Content);

const Container = styled.div``;

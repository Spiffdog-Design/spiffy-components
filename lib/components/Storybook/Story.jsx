import { useState } from 'react';
import styled from 'styled-components';

const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    background-color: ${({ theme }) => theme.colors.primary[3]};
    padding: 8px;
    width: 100%;
`;

const Container = styled.div`
    & * {
        box-sizing: border-box;
    }
    border: 1px solid ${({ theme }) => theme.colors.primary[6]};
    width: 100%;
`;

const Content = styled.div`
    padding: 20px;
`;

const Root = ({ children }) => {
    return (
        <AppRoot>
            <Container>
                <Line>
                    <ThemeSwitcher />
                </Line>
                <Content>{children}</Content>
            </Container>
        </AppRoot>
    );
};

export default Root;

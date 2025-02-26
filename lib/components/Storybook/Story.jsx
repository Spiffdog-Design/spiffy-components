import { useState } from 'react';
import styled from 'styled-components';

const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    background-color: #eee;
    padding: 8px;
    width: 100%;
`;

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary[1]};

    & * {
        box-sizing: border-box;
    }
    border: 1px solid lightgray;
    width: 100%;
`;

const Content = styled.div`
    padding: 20px;
`;

const Root = ({ children, ...props }) => {
    const [theme, setTheme] = useState(defaultTheme);

    const handleThemeChange = (theme) => {
        setTheme(theme);
    };

    return (
        <AppRoot>
            <Container>
                <Line>
                    <ThemeSwitcher onChange={handleThemeChange} />
                </Line>
                <Content>{children}</Content>
            </Container>
        </AppRoot>
    );
};

export default Root;

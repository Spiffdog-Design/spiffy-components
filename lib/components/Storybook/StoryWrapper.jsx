import styled from 'styled-components';

import { AppRoot, ThemeSwitcher } from '@/components';
import './StoryWrapper.css';

const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    background-color: ${({ theme }) => theme.colors.primary[4]};
    padding: 8px;
    width: 100%;
`;

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    border: 1px solid ${({ theme }) => theme.colors.primary[7]};
    height: 100%;
    width: 100%;
`;

const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.primary[1]};
    padding: 20px;
    height: 100%;
`;

const StoryWrapper = ({ children, ...props }) => {
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

export default StoryWrapper;

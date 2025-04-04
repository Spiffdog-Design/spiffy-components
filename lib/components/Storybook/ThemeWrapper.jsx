import styled from 'styled-components';

import { AppRoot, Button, Icon, ThemeSwitcher } from '@/components';
import './ThemeWrapper.css';
import { ArrowsClockwise } from '@phosphor-icons/react';

const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.primary[4]};
    padding: 8px;
    width: 100%;

    & .title {
        color: var(--primary-11);
        padding-left: 8px;
    }
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

const ThemeWrapper = ({ children, title, ...props }) => {
    const _this = window;
    return (
        <AppRoot>
            <Container>
                <Line>
                    <h3 className="title">{title}</h3>
                    <div>
                        <ThemeSwitcher />
                        <Button appearance="basic" rounded={true} onClick={() => _this.location.reload()}>
                            <Icon>
                                <ArrowsClockwise />
                            </Icon>
                        </Button>
                    </div>
                </Line>
                <Content>{children}</Content>
            </Container>
        </AppRoot>
    );
};

export default ThemeWrapper;

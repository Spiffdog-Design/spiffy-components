import styled from 'styled-components';
import { Appearance, Button, Header, Panel, Stack, ThemeProvider } from 'components';

import Content from 'site/components/Content';
import Navigation from 'site/components/Navigation';

import './App.css';

const newTheme = {
    disabled: {
        opacity: 0.85,
    },
    fonts: {
        headings: {
            family: ['"Source Serif Pro"', 'serif'],
        },
        text: {
            family: ['Roboto', 'sans-serif'],
        },
    },
};

export const App = () => {
    return (
        <ThemeProvider theme={newTheme}>
            <Layout>
                <Navigation>
                    <Button appearance={Appearance.MINIMAL}>Plop</Button>
                </Navigation>
                <Content>
                    <Panel>
                        <Stack>
                            <Header size={1}>Header Size 1</Header>
                            <Header size={2}>Header Size 2</Header>
                            <Header size={3}>Header Size 3</Header>
                            <Header size={4}>Header Size 4</Header>
                            <Header size={5}>Header Size 5</Header>
                            <Header size={6}>Header Size 6</Header>
                        </Stack>
                    </Panel>
                </Content>
            </Layout>
        </ThemeProvider>
    );
};

const Layout = styled.div`
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-rows: 1fr;
    min-height: 100vh;
`;

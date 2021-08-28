import { forwardRef, memo } from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

import { Colors, Intent, useTheme } from 'components';
import { hasEntries } from '../utilities/arrayHelpers';

const Panel = forwardRef(({ intent = Intent.DEFAULT, children, title, ...props }, ref) => {
    const color = intent === Intent.DEFAULT ? 'transparent' : Colors[intent];
    const theme = useTheme();
    return (
        <Container ref={ref} color={color} theme={theme} {...props}>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Container>
    );
});

export default memo(Panel);

const Title = styled.div`
    display: flex;
    flex-direction: row;
    color: ${() => Colors.black};
    font-size: 1.5rem;
    font-weight: 700;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 24px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px 24px 24px;
    min-width: 400px;

    & > * + * {
        margin-top: 8px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${() => Colors.white};
    border-radius: 8px;
    box-shadow: inset 0 0 1px 1px ${({ color }) => (color === 'transparent' ? color : chroma(color).brighten())}, 0 0 1px 0px ${({ color }) => color};
    font-family: ${({ theme }) => (hasEntries(theme.fonts.text.family) ? theme.fonts.text.family.join(',') : undefined)};
    overflow: hidden;

    & > * + * {
        margin-top: 8px;
    }
`;

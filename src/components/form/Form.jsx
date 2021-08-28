import { forwardRef, memo } from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

import { Colors, Intent, useTheme } from 'components';
import { hasEntries } from '../utilities/arrayHelpers';

const Form = forwardRef(({ intent = Intent.DEFAULT, children, title, ...props }, ref) => {
    const theme = useTheme();
    const color = intent === Intent.DEFAULT ? 'transparent' : Colors[intent];
    return (
        <Container ref={ref} color={color} theme={theme} {...props}>
            {children}
        </Container>
    );
});

export default memo(Form);

const Container = styled.form`
    display: flex;
    flex-direction: column;

    background-color: ${() => Colors.white};
    border-radius: 8px;
    box-shadow: inset 0 0 1px 1px ${({ color }) => (color === 'transparent' ? color : chroma(color).brighten())}, 0 0 1px 0px ${({ color }) => color};
    font-family: ${({ theme }) => (hasEntries(theme.fonts.text.family) ? theme.fonts.text.family.join(',') : undefined)};
    overflow: hidden;
`;

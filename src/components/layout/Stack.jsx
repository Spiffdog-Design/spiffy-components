import { forwardRef, memo } from 'react';
import styled from 'styled-components';
import { useTheme } from 'components/theme/Provider';

import { hasEntries } from '../utilities/arrayHelpers';

export const Stack = forwardRef(({ children }, ref) => {
    const theme = useTheme();

    return (
        <Styled ref={ref} theme={theme}>
            {children}
        </Styled>
    );
});

export default memo(Stack);

const Styled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    font-family: ${({ theme }) => (hasEntries(theme.fonts.text.family) ? theme.fonts.text.family.join(',') : undefined)};

    & > * {
        margin-top: 0;
        margin-bottom: 0;
    }
    & > * + * {
        margin-top: ${({ theme }) => theme.ratio + 'rem'};
    }
`;

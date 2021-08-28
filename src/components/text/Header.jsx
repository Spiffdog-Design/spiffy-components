import { forwardRef, memo } from 'react';
import styled from 'styled-components';

import { useTheme } from '../theme/Provider';
import { hasEntries } from '../utilities/arrayHelpers';

const Header = forwardRef(({ children, size = 1 }, ref) => {
    const theme = useTheme();

    return size === 1 ? (
        <H6 ref={ref} theme={theme}>
            {children}
        </H6>
    ) : size === 2 ? (
        <H5 ref={ref} theme={theme}>
            {children}
        </H5>
    ) : size === 3 ? (
        <H4 ref={ref} theme={theme}>
            {children}
        </H4>
    ) : size === 4 ? (
        <H3 ref={ref} theme={theme}>
            {children}
        </H3>
    ) : size === 5 ? (
        <H2 ref={ref} theme={theme}>
            {children}
        </H2>
    ) : size === 6 ? (
        <H1 ref={ref} theme={theme}>
            {children}
        </H1>
    ) : null;
});

export default memo(Header);

const H1 = styled.h1`
    font-family: ${({ theme }) => (hasEntries(theme.fonts.headings.family) ? theme.fonts.headings.family.join(',') : undefined)};
    font-size: ${({ theme }) => theme.fonts.headings.sizes[0]};
    font-weight: 700;
`;

const H2 = styled.h2`
    font-family: ${({ theme }) => (hasEntries(theme.fonts.headings.family) ? theme.fonts.headings.family.join(',') : undefined)};
    font-size: ${({ theme }) => theme.fonts.headings.sizes[1]};
    font-weight: 700;
`;

const H3 = styled.h3`
    font-family: ${({ theme }) => (hasEntries(theme.fonts.headings.family) ? theme.fonts.headings.family.join(',') : undefined)};
    font-size: ${({ theme }) => theme.fonts.headings.sizes[2]};
    font-weight: 700;
`;

const H4 = styled.h4`
    font-family: ${({ theme }) => (hasEntries(theme.fonts.headings.family) ? theme.fonts.headings.family.join(',') : undefined)};
    font-size: ${({ theme }) => theme.fonts.headings.sizes[3]};
    font-weight: 700;
`;

const H5 = styled.h5`
    font-family: ${({ theme }) => (hasEntries(theme.fonts.headings.family) ? theme.fonts.headings.family.join(',') : undefined)};
    font-size: ${({ theme }) => theme.fonts.headings.sizes[4]};
    font-weight: 700;
`;

const H6 = styled.h6`
    font-family: ${({ theme }) => (hasEntries(theme.fonts.headings.family) ? theme.fonts.headings.family.join(',') : undefined)};
    font-size: ${({ theme }) => theme.fonts.headings.sizes[5]};
    font-weight: 700;
`;

import { forwardRef, memo } from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

import { Appearance, Colors, Intent, useTheme } from 'components';
import { hasEntries } from '../utilities/arrayHelpers';

const Button = forwardRef(({ appearance = Appearance.DEFAULT, intent = Intent.DEFAULT, ...props }, ref) => {
    const theme = useTheme();
    return appearance === Appearance.MINIMAL ? (
        <MinimalButton ref={ref} color={Colors[intent]} theme={theme} {...props} />
    ) : (
        <DefaultButton ref={ref} color={Colors[intent]} theme={theme} {...props} />
    );
});

export default memo(Button);

const BaseButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 0;
    border-radius: 4px;
    font-family: ${({ theme }) => (hasEntries(theme.fonts.text.family) ? theme.fonts.text.family.join(',') : undefined)};
    font-size: 10pt;
    font-weight: 700;
    outline: none;
    padding: 8px;
    text-transform: uppercase;
    user-select: none;

    & > * + * {
        margin-left: 4px;
    }
`;

const DefaultButton = styled(BaseButton)`
    background-color: ${({ color }) => chroma(color).brighten(0.25)};
    color: ${() => Colors.white};

    &:hover,
    &:focus {
        box-shadow: inset 0 0 2px 1px ${({ color }) => chroma(color).darken(2)}, 0 0 1px 0px ${({ color }) => chroma(color).darken(2)};
    }

    &:active {
        background-color: ${({ color }) => chroma(color).darken()};
    }
`;

const MinimalButton = styled(BaseButton)`
    background-color: ${() => Colors.white};
    color: ${({ color }) => color};

    &:hover,
    &:focus {
        background-color: ${({ color }) => chroma(color).luminance(0.75)};
    }

    &:focus {
        box-shadow: inset 0 0 1px 1px ${({ color }) => color}, 0 0 1px 0px ${({ color }) => color},
            inset 0px 1px 2px 0px ${({ color }) => chroma(color).alpha(0.85)};
    }

    &:active {
        background-color: ${({ color }) => chroma(color).luminance(0.5)};
        color: ${({ color }) => chroma(color).darken(0.85)};
    }
`;

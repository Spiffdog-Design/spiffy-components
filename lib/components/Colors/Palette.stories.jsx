import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useTheme } from '@/components';

import { Palette } from './Palette';

const meta = {
    title: 'Colors/Palette',
    component: Palette,
    argTypes: {
        type: {
            options: ['alpha', 'solid'],
            control: { type: 'radio' },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        type: 'solid',
    },

    render: ({ type }) => (
        <ThemeWrapper>
            <ColorPalette type={type} />
        </ThemeWrapper>
    ),
};

const ColorPalette = ({ type = 'solid' }) => {
    const { theme, themeName } = useTheme();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div
                style={{ fontWeight: 700, textTransform: 'uppercase', color: theme.colors.solid.base[11] }}
            >{`theme.colors.${type} (${themeName})`}</div>
            {Object.keys(theme.colors[type]).map((name) => (
                <div>
                    <div style={{ fontWeight: 700, textTransform: 'uppercase', color: theme.colors.solid.base[11] }}>
                        {name}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                        {Object.keys(theme.colors[type][name]).map((variant) => {
                            const code = theme.colors[type][name][variant];
                            return <Palette color={code}>{variant}</Palette>;
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

import ThemeWrapper from '@/components/Storybook/ThemeWrapper';
import { useTheme } from '@/components';

import { Palette } from './Palette';

const meta = {
    title: 'Colors/Full Palette',
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

    const paletteKeys = Object.keys(theme.palette).filter((name) => {
        if (type === 'alpha' && name.endsWith('A')) return true;
        if (type === 'solid' && !name.endsWith('A')) return true;
        return false;
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div
                style={{
                    fontWeight: theme.font.weight.bold,
                    textTransform: 'uppercase',
                    color: theme.colors.solid.base[11],
                }}
            >
                <span>theme.palette ({themeName})</span>
            </div>
            {paletteKeys.map((name) => (
                <div>
                    <div
                        style={{
                            fontWeight: theme.font.weight.bold,
                            textTransform: 'uppercase',
                            color: theme.colors.solid.base[11],
                        }}
                    >
                        {name}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
                        {Object.keys(theme.palette[name]).map((variant) => {
                            const code = theme.palette[name][variant];
                            return <Palette color={code}>{variant}</Palette>;
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

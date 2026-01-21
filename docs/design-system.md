# Design System

## Rem-Based Sizing

This library uses `html { font-size: 62.5%; }` to make rem calculations intuitive:
- `1rem = 10px` (instead of the default 16px)
- `1.6rem = 16px`
- `1.2rem = 12px`

This makes rem-to-pixel conversion straightforward for developers.

## Base Font Size

- **Default**: `1.6rem` (16px)
- **Base line height**: `1.65`

## Font Size Scale

The design system provides a consistent font size scale:

| Token | Size | Pixels (62.5% base) |
|-------|------|---------------------|
| `--font-size-0` | `1.12rem` | 11.2px |
| `--font-size-1` | `1.26rem` | 12.6px |
| `--font-size-2` | `1.42rem` | 14.2px |
| `--font-size-3` | `1.8rem` | 18px |
| `--font-size-4` | `2.02rem` | 20.2px |
| `--font-size-5` | `2.27rem` | 22.7px |
| `--font-size-6` | `2.56rem` | 25.6px |
| `--font-size-7` | `2.88rem` | 28.8px |
| `--font-size-8` | `3.24rem` | 32.4px |

## Spacing System

Base spacing unit: `0.4rem` (4px)

| Token | Size | Pixels | Multiplier |
|-------|------|--------|------------|
| `--spacing-*-0` | `0rem` | 0px | 0× |
| `--spacing-*-1` | `0.4rem` | 4px | 1× |
| `--spacing-*-2` | `0.8rem` | 8px | 2× |
| `--spacing-*-3` | `1.2rem` | 12px | 3× |
| `--spacing-*-4` | `1.6rem` | 16px | 4× |
| `--spacing-*-5` | `2rem` | 20px | 5× |
| `--spacing-*-6` | `2.4rem` | 24px | 6× |
| `--spacing-*-7` | `2.8rem` | 28px | 7× |
| `--spacing-*-8` | `3.2rem` | 32px | 8× |

Available as both `--spacing-gap-*` and `--spacing-padding-*` tokens.

## Border Radius

| Token | Value |
|-------|-------|
| `--border-radius-0` | `0rem` |
| `--border-radius-1` | `0.4rem` |
| `--border-radius-2` | `0.8rem` |
| `--border-radius-3` | `1.2rem` |
| `--border-radius-4` | `2rem` |
| `--border-radius-5` | `50%` |
| `--border-radius-rounded` | `99999px` |

## Color System

Colors are provided by `@spiffdog/spiffy-colors` and automatically support dark theme via `@media (prefers-color-scheme: dark)`.

**Semantic Color Mappings:**
- `--base-*`: Neutral/base colors (slate)
- `--primary-*`: Primary brand color (blue)
- `--success-*`: Success states (green)
- `--warning-*`: Warning states (amber)
- `--alert-*`: Error/alert states (red)

Each color has 12 scale levels (1-12) for different use cases:
- **Levels 1-3**: Lightest backgrounds (subtle)
- **Levels 4-6**: Borders, dividers, subtle accents
- **Levels 7-9**: Interactive states (hover, active)
- **Levels 10-11**: Primary interactive elements (buttons, active states)
- **Level 12**: Text on light backgrounds

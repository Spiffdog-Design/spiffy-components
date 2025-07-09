// src/components/Grid/Grid.css.ts
import { style, createVar } from '@vanilla-extract/css';
import { theme } from '@/components/Theme/themes/theme.css';

// --- CSS Variables remain the same ---
export const gridConfigVar = createVar('grid-columns');
export const gridGapVar = createVar('grid-gap');
export const gridCellSpanVar = createVar('grid-cell-span');

export const gridContainer = style({
    vars: {
        [gridConfigVar]: '',
        [gridGapVar]: theme.spacing.gap[4],
    },
    display: 'grid',
    width: '100%',
    gridTemplateColumns: gridConfigVar,
    gap: gridGapVar,
});

export const gridItem = style({
    vars: {
        [gridCellSpanVar]: '1',
    },
    gridColumn: `span ${gridCellSpanVar}`,
});

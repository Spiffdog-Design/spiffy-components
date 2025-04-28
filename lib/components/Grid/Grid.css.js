// src/components/Grid/Grid.css.ts
import { style, createVar } from '@vanilla-extract/css';

// --- CSS Variables remain the same ---
export const gridColumnsVar = createVar('grid-columns');
export const gridColumnWidthVar = createVar('grid-columns');
export const gridGapVar = createVar('grid-gap');
export const gridCellSpanVar = createVar('grid-cell-span');

export const gridContainer = style({
    vars: {
        [gridColumnsVar]: '4',
        [gridColumnWidthVar]: '100',
        [gridGapVar]: '16',
    },
    display: 'grid',
    width: '100%',
    gridTemplateColumns: `repeat(${gridColumnsVar}, minmax(${gridColumnWidthVar}, 1fr))`,
    gap: gridGapVar,
});

export const gridItem = style({
    vars: {
        [gridCellSpanVar]: '1',
    },
    gridColumn: `span ${gridCellSpanVar}`,
});

// src/components/Grid/Grid.tsx
import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import cn from 'classnames';

import { gridContainer, gridItem, gridCellSpanVar, gridColumnsVar, gridColumnWidthVar, gridGapVar } from './Grid.css';

export const Grid = ({ children, className, columns = 4, columnWidth = 100, gap = 16, style = {}, ...rest }) => {
    return (
        <div
            className={cn(gridContainer, className)}
            style={{
                ...style,
                ...assignInlineVars({
                    [gridColumnsVar]: columns == null ? null : columns === 'auto' ? 'auto-fill' : String(columns),
                    [gridColumnWidthVar]: `${columnWidth}px`,
                    [gridGapVar]: `${gap}px`,
                }),
            }}
            {...rest}
        >
            {children}
        </div>
    );
};

export const GridItem = ({ span = 1, style = {}, ...rest }) => {
    return (
        <div
            className={gridItem}
            style={{
                ...style,
                ...assignInlineVars({
                    [gridCellSpanVar]: span,
                }),
            }}
            {...rest}
        />
    );
};

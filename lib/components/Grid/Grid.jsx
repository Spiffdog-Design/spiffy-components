// src/components/Grid/Grid.tsx
import React, { forwardRef, useEffect, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import cn from 'classnames';

import { gridContainer, gridItem, gridCellSpanVar, gridConfigVar, gridGapVar } from './Grid.css';

const buildConfig = (config, columns, width) => (config != null ? config : `repeat(${columns}, minmax(${width}, 1fr))`);

export const Grid = forwardRef(function Grid(
    { children, className, columns = 4, columnWidth = 100, config = null, gap = 16, style = {}, ...props },
    ref,
) {
    const [columnConfig, setColumnConfig] = useState(buildConfig(config, columns, columnWidth));

    console.log(config, columns, columnWidth);

    useEffect(() => {
        setColumnConfig(buildConfig(config, columns, columnWidth));
    }, [config, columns, columnWidth]);

    return (
        <div
            {...props}
            ref={ref}
            className={cn(gridContainer, className)}
            style={{
                ...style,
                ...assignInlineVars({
                    [gridConfigVar]: columnConfig,
                    [gridGapVar]: `${gap}px`,
                }),
            }}
        >
            {children}
        </div>
    );
});

export const GridItem = forwardRef(function GridItem({ span = 1, style = {}, ...props }, ref) {
    return (
        <div
            {...props}
            ref={ref}
            className={gridItem}
            style={{
                ...style,
                ...assignInlineVars({
                    [gridCellSpanVar]: span,
                }),
            }}
        />
    );
});

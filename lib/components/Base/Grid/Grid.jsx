// src/components/Grid/Grid.tsx
import React, { useEffect, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import cn from 'classnames';

import { gridContainer, gridItem, gridCellSpanVar, gridConfigVar, gridGapVar } from './Grid.css';

const buildConfig = (config, columns, width) => (config != null ? config : `repeat(${columns}, minmax(${width}, 1fr))`);

export const Grid = ({
    children,
    className,
    columns = 4,
    columnWidth = 100,
    config = null,
    gap = 16,
    style = {},
    ...rest
}) => {
    const [columnConfig, setColumnConfig] = useState(buildConfig(config, columns, columnWidth));

    console.log(config, columns, columnWidth);

    useEffect(() => {
        setColumnConfig(buildConfig(config, columns, columnWidth));
    }, [config, columns, columnWidth]);

    return (
        <div
            className={cn(gridContainer, className)}
            style={{
                ...style,
                ...assignInlineVars({
                    [gridConfigVar]: columnConfig,
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

import { forwardRef } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import cn from 'classnames';

import { spinner, sizeVar } from './Spinner.css';

export const Spinner = forwardRef(function Spinner({ className, size, style, ...props }, ref) {
    const pxSize = size != null && !isNaN(size) ? `${Math.min(size, 30)}px` : '48px';

    return (
        <span
            {...props}
            ref={ref}
            className={cn(spinner)}
            style={{
                ...style,
                ...assignInlineVars({
                    [sizeVar]: pxSize,
                }),
            }}
        ></span>
    );
});

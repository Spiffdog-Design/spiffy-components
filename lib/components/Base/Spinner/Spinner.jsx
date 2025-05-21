import { assignInlineVars } from '@vanilla-extract/dynamic';
import cn from 'classnames';

import { spinner, sizeVar } from './Spinner.css';

export const Spinner = ({ className, size, style, ...props }) => {
    const pxSize = size != null && !isNaN(size) ? `${Math.max(size, 30)}px` : '48px';

    return (
        <span
            className={cn(spinner)}
            style={{
                ...style,
                ...assignInlineVars({
                    [sizeVar]: pxSize,
                }),
            }}
            {...props}
        ></span>
    );
};

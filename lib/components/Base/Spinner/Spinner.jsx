import { spinner, colorVar, sizeVar } from './Spinner.css';
import cn from 'classnames';

import { useTheme } from '@/components';
import { assignInlineVars } from '@vanilla-extract/dynamic';

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

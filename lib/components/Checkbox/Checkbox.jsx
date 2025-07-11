import React, { forwardRef, useMemo, useState } from 'react';
import cn from 'classnames';

import { Icon, useTheme } from '@/components';

import * as styles from './Checkbox.css';

const getIconSet = (appearance) => {
    switch (appearance) {
        case 'solid':
            return {
                checked: {
                    set: 'solid',
                    name: 'square-check',
                },
                unchecked: {
                    set: 'solid',
                    name: 'square',
                },
            };
        case 'outline':
            return {
                checked: {
                    set: 'regular',
                    name: 'square-check',
                },
                unchecked: {
                    set: 'regular',
                    name: 'square',
                },
            };
        default:
            return {
                checked: {
                    set: 'solid',
                    name: 'check',
                },
                unchecked: {
                    set: 'solid',
                    name: 'check',
                },
            };
    }
};

export const Checkbox = forwardRef(function Checkbox(
    {
        appearance = 'solid',
        checked = false,
        children,
        className,
        compact = false,
        disabled,
        id,
        variant = 'base',
        onChange,
        ...props
    },
    ref,
) {
    const iconSet = getIconSet(appearance);

    const handleToggle = () => {
        if (disabled) return;
        if (onChange) {
            onChange(!checked);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleToggle();
        }
    };

    return (
        <>
            <input
                ref={ref}
                type="checkbox"
                id={id}
                checked={checked}
                onChange={handleToggle}
                style={{ display: 'none' }}
                aria-hidden="true"
                disabled={disabled}
                {...props}
            />
            <div
                role="checkbox"
                aria-checked={checked}
                tabIndex={0}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                style={{
                    cursor: 'pointer',
                    display: 'inline-block',
                    opacity: disabled === true ? 0.5 : checked === false && appearance === 'basic' ? 0.1 : 1,
                }}
            >
                <Icon {...(checked === true ? iconSet.checked : iconSet.unchecked)} />
            </div>
        </>
    );
});

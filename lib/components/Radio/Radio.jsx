import { forwardRef } from 'react';

import { Icon } from '@/components';

import * as styles from './Radio.css';

const getIconSet = (appearance) => {
    switch (appearance) {
        case 'solid':
            return {
                checked: {
                    set: 'solid',
                    name: 'circle-dot',
                },
                unchecked: {
                    set: 'solid',
                    name: 'circle',
                },
            };
        case 'outline':
            return {
                checked: {
                    set: 'regular',
                    name: 'circle-dot',
                },
                unchecked: {
                    set: 'regular',
                    name: 'circle',
                },
            };
        default:
            return {
                checked: {
                    set: 'solid',
                    name: 'circle',
                },
                unchecked: {
                    set: 'solid',
                    name: 'circle',
                },
            };
    }
};

export const Radio = forwardRef(function Radio(
    { appearance = 'solid', checked = false, children, className, disabled, id, variant = 'base', onChange, ...props },
    ref,
) {
    const iconSet = getIconSet(appearance);

    const handleClick = () => {
        if (onChange) {
            onChange(true);
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
                type="radio"
                id={id}
                checked={checked}
                onChange={handleClick}
                style={{ display: 'none' }}
                aria-hidden="true"
            />
            <div
                role="radio"
                aria-checked={checked}
                tabIndex={0}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                ref={ref}
                className={styles.radio}
                style={{
                    opacity: checked === false && appearance === 'basic' ? 0.1 : 1,
                }}
            >
                <Icon {...(checked === true ? iconSet.checked : iconSet.unchecked)} size={25} />
            </div>
        </>
    );
});

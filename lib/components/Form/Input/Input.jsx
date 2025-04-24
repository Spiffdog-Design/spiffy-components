import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { X } from '@phosphor-icons/react'; // https://phosphoricons.com/ -- Phosphor Icons
import cn from 'classnames';

import { Button, Icon } from '@/components';
import { isNullOrEmpty } from '../../../utilities';
import * as styles from './Input.css';

const displayClassName = (root, className, variant) =>
    cn(root, className, {
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
    });

export const Input = forwardRef(({ actions, className, onChange, variant = 'primary', value = '', ...props }, ref) => {
    const inputRef = useRef(null);
    const [inputText, setInputText] = useState(value);

    const handleChange = (evt) => {
        if (onChange != null) {
            onChange(evt.currentTarget.value);
        }
    };
    const handleClear = () => {
        if (onChange != null) {
            onChange('');
        }
    };
    const handleFocus = (evt) => {
        evt.currentTarget.focus();
        evt.currentTarget.select();
    };

    useEffect(() => {
        setInputText(value);
    }, [value]);

    useImperativeHandle(ref, () => inputRef.current);

    return (
        <div className={displayClassName(styles.root, className, variant)}>
            <input
                className={displayClassName(styles.input, className, variant)}
                ref={inputRef}
                onFocus={handleFocus}
                onChange={handleChange}
                value={inputText}
                {...props}
            />
            <div className={displayClassName(styles.actions, variant)}>
                {!isNullOrEmpty(inputText) && (
                    <Button appearance="basic" variant={variant} onClick={handleClear}>
                        <Icon>
                            <X />
                        </Icon>
                    </Button>
                )}
                {actions != null && actions}
            </div>
        </div>
    );
});
Input.displayName = 'Input';

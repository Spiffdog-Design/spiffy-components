import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import cn from 'classnames';

import { isNullOrEmpty } from '@spiffdog/spiffy-tools';

import { Button, Icon } from '@/components';
import { getVariantMainColor } from '@/utilities';

import styles from './Input.module.css';

const displayClassName = (root, compact, variant, className) => {
    return cn(root, className, {
        [`${styles.compact}`]: compact === true,
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
    });
};

export const Input = forwardRef(function Input(
    {
        actions,
        className = '',
        compact = false,
        onChange,
        helperText,
        required,
        variant = 'base',
        value = '',
        ...props
    },
    ref,
) {
    const inputRef = useRef(null);
    const [inputText, setInputText] = useState(value);

    const color = getVariantMainColor(variant);

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

    useImperativeHandle(ref, () => inputRef.current);

    useEffect(() => {
        setInputText(value);
    }, [value]);

    return (
        <div className={displayClassName(styles.root, variant)}>
            <input
                className={displayClassName(styles.input, compact, variant, className)}
                ref={inputRef}
                onFocus={handleFocus}
                onChange={handleChange}
                value={inputText}
                {...props}
            />
            <div className={displayClassName(styles.actions, variant)}>
                {!isNullOrEmpty(inputText) && (
                    <Button appearance="basic" variant={variant} onClick={handleClear} compact={compact}>
                        <Icon name="xmark" />
                    </Button>
                )}
                {actions != null && typeof actions === 'function' ? actions({ color, variant }) : actions}
            </div>
        </div>
    );
});
Input.displayName = 'Input';

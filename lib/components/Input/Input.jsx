import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { cn } from '@/utilities';

import { isNullOrEmpty } from '@spiffdog/spiffy-tools';

import { Button, Icon } from '@/components';
import { getVariantMainColor } from '@/utilities';

import styles from './Input.module.css';

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
        <div className={styles['sc-input-root']} data-variant={variant}>
            <input
                className={cn(styles['sc-input'], className)}
                ref={inputRef}
                onFocus={handleFocus}
                onChange={handleChange}
                value={inputText}
                data-compact={compact ? 'true' : 'false'}
                {...props}
            />
            <div className={styles['sc-input-actions']}>
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

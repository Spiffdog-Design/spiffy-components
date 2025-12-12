import { forwardRef, startTransition, useEffect, useMemo, useState } from 'react';
import * as Ariakit from '@ariakit/react';
import cn from 'classnames';
import { matchSorter } from 'match-sorter';

import { Button, Label } from '@/components';

import styles from './Combobox.module.css';

const getVariantTheme = (root, position, variant, className) =>
    cn(root, className, {
        [styles['sc-combobox-row']]: position === 'horizontal',
        [styles['sc-combobox-alert']]: variant === 'alert',
        [styles['sc-combobox-primary']]: variant === 'primary',
        [styles['sc-combobox-success']]: variant === 'success',
        [styles['sc-combobox-warning']]: variant === 'warning',
    });

export const Combobox = forwardRef(function Combobox(
    {
        className = null,
        data = [],
        defaultValue,
        onChange,
        position = 'horizontal',

        label,
        required = false,

        appearance = 'solid',
        compact = false,
        disabled = false,
        rounded = false,
        variant = 'base',
    },
    ref,
) {
    const rootClass = getVariantTheme(styles['sc-combobox-root'], position, variant, className);
    const [items, setItems] = useState(data);
    const [searchValue, setSearchValue] = useState('');

    const matches = useMemo(() => {
        return searchValue === ''
            ? items
            : matchSorter(items, searchValue, {
                  keys: ['label'],
                  baseSort: (a, b) => (a.index < b.index ? -1 : 1),
              });
    }, [searchValue]);

    const handleSelect = (value) => {
        const selected = items?.find((i) => i.label === value);
        setItems((items) =>
            items.map((i) => ({
                ...i,
                selected: i.id === selected.id,
            })),
        );
        if (onChange != null) {
            onChange({ ...selected, selected: true });
        }
    };

    return (
        <div className={rootClass}>
            <Ariakit.ComboboxProvider
                ref={ref}
                resetValueOnHide={true}
                setValue={(value) => {
                    startTransition(() => {
                        setSearchValue(value);
                    });
                }}
            >
                <Ariakit.SelectProvider defaultValue={defaultValue} setValue={handleSelect}>
                    {label != null && (
                        <Ariakit.SelectLabel render={<Label required={required} variant={variant} />}>
                            {label}
                        </Ariakit.SelectLabel>
                    )}
                    <Ariakit.Select
                        render={
                            <Button
                                appearance={appearance}
                                compact={compact}
                                disabled={disabled}
                                rounded={rounded}
                                variant={variant}
                            />
                        }
                    />

                    <Ariakit.SelectPopover gutter={4} className={styles['sc-combobox-popover']}>
                        <Ariakit.Combobox autoSelect placeholder="Search..." className={styles['sc-combobox-input']} />
                        <Ariakit.ComboboxList>
                            {Array.isArray(matches) &&
                                matches?.map((item) => (
                                    <Ariakit.SelectItem
                                        key={item.id}
                                        value={item.label}
                                        className={cn(styles['sc-combo-select-item'], {
                                            [styles['sc-combo-select-item-compact']]: compact === true,
                                        })}
                                        render={<Ariakit.ComboboxItem />}
                                    />
                                ))}
                        </Ariakit.ComboboxList>
                    </Ariakit.SelectPopover>
                </Ariakit.SelectProvider>
            </Ariakit.ComboboxProvider>
        </div>
    );
});

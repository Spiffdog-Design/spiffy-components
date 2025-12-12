import { useState, useRef, useEffect, useMemo, Children, isValidElement } from 'react';
import ReactDOM from 'react-dom';
import styles from './Select.module.css';

// Helper component to wrap each selectable item
export const SelectItem = ({ value, children }) => {
    return <>{children ?? value}</>;
};

export const Select = ({
    children, // expected to be SelectItem elements
    maxSelections,
    readOnly = true,
    onItemCreate,
}) => {
    const [input, setInput] = useState('');
    const [selected, setSelected] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [isDirty, setIsDirty] = useState(false);
    const [lastAdded, setLastAdded] = useState('');
    const [limitMessage, setLimitMessage] = useState('');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const suggestionRefs = useRef([]);
    const blurTimeoutRef = useRef(null);

    const isMaxedOut = maxSelections && selected.length >= maxSelections;

    // Memoize childItems so it doesn't recreate on every render
    const childItems = useMemo(
        () =>
            Children.toArray(children)
                .filter((child) => isValidElement(child) && child.type === SelectItem)
                .map((child) => child.props.value),
        [children],
    );

    // Memoize valueToChildMap
    const valueToChildMap = useMemo(() => {
        const map = new Map();
        Children.forEach(children, (child) => {
            if (isValidElement(child) && child.type === SelectItem) {
                map.set(child.props.value, child);
            }
        });
        return map;
    }, [children]);

    // Update suggestions only if different to avoid infinite loops
    useEffect(() => {
        let newSuggestions;
        if (input.trim() === '') {
            newSuggestions = childItems.filter((item) => !selected.includes(item)).slice(0, 5);
        } else {
            newSuggestions = childItems
                .filter((item) => item.toLowerCase().includes(input.toLowerCase()) && !selected.includes(item))
                .slice(0, 5);
        }
        const newHighlightIndex = newSuggestions.length > 0 ? 0 : -1;

        const suggestionsChanged =
            newSuggestions.length !== suggestions.length || newSuggestions.some((item, i) => item !== suggestions[i]);

        if (suggestionsChanged) {
            setSuggestions(newSuggestions);
        }
        if (highlightIndex !== newHighlightIndex) {
            setHighlightIndex(newHighlightIndex);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input, selected, childItems]);

    useEffect(() => {
        suggestionRefs.current = [];
    }, [suggestions]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                !containerRef.current?.contains(e.target) &&
                !document.getElementById('select-portal-dropdown')?.contains(e.target)
            ) {
                closeDropdown();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (highlightIndex >= 0 && suggestionRefs.current[highlightIndex] instanceof HTMLElement) {
            suggestionRefs.current[highlightIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [highlightIndex]);

    useEffect(() => {
        function updatePosition() {
            if (inputRef.current) {
                const rect = inputRef.current.getBoundingClientRect();
                setDropdownPos({
                    top: rect.bottom + window.scrollY,
                    left: rect.left + window.scrollX,
                    width: rect.width,
                });
            }
        }
        if (isDropdownOpen) {
            updatePosition();
            window.addEventListener('scroll', updatePosition);
            window.addEventListener('resize', updatePosition);
        }
        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isDropdownOpen]);

    function openDropdown() {
        if (input.trim() === '' && childItems.length <= 100) {
            setSuggestions(childItems.filter((item) => !selected.includes(item)));
            setHighlightIndex(0);
        }
        setDropdownOpen(true);
    }

    function closeDropdown() {
        setDropdownOpen(false);
        setSuggestions([]);
        setHighlightIndex(-1);
        if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
            blurTimeoutRef.current = null;
        }
    }

    function addSelected(item) {
        const isNew = !childItems.includes(item);
        if (!selected.includes(item) && (!maxSelections || selected.length < maxSelections)) {
            const newSelected = [...selected, item].sort((a, b) =>
                a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
            );
            setSelected(newSelected);
            setInput('');
            setSuggestions([]);
            setHighlightIndex(-1);
            setIsDirty(false);
            setLastAdded(item);
            setLimitMessage('');
            setDropdownOpen(false);

            if (isNew && !readOnly && onItemCreate) {
                onItemCreate(item);
            }
        } else if (maxSelections && selected.length >= maxSelections) {
            setLimitMessage(`Maximum of ${maxSelections} selections allowed.`);
            setDropdownOpen(false);
        }
    }

    function removeSelected(item) {
        setSelected(selected.filter((s) => s !== item));
        setLimitMessage('');
    }

    function onKeyDown(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (input.trim() === '' && suggestions.length === 0) {
                const fullList = childItems.filter((item) => !selected.includes(item)).slice(0, 20);
                setSuggestions(fullList);
                setHighlightIndex(fullList.length > 0 ? 0 : -1);
                setDropdownOpen(true);
            } else {
                setHighlightIndex((i) => (i < suggestions.length - 1 ? i + 1 : i));
                setDropdownOpen(true);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightIndex((i) => (i > 0 ? i - 1 : i));
            setDropdownOpen(true);
        } else if (e.key === 'Enter' || e.key === 'Tab') {
            if (highlightIndex >= 0 && highlightIndex < suggestions.length) {
                e.preventDefault();
                addSelected(suggestions[highlightIndex]);
            } else if (!readOnly && input.trim() && !selected.includes(input.trim())) {
                e.preventDefault();
                addSelected(input.trim());
            }
        } else if (e.key === 'Backspace' && input === '' && selected.length > 0) {
            removeSelected(selected[selected.length - 1]);
        } else if (e.key === 'Escape') {
            closeDropdown();
            setInput('');
        }
    }

    function onPaste(e) {
        if (readOnly) return;

        const paste = e.clipboardData.getData('text');
        const items = paste
            .split(/[;,]+/)
            .map((s) => s.trim())
            .filter((s) => s.length > 0 && !selected.includes(s));

        if (items.length === 0) return;

        e.preventDefault();

        const canAddCount = maxSelections ? maxSelections - selected.length : items.length;
        const toAdd = items.slice(0, canAddCount);

        const newSelected = [...selected, ...toAdd].sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
        );

        setSelected(newSelected);
        setInput('');
        setSuggestions([]);
        setHighlightIndex(-1);
        setIsDirty(false);
        setLimitMessage('');
        setDropdownOpen(false);

        toAdd.forEach((item) => {
            if (!childItems.includes(item) && onItemCreate) {
                onItemCreate(item);
            }
        });

        if (maxSelections && items.length > canAddCount) {
            setLimitMessage(`Maximum of ${maxSelections} selections allowed.`);
        }
    }

    return (
        <>
            <div
                ref={containerRef}
                className={styles['sc-select-container']}
                tabIndex={0}
                onClick={() => inputRef.current.focus()}
            >
                <div className={styles['sc-select-badges-container']}>
                    {selected.map((item) => (
                        <div key={item} className={styles['sc-select-badge']}>
                            {valueToChildMap.get(item) ?? item}
                            <button
                                type="button"
                                aria-label={`Remove ${item}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeSelected(item);
                                }}
                                className={styles['sc-select-remove-button']}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    <input
                        ref={inputRef}
                        className={styles['sc-select-input']}
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            setLimitMessage('');
                            if (!isDirty && e.target.value.trim() !== '') {
                                setIsDirty(true);
                            }
                            setDropdownOpen(true);
                        }}
                        onFocus={openDropdown}
                        onBlur={() => {
                            blurTimeoutRef.current = setTimeout(closeDropdown, 150);
                        }}
                        onKeyDown={onKeyDown}
                        onPaste={onPaste}
                        aria-expanded={isDropdownOpen}
                        aria-autocomplete="list"
                        aria-haspopup="listbox"
                        role="combobox"
                        aria-label="Tag selector input"
                        aria-activedescendant={highlightIndex >= 0 ? `suggestion-${highlightIndex}` : undefined}
                        aria-describedby={
                            limitMessage
                                ? 'limit-message'
                                : selected.length === 0 && input.trim() === ''
                                ? 'zero-state-message'
                                : undefined
                        }
                        aria-disabled={isMaxedOut}
                        disabled={isMaxedOut}
                    />
                    {selected.length > 0 && (
                        <button
                            type="button"
                            onClick={() => {
                                setLastAdded('');
                                setLimitMessage('');
                                setSelected([]);
                            }}
                            className={styles['sc-select-clear-all-button']}
                            title="Clear all selected items"
                            aria-label="Clear all selected items"
                        >
                            Clear All
                        </button>
                    )}
                </div>
                {isDropdownOpen &&
                    ReactDOM.createPortal(
                        <div
                            style={{
                                position: 'absolute',
                                top: dropdownPos.top,
                                left: dropdownPos.left,
                                width: dropdownPos.width,
                                zIndex: 10000,
                                backgroundColor: '#fff',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                                borderRadius: 4,
                                maxHeight: 150,
                                overflowY: 'auto',
                                pointerEvents: isMaxedOut ? 'none' : 'auto',
                                opacity: isMaxedOut ? 0.6 : 1,
                            }}
                            id="select-portal-dropdown"
                            role="listbox"
                            className={styles['sc-select-suggestions-list']}
                        >
                            {suggestions.length > 0 ? (
                                suggestions.map((item, idx) => {
                                    const child = valueToChildMap.get(item);
                                    return (
                                        <li
                                            key={item}
                                            ref={(el) => (suggestionRefs.current[idx] = el)}
                                            id={`suggestion-${idx}`}
                                            role="option"
                                            aria-selected={highlightIndex === idx}
                                            onClick={() => addSelected(item)}
                                            onMouseEnter={() => setHighlightIndex(idx)}
                                            data-highlighted={highlightIndex === idx}
                                            className={styles.suggestion}
                                        >
                                            {child ?? item}
                                        </li>
                                    );
                                })
                            ) : isDirty && input.trim() !== '' && !isMaxedOut && !readOnly ? (
                                <li className={styles['sc-select-no-results']} aria-disabled="true">
                                    Press Enter to add "<strong>{input.trim()}</strong>"
                                </li>
                            ) : input.trim() === '' ? (
                                childItems.filter((d) => !selected.includes(d)).length > 0 ? (
                                    childItems
                                        .filter((d) => !selected.includes(d))
                                        .slice(0, 5)
                                        .map((item, idx) => {
                                            const child = valueToChildMap.get(item);
                                            return (
                                                <li
                                                    key={item}
                                                    ref={(el) => (suggestionRefs.current[idx] = el)}
                                                    id={`suggestion-${idx}`}
                                                    role="option"
                                                    aria-selected={highlightIndex === idx}
                                                    onClick={() => addSelected(item)}
                                                    onMouseEnter={() => setHighlightIndex(idx)}
                                                    data-highlighted={highlightIndex === idx}
                                                    className={styles['sc-select-suggestion']}
                                                >
                                                    {child ?? item}
                                                </li>
                                            );
                                        })
                                ) : (
                                    <li className={styles['sc-select-no-results']} aria-disabled="true">
                                        No matches found
                                    </li>
                                )
                            ) : (
                                <li className={styles['sc-select-no-results']} aria-disabled="true">
                                    No matches found
                                </li>
                            )}
                            {isMaxedOut && (
                                <div className={styles['sc-select-dropdown-disabled-overlay']} aria-hidden="true" />
                            )}
                        </div>,
                        document.body,
                    )}
            </div>
            <div
                role="status"
                aria-live="polite"
                style={{ position: 'absolute', left: -9999, height: 1, overflow: 'hidden' }}
            >
                {lastAdded ? `Added "${lastAdded}"` : ''}
            </div>
            {selected.length === 0 && input.trim() === '' && (
                <div
                    id="zero-state-message"
                    className={styles['sc-select-zero-state']}
                    role="status"
                    aria-live="polite"
                >
                    Start typing or paste a comma/semicolon separated list to add items.
                </div>
            )}
            {limitMessage && (
                <div
                    id="limit-message"
                    className={styles['sc-select-limit-message']}
                    role="alert"
                    aria-live="assertive"
                >
                    {limitMessage}
                </div>
            )}
        </>
    );
};

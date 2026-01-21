import { forwardRef, useEffect, useRef, useState, useId } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utilities';

import styles from './Popover.module.css';

// Parse position string into horizontal and vertical components
// Always returns two position values in x-y format (e.g., "left-top", "center-bottom")
// Accepts x and y in any order (e.g., "left top" or "top left")
// Defaults to "center" for any position not explicitly assigned
const parsePosition = (pos) => {
    if (typeof pos !== 'string') return 'center-center';
    
    const trimmed = pos.trim();
    if (!trimmed || trimmed === 'center') {
        return 'center-center';
    }
    
    const parts = trimmed.split(/\s+/);
    
    // Define valid values for each axis
    const xValues = ['left', 'right', 'center'];
    const yValues = ['top', 'bottom', 'center'];
    
    let x = 'center';
    let y = 'center';
    
    // Find x and y values (can be in any order)
    for (const part of parts) {
        if (xValues.includes(part)) {
            x = part;
        }
        if (yValues.includes(part)) {
            y = part;
        }
    }
    
    // Always return x-y format
    return `${x}-${y}`;
};

// Parse position into x and y object for positioning logic
const parsePositionXY = (pos) => {
    const positionStr = parsePosition(pos);
    const [x, y] = positionStr.split('-');
    return { x, y };
};

/**
 * Popover component - A flexible overlay component that can be used as a base for
 * Modals, Tooltips, Dropdowns, and other overlay components.
 * 
 * Uses native HTML capabilities:
 * - `<dialog>` element for modal behavior (with showModal() and close())
 * - CSS positioning for tooltips/dropdowns
 * - CSS transitions for animations
 * - Native focus management
 * 
 * @typedef {'click' | 'hover' | 'focus' | 'manual'} PopoverTrigger
 * @typedef {'top' | 'bottom' | 'left' | 'right' | 'center' | 'auto' | 'left top' | 'left bottom' | 'left center' | 'right top' | 'right bottom' | 'right center' | 'center top' | 'center bottom' | 'center center'} PopoverPosition
 * @typedef {'modal' | 'tooltip' | 'dropdown' | 'popover'} PopoverType
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'} PopoverSize
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display in the popover
 * @param {React.ReactNode} [props.trigger] - Element that triggers the popover
 * @param {boolean} [props.open] - Controlled open state (for manual trigger)
 * @param {Function} [props.onOpenChange] - Callback when open state changes
 * @param {PopoverTrigger} [props.triggerType='click'] - How the popover is triggered
 * @param {PopoverType} [props.type='popover'] - Type of popover (affects rendering)
 * @param {PopoverPosition} [props.position='auto'] - Position relative to trigger. Can be single value ('top', 'bottom', etc.) or x/y combination ('left bottom', 'right top', etc.)
 * @param {PopoverSize} [props.size='md'] - Size variant
 * @param {boolean} [props.portal] - Whether to render in a portal (default: true for modal, false for others)
 * @param {string} [props.className] - Additional CSS class names
 * @param {string} [props.id] - ID for the popover (auto-generated if not provided)
 * @param {React.Ref<HTMLDivElement | HTMLDialogElement>} ref
 */
export const Popover = forwardRef(function Popover(
    {
        children,
        trigger,
        open: controlledOpen,
        onOpenChange,
        triggerType = 'click',
        type = 'popover',
        position = 'auto',
        size = 'md',
        portal = type === 'modal',
        className,
        id,
        ...props
    },
    ref
) {
    const [internalOpen, setInternalOpen] = useState(false);
    const [computedPosition, setComputedPosition] = useState(position);
    const triggerRef = useRef(null);
    const popoverRef = useRef(null);
    const dialogRef = useRef(null);
    const timeoutRef = useRef(null);
    const resizeTimeoutRef = useRef(null);
    const lastPopoverWidthRef = useRef(null);
    const initialPopoverWidthRef = useRef(null);
    const generatedId = useId();
    const popoverId = id || `popover-${generatedId}`;

    // Use controlled or uncontrolled state
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setIsOpen = (value) => {
        if (controlledOpen === undefined) {
            setInternalOpen(value);
        }
        onOpenChange?.(value);
    };

    // Position calculation for non-modal popovers
    useEffect(() => {
        if (!isOpen || type === 'modal' || !triggerRef.current || !popoverRef.current) {
            return;
        }

        if (position === 'auto') {
            // Auto-position: try to fit in viewport
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const popoverRect = popoverRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let newPosition = 'bottom';

            // Check if popover fits below
            if (triggerRect.bottom + popoverRect.height > viewportHeight) {
                // Check if it fits above
                if (triggerRect.top - popoverRect.height > 0) {
                    newPosition = 'top';
                } else {
                    // Check if it fits to the right
                    if (triggerRect.right + popoverRect.width < viewportWidth) {
                        newPosition = 'right';
                    } else if (triggerRect.left - popoverRect.width > 0) {
                        newPosition = 'left';
                    }
                }
            }

            setComputedPosition(newPosition);
        } else {
            setComputedPosition(position);
        }
    }, [isOpen, position, type]);

    // Handle trigger events
    const handleTriggerClick = (event) => {
        if (triggerType === 'click' || triggerType === 'manual') {
            event.preventDefault();
            event.stopPropagation();
            setIsOpen(!isOpen);
        }
    };

    const handleTriggerMouseEnter = () => {
        if (triggerType === 'hover') {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setIsOpen(true);
        }
    };

    const handleTriggerMouseLeave = () => {
        if (triggerType === 'hover') {
            timeoutRef.current = setTimeout(() => {
                setIsOpen(false);
            }, 100);
        }
    };

    const handleTriggerFocus = () => {
        if (triggerType === 'focus') {
            setIsOpen(true);
        }
    };

    const handleTriggerBlur = () => {
        if (triggerType === 'focus') {
            // Delay to allow clicking inside popover
            setTimeout(() => {
                if (popoverRef.current && !popoverRef.current.contains(document.activeElement)) {
                    setIsOpen(false);
                }
            }, 100);
        }
    };

    // Handle dialog close (for modal type)
    const handleDialogClose = () => {
        setIsOpen(false);
    };

    // Handle click on dialog backdrop (for modal type)
    const handleDialogClick = (event) => {
        // If click is directly on the dialog element (backdrop), close it
        // The dialog element itself is the backdrop when using showModal()
        // We check if the target is the dialog itself, not a child element (content)
        if (event.target === dialogRef.current) {
            setIsOpen(false);
        }
    };

    // Handle click outside (for non-modal types)
    useEffect(() => {
        if (!isOpen || type === 'modal') return;

        const handleClickOutside = (event) => {
            if (
                triggerType === 'click' &&
                popoverRef.current &&
                !popoverRef.current.contains(event.target) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, type, triggerType]);

    // Handle escape key
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // For modal type, use native dialog element
    if (type === 'modal') {
        const dialogElement = (
            <dialog
                ref={(node) => {
                    dialogRef.current = node;
                    if (typeof ref === 'function') {
                        ref(node);
                    } else if (ref) {
                        ref.current = node;
                    }
                }}
                id={popoverId}
                className={cn(styles['sc-popover'], styles['sc-popover-modal'], isOpen && styles['sc-popover-modal-open'], className)}
                data-type={type}
                data-size={size}
                data-open={isOpen ? 'true' : 'false'}
                onClose={handleDialogClose}
                onClick={handleDialogClick}
                {...props}
            >
                <div className={cn(styles['sc-popover-content'], styles[`sc-popover-${size}`])} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </dialog>
        );

        // Show/hide modal using native methods
        useEffect(() => {
            if (dialogRef.current) {
                if (isOpen) {
                    // Remove open attribute if present (for non-modal dialogs)
                    dialogRef.current.removeAttribute('open');
                    dialogRef.current.showModal();
                } else {
                    dialogRef.current.close();
                }
            }
        }, [isOpen]);

        const triggerElement = trigger ? (
            <span
                ref={triggerRef}
                onClick={handleTriggerClick}
                onMouseEnter={handleTriggerMouseEnter}
                onMouseLeave={handleTriggerMouseLeave}
                onFocus={handleTriggerFocus}
                onBlur={handleTriggerBlur}
                style={{ display: 'inline-block' }}
            >
                {trigger}
            </span>
        ) : null;

        return (
            <>
                {triggerElement}
                {portal ? createPortal(dialogElement, document.body) : dialogElement}
            </>
        );
    }

    // For tooltip, dropdown, and popover types
    // Parse position once for class names
    const parsedPosition = parsePosition(computedPosition);
    const parsedPositionXY = parsePositionXY(computedPosition);
    const positionClasses = [];
    // Always apply position class (even for center-center)
    positionClasses.push(styles[`sc-popover-${parsedPosition}`]);
    
    const popoverElement = (
        <div
            ref={(node) => {
                popoverRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            }}
            id={popoverId}
            className={cn(
                styles['sc-popover'],
                styles[`sc-popover-${type}`],
                ...positionClasses,
                portal && styles['sc-popover-portal'],
                isOpen && styles['sc-popover-open'],
                className
            )}
            data-type={type}
            data-position={computedPosition}
            data-position-x={parsedPositionXY.x}
            data-position-y={parsedPositionXY.y}
            data-size={size}
            data-portal={portal ? 'true' : 'false'}
            role={type === 'tooltip' ? 'tooltip' : type === 'dropdown' ? 'menu' : 'dialog'}
            aria-hidden={!isOpen}
            {...props}
        >
            <div className={cn(styles['sc-popover-content'], styles[`sc-popover-${size}`])}>{children}</div>
        </div>
    );

    const triggerElement = trigger ? (
        <span
            ref={triggerRef}
            onClick={handleTriggerClick}
            onMouseEnter={handleTriggerMouseEnter}
            onMouseLeave={handleTriggerMouseLeave}
            onFocus={handleTriggerFocus}
            onBlur={handleTriggerBlur}
            aria-haspopup={type === 'dropdown' ? 'menu' : type === 'tooltip' ? undefined : 'dialog'}
            aria-expanded={isOpen}
            aria-controls={popoverId}
            style={{ display: 'inline-block', position: 'relative' }}
        >
            {trigger}
            {!portal && isOpen && popoverElement}
        </span>
    ) : null;

    // For portal rendering and tooltips, we need to position relative to trigger
    useEffect(() => {
        // Run positioning for: portals, or tooltips (which need precise anchoring)
        const needsPositioning = portal || (type === 'tooltip' && !portal);
        if (!needsPositioning || !isOpen || type === 'modal' || !triggerRef.current || !popoverRef.current) {
            return;
        }

        const updatePosition = () => {
            if (!triggerRef.current || !popoverRef.current) return;

            const triggerRect = triggerRef.current.getBoundingClientRect();
            const popoverRect = popoverRef.current.getBoundingClientRect();
            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;

            // If popover hasn't been rendered yet (width/height are 0), wait for next frame
            if (popoverRect.width === 0 || popoverRect.height === 0) {
                requestAnimationFrame(updatePosition);
                return;
            }
            
            // Capture initial width on first render to prevent drift
            if (initialPopoverWidthRef.current === null && popoverRect.width > 0) {
                initialPopoverWidthRef.current = popoverRect.width;
            }
            
            // Use initial width for positioning calculations to prevent drift
            const stableWidth = initialPopoverWidthRef.current || popoverRect.width;
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            const gap = 4; // Gap between trigger and popover
            const viewportPadding = 16; // Padding from viewport edges

            let top = 0;
            let left = 0;
            let maxHeight = null;

            // Parse position into x and y components
            const pos = parsePositionXY(computedPosition);
            const verticalPos = pos.y;
            const horizontalPos = pos.x;

            // Use current width for BadgeList-style positioning, stable width otherwise
            const widthForPositioning = (horizontalPos === 'right' || horizontalPos === 'left') 
                ? (popoverRect.width > 0 ? popoverRect.width : 320)
                : (stableWidth || popoverRect.width);

            // For tooltips, always use fixed positioning (viewport-relative) even when not using portal
            // This ensures tooltips anchor correctly to their triggers
            const useFixedPositioning = portal || type === 'tooltip';

            // Calculate vertical position
            switch (verticalPos) {
                    case 'top': {
                    const availableSpaceAbove = triggerRect.top - gap - viewportPadding;
                    maxHeight = Math.max(100, availableSpaceAbove);
                    // Position popover above trigger: bottom edge of popover at top of trigger minus gap
                    const popoverHeight = popoverRect.height > 0 ? popoverRect.height : maxHeight;
                    if (useFixedPositioning) {
                        top = triggerRect.top - popoverHeight - gap;
                    } else {
                        top = triggerRect.top + scrollY - popoverHeight - gap;
                    }
                    // Adjust if would go above viewport
                    if (useFixedPositioning) {
                        if (top < viewportPadding) {
                            top = viewportPadding;
                            maxHeight = triggerRect.top - viewportPadding - gap;
                        }
                    } else {
                        if (top < scrollY + viewportPadding) {
                            top = scrollY + viewportPadding;
                            maxHeight = triggerRect.top + scrollY - (scrollY + viewportPadding) - gap;
                        }
                    }
                    break;
                }
                case 'bottom': {
                    const availableSpaceBelow = viewportHeight - triggerRect.bottom - gap - viewportPadding;
                    maxHeight = Math.max(100, availableSpaceBelow);
                    if (useFixedPositioning) {
                        top = triggerRect.bottom + gap;
                    } else {
                        top = triggerRect.bottom + scrollY + gap;
                    }
                    // Adjust if would go below viewport
                    if (useFixedPositioning) {
                        const popoverBottom = top + maxHeight;
                        if (popoverBottom > viewportHeight - viewportPadding) {
                            maxHeight = viewportHeight - top - viewportPadding;
                        }
                    } else {
                        const popoverBottom = top + maxHeight;
                        const viewportBottom = scrollY + viewportHeight;
                        if (popoverBottom > viewportBottom - viewportPadding) {
                            maxHeight = viewportBottom - top - viewportPadding;
                        }
                    }
                    break;
                }
                case 'center': {
                    const availableSpaceVertical = Math.min(
                        viewportHeight - triggerRect.top - viewportPadding,
                        triggerRect.bottom - viewportPadding
                    );
                    maxHeight = Math.max(100, availableSpaceVertical);
                    const triggerCenterY = triggerRect.top + triggerRect.height / 2;
                    if (useFixedPositioning) {
                        top = triggerCenterY - maxHeight / 2;
                    } else {
                        top = triggerCenterY + scrollY - maxHeight / 2;
                    }
                    // Adjust if would go above/below viewport
                    if (useFixedPositioning) {
                        if (top < viewportPadding) {
                            top = viewportPadding;
                            maxHeight = viewportHeight - viewportPadding * 2;
                        }
                        const popoverBottom = top + maxHeight;
                        if (popoverBottom > viewportHeight - viewportPadding) {
                            maxHeight = viewportHeight - top - viewportPadding;
                        }
                    } else {
                        if (top < scrollY + viewportPadding) {
                            top = scrollY + viewportPadding;
                            maxHeight = viewportHeight - viewportPadding * 2;
                        }
                        const popoverBottom = top + maxHeight;
                        if (popoverBottom > scrollY + viewportHeight - viewportPadding) {
                            maxHeight = scrollY + viewportHeight - top - viewportPadding;
                        }
                    }
                    break;
                }
            }

            // Calculate horizontal position
            switch (horizontalPos) {
                case 'left': {
                    if (useFixedPositioning) {
                        left = triggerRect.left - widthForPositioning - gap;
                        if (left < viewportPadding) {
                            left = viewportPadding;
                        }
                    } else {
                        left = triggerRect.left + scrollX - widthForPositioning - gap;
                        if (left < scrollX + viewportPadding) {
                            left = scrollX + viewportPadding;
                        }
                    }
                    break;
                }
                case 'right': {
                    if (useFixedPositioning) {
                        left = triggerRect.right - widthForPositioning;
                        if (left < viewportPadding) {
                            left = viewportPadding;
                        }
                    } else {
                        left = triggerRect.right + scrollX - widthForPositioning;
                        if (left < scrollX + viewportPadding) {
                            left = scrollX + viewportPadding;
                        }
                    }
                    break;
                }
                case 'center':
                default: {
                    if (useFixedPositioning) {
                        left = triggerRect.left + triggerRect.width / 2 - widthForPositioning / 2;
                        if (left < viewportPadding) left = viewportPadding;
                        if (left + widthForPositioning > viewportWidth - viewportPadding) {
                            left = viewportWidth - widthForPositioning - viewportPadding;
                        }
                    } else {
                        left = triggerRect.left + scrollX + triggerRect.width / 2 - widthForPositioning / 2;
                        if (left < scrollX + viewportPadding) left = scrollX + viewportPadding;
                        if (left + widthForPositioning > scrollX + viewportWidth - viewportPadding) {
                            left = scrollX + viewportWidth - widthForPositioning - viewportPadding;
                        }
                    }
                    break;
                }
            }

            // Set CSS custom properties for positioning
            popoverRef.current.style.setProperty('--popover-top', `${top}px`);
            popoverRef.current.style.setProperty('--popover-left', `${left}px`);
            if (maxHeight !== null && maxHeight > 0) {
                popoverRef.current.style.setProperty('--popover-max-height', `${maxHeight}px`);
            } else {
                popoverRef.current.style.removeProperty('--popover-max-height');
            }
        };

        // Reset width tracking when popover opens
        if (isOpen) {
            lastPopoverWidthRef.current = null;
            initialPopoverWidthRef.current = null;
        }
        
        // Use requestAnimationFrame to ensure popover is fully rendered before positioning
        const rafId = requestAnimationFrame(() => {
            requestAnimationFrame(updatePosition);
        });

        // Use ResizeObserver to recalculate when popover dimensions change
        // Debounce to prevent rapid recalculations that cause drifting
        const resizeObserver = new ResizeObserver(() => {
            if (!popoverRef.current) return;
            
            const currentWidth = popoverRef.current.offsetWidth;
            const lastWidth = lastPopoverWidthRef.current;
            
            // Only update if width changed significantly (more than 2px) to prevent micro-adjustments
            if (lastWidth !== null && Math.abs(currentWidth - lastWidth) < 2) {
                return;
            }
            
            lastPopoverWidthRef.current = currentWidth;
            
            // Debounce the position update
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            
            resizeTimeoutRef.current = setTimeout(() => {
                updatePosition();
            }, 50); // 50ms debounce
        });

        if (popoverRef.current) {
            resizeObserver.observe(popoverRef.current);
        }

        window.addEventListener('scroll', updatePosition, true);
        window.addEventListener('resize', updatePosition);

        return () => {
            cancelAnimationFrame(rafId);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            resizeObserver.disconnect();
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
            lastPopoverWidthRef.current = null;
            initialPopoverWidthRef.current = null;
        };
    }, [portal, isOpen, type, computedPosition, position]);

    return (
        <>
            {triggerElement}
            {portal && isOpen && createPortal(popoverElement, document.body)}
        </>
    );
});

Popover.displayName = 'Popover';

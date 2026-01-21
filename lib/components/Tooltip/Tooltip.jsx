import { forwardRef } from 'react';
import { Popover } from '@/components/Popover/Popover';

/**
 * Tooltip component - A lightweight tooltip that appears on hover or focus.
 * 
 * Wraps the Popover component with tooltip-specific defaults.
 * 
 * @typedef {'top' | 'bottom' | 'left' | 'right' | 'auto'} TooltipPosition
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'x2'} TooltipSize
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display in the tooltip
 * @param {React.ReactNode} props.trigger - Element that triggers the tooltip
 * @param {boolean} [props.open] - Controlled open state
 * @param {Function} [props.onOpenChange] - Callback when open state changes
 * @param {TooltipPosition} [props.position='auto'] - Position relative to trigger
 * @param {TooltipSize} [props.size='sm'] - Size variant
 * @param {'hover' | 'focus' | 'click'} [props.triggerType='hover'] - How the tooltip is triggered
 * @param {string} [props.className] - Additional CSS class names
 * @param {string} [props.id] - ID for the tooltip (auto-generated if not provided)
 * @param {React.Ref<HTMLDivElement>} ref
 */
export const Tooltip = forwardRef(function Tooltip(
    {
        children,
        trigger,
        open,
        onOpenChange,
        position = 'auto',
        size = 'sm',
        triggerType = 'hover',
        className,
        id,
        ...props
    },
    ref
) {
    return (
        <Popover
            ref={ref}
            trigger={trigger}
            open={open}
            onOpenChange={onOpenChange}
            triggerType={triggerType}
            type="tooltip"
            position={position}
            size={size}
            portal={false}
            className={className}
            id={id}
            {...props}
        >
            {children}
        </Popover>
    );
});

Tooltip.displayName = 'Tooltip';

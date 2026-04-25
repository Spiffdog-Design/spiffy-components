import { forwardRef } from 'react';
import { cn } from '@/utilities';
import './Accordion.module.css';

import { Icon } from '@/components';

/**
 * Accordion component - A collapsible content section.
 *
 * Uses native HTML `<details>` and `<summary>` elements for accessibility.
 *
 * @typedef {'base' | 'primary' | 'success' | 'warning' | 'alert'} AccordionVariant
 * @typedef {'xs' | 'sm' | 'md'} AccordionSize
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display when expanded
 * @param {React.ReactNode} props.heading - The heading content (displayed in summary)
 * @param {boolean} props.open - Controls open/closed state
 * @param {Function} props.onHeadingClick - Callback when heading is clicked (receives new open state)
 * @param {AccordionVariant} [props.variant='base'] - Color variant
 * @param {AccordionSize} [props.size='md'] - Size variant
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.Ref} ref - Ref forwarded to the details element
 */
export const Accordion = forwardRef(function Accordion(
    { children, className, open, variant = 'base', size = 'md', heading, onHeadingClick },
    ref,
) {
    const handleToggle = (e) => {
        if (onHeadingClick) {
            e.preventDefault();
            onHeadingClick(!open);
        }
    };

    return (
        <details
            className={cn('sc-accordion', className)}
            open={open}
            ref={ref}
            data-variant={variant}
            data-size={size}
        >
            <summary className="sc-accordion-heading" onClick={handleToggle}>
                <div className="sc-accordion-heading-container">{heading}</div>
                <div className="sc-accordion-icon-container">
                    <Icon name="chevron-right" className="sc-accordion-heading-icon" />
                </div>
            </summary>
            <div className="sc-accordion-content">{children}</div>
        </details>
    );
});

Accordion.displayName = 'Accordion';

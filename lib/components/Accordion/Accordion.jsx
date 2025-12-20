import { forwardRef } from 'react';
import { cn } from '@/utilities';
import './Accordion.module.css';

import { Icon } from '@/components';

export const Accordion = forwardRef(function Accordion(
    { children, className, open, variant = 'base', heading, onHeadingClick },
    ref,
) {
    const handleToggle = (e) => {
        if (onHeadingClick) {
            e.preventDefault();
            onHeadingClick(!open);
        }
    };

    return (
        <details className={cn('sc-accordion', className)} open={open} ref={ref} data-variant={variant}>
            <summary className="sc-accordion-heading" onClick={handleToggle}>
                <div className="sc-accordion-heading-container">{heading}</div>
                <div className="sc-accordion-icon-container">
                    <Icon set="solid" name="angle-right" className="sc-accordion-heading-icon" />
                </div>
            </summary>
            <div className="sc-accordion-content">{children}</div>
        </details>
    );
});

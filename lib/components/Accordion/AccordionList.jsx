import { Children, cloneElement, forwardRef, useMemo } from 'react';
import { cn } from '@/utilities';
import styles from './Accordion.module.css';

/**
 * AccordionList component - A container for multiple accordion items.
 *
 * Automatically applies the variant prop to all child Accordion components.
 *
 * @typedef {'base' | 'primary' | 'success' | 'warning' | 'alert'} AccordionListVariant
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Accordion components to display
 * @param {AccordionListVariant} [props.variant='base'] - Color variant to apply to all accordions
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.Ref<HTMLDivElement>} ref
 */
export const AccordionList = forwardRef(function AccordionList({ children, className, variant }, ref) {
    const accordionArray = useMemo(() => {
        return children == null
            ? []
            : Children.map(children, (child) =>
                  cloneElement(child, {
                      ...child.props,
                      variant,
                  }),
              );
    }, [children]);

    return (
        <div className={cn(styles['sc-accordion-list'], className)} ref={ref}>
            {accordionArray}
        </div>
    );
});

AccordionList.displayName = 'AccordionList';

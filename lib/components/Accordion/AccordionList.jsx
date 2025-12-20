import { Children, cloneElement, forwardRef, useMemo } from 'react';
import { cn } from '@/utilities';
import styles from './Accordion.module.css';

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

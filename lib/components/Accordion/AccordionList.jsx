import { Children, cloneElement, forwardRef, useMemo } from 'react';
import cn from 'classnames';
import * as styles from './Accordion.css';

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
        <div className={cn(styles.accordionList, className)} ref={ref}>
            {accordionArray}
        </div>
    );
});

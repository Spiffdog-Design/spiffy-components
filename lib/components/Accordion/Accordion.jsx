import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Accordion.module.css';

import { Icon } from '@/components';

export const Accordion = forwardRef(function Accordion(
    { children, className, open, variant, heading, onHeadingClick },
    ref,
) {
    const summaryClasses = displayClassName(styles['sc-accordion-heading'], variant);

    const handleToggle = (e) => {
        if (onHeadingClick) {
            e.preventDefault();
            onHeadingClick(!open);
        }
    };

    return (
        <details className={cn(styles['sc-accordion'], className)} open={open} ref={ref}>
            <summary className={summaryClasses} onClick={handleToggle}>
                <div className={styles['sc-accordion-heading-container']}>{heading}</div>
                <div className={styles['sc-accordion-icon-container']}>
                    <Icon set="solid" name="angle-right" className={styles['sc-accordion-heading-icon']} />
                </div>
            </summary>
            <div className={styles['sc-accordion-content']}>{children}</div>
        </details>
    );
});

const displayClassName = (className, variant) =>
    cn(className, {
        [styles['sc-accordion-alert']]: variant === 'alert',
        [styles['sc-accordion-primary']]: variant === 'primary',
        [styles['sc-accordion-success']]: variant === 'success',
        [styles['sc-accordion-warning']]: variant === 'warning',
    });

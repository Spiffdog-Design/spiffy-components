import { forwardRef } from 'react';
import cn from 'classnames';
import * as Ariakit from '@ariakit/react';
import * as styles from './Accordion.css';

import { Icon } from '@/components';

const displayClassName = (className, variant) =>
    cn(className, {
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
    });

export const Accordion = forwardRef(function Accordion(
    { children, className, open, variant, heading, onHeadingClick },
    ref,
) {
    const headingClasses = displayClassName(styles.heading, variant);
    const contentClasses = displayClassName(styles.content, variant);

    return (
        <div className={cn(styles.accordion, className)} ref={ref}>
            <Ariakit.DisclosureProvider open={open} setOpen={onHeadingClick}>
                <Ariakit.Disclosure render={<button className={headingClasses} />}>
                    <div className={styles.headingContainer}>{heading}</div>
                    <div className={styles.iconContainer}>
                        <Icon set="solid" name="angle-down" className={styles.headingIconOpen} />
                        <Icon set="solid" name="angle-right" className={styles.headingIconClosed} />
                    </div>
                </Ariakit.Disclosure>
                <Ariakit.DisclosureContent className={contentClasses}>{children}</Ariakit.DisclosureContent>
            </Ariakit.DisclosureProvider>
        </div>
    );
});

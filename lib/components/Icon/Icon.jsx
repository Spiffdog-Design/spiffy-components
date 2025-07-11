// https://fontawesome.com/icons
import { forwardRef } from 'react';
import cn from 'classnames';

import * as styles from './Icon.css';

export const Icon = forwardRef(function Icon(props, ref) {
    return <i {...props} ref={ref} className={getClass(styles, props)} />;
});

const getClass = (styles, props) => {
    const { appearance, className, compact, name, rounded, set = 'solid', size = 'md', variant } = props;
    return cn(`fa-${set}`, `fa-${name}`, `fa-fw`, className, styles.button, {
        rounded: rounded,
        [`${styles.compact}`]: compact === true,
        [`${styles.basic}`]: appearance === 'basic',
        [`${styles.outline}`]: appearance === 'outline',
        [`${styles.alert}`]: variant === 'alert',
        [`${styles.primary}`]: variant === 'primary',
        [`${styles.success}`]: variant === 'success',
        [`${styles.warning}`]: variant === 'warning',
        [`${styles.xs}`]: size === 'xs',
        [`${styles.sm}`]: size === 'sm',
        [`${styles.md}`]: size === 'md',
        [`${styles.lg}`]: size === 'lg',
        [`${styles.xl}`]: size === 'xl',
        [`${styles.x2}`]: size === 'x2',
        [`${styles.x3}`]: size === 'x3',
    });
};

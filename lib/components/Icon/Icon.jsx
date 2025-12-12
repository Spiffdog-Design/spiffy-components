// https://fontawesome.com/icons
import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './Icon.module.css';

export const Icon = forwardRef(function Icon(props, ref) {
    return <i {...props} ref={ref} className={getClass(styles, props)} />;
});

const getClass = (styles, props) => {
    const { className, name, set = 'solid', size = 'md' } = props;
    return cn(`fa-${set}`, `fa-${name}`, `fa-fw`, className, styles['sc-icon'], {
        [styles['sc-icon-xs']]: size === 'xs',
        [styles['sc-icon-sm']]: size === 'sm',
        [styles['sc-icon-md']]: size === 'md',
        [styles['sc-icon-lg']]: size === 'lg',
        [styles['sc-icon-xl']]: size === 'xl',
        [styles['sc-icon-x2']]: size === 'x2',
        [styles['sc-icon-x3']]: size === 'x3',
        [styles['sc-icon-x4']]: size === 'x4',
    });
};

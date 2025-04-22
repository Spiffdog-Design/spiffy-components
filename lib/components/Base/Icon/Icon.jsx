import { Children, cloneElement } from 'react';

export const Icon = ({ size = 18, weight = 'bold', children, ...props }) =>
    Children.map(children, (child) =>
        cloneElement(child, {
            'aria-hidden': true,
            size,
            weight,
            ...props,
            ...child.props,
        }),
    );
Icon.displayName = 'Icon';

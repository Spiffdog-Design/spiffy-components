// styling component for @phosphor-react icons
// https://phosphoricons.com/
import { Children, cloneElement } from 'react';

const Icon = ({ size = 32, weight = 'bold', children, ...props }) =>
    Children.map(children, (child) =>
        cloneElement(child, {
            size,
            weight,
            ...child.props,
        }),
    );
Icon.displayName = 'Icon';
export default Icon;

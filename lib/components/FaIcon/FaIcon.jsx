// https://fontawesome.com/icons
import cn from 'classnames';

export const FaIcon = ({ className, name, set = 'solid', size, style, ...props }) => (
    <i className={cn(`fa-${set} fa-${name}`, className)} style={{ ...style, fontSize: size }} {...props}></i>
);

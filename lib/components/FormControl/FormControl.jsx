import { forwardRef, useId } from 'react';

export const FormControl = forwardRef(function FormControl({ children }, ref) {
    const id = useId();

    return typeof children === 'function' ? children(id) : children;
});

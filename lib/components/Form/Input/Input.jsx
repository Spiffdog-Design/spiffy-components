import { useId } from 'react';
import cn from 'classnames';

import { Input, Label } from '@/components';
import { isNullOrEmpty } from '@/utilities';

import * as styles from './Input.css';

export const FormInput = ({ layout = 'unset', ...props }) => {
    const className = cn({
        [`${styles.vertical}`]: layout === 'vertical',
        [`${styles.horizontal}`]: layout === 'horizontal',
    });

    return layout === 'unset' ? (
        <InnerInputComponents {...props} />
    ) : (
        <div className={className}>
            <InnerInputComponents layout={layout} {...props} />
        </div>
    );
};
FormInput.displayName = 'FormInput';

const InnerInputComponents = ({ helperText, layout, label, required, variant, ...props }) => {
    const id = useId();

    return (
        <>
            <Label htmlFor={id} required={required} variant={variant}>
                {label}
            </Label>
            <Input id={id} required={required} variant={variant} {...props} />
            {!isNullOrEmpty(helperText) ? <small className="helperText">{helperText}</small> : null}
        </>
    );
};

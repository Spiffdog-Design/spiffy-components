import { useId } from 'react';
import cn from 'classnames';

import { BaseInput, BaseLabel } from '@/components';
import * as styles from './Input.css';
import { isNullOrEmpty } from '../../../utilities';

export const Input = ({ layout = 'unset', ...props }) => {
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
Input.displayName = 'Input';

const InnerInputComponents = ({ helperText, layout, label, required, variant, ...props }) => {
    const id = useId();

    return (
        <>
            <BaseLabel htmlFor={id} required={required} variant={variant}>
                {label}
            </BaseLabel>
            <BaseInput id={id} required={required} variant={variant} {...props} />
            {!isNullOrEmpty(helperText) ? <small className="helperText">{helperText}</small> : null}
        </>
    );
};

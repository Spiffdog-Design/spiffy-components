import styled, { css } from 'styled-components';
import cn from 'classnames';

import { Button } from '@/components';

const InputButton = ({ type = 'submit', ...props }) => {
    const types = ['submit', 'reset'];
    const t = types.includes(type) ? type : 'submit';
    return <Button type={t} {...props} />;
};
InputButton.displayName = 'InputButton';

export default InputButton;

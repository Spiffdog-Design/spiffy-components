import { ComponentPropsWithRef } from 'react';
import cn from 'classnames';
import classes from './Button.module.css';
import { Appearances, Sizes, Statuses } from '../constants/constants';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  appearance?: Appearances;
  disabled?: boolean;
  fullWidth?: boolean;
  pill?: boolean;
  size?: Sizes;
  status?: Statuses;
}

const Button = ({
  appearance = 'default',
  disabled = false,
  fullWidth = false,
  pill = false,
  size = 'm',
  status = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(classes.button, {
        [classes.link]: appearance === 'link',
        [classes.minimal]: appearance === 'minimal',

        [classes.fullWidth]: fullWidth === true,
        [classes.pill]: pill === true,

        [classes.l]: size === 'l',
        [classes.s]: size === 's',
        [classes.xl]: size === 'xl',
        [classes.xs]: size === 'xs',

        [classes.alert]: status === 'alert',
        [classes.success]: status === 'success',
        [classes.warning]: status === 'warning',
      })}
      {...props}
    />
  );
};

export default Button;

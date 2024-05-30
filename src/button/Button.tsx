import { ComponentPropsWithRef } from 'react';
import cn from 'classnames';
import classes from './Button.module.css';

export type ButtonStatuses = 'primary' | 'alert' | 'success' | 'warning';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type ButtonAppearance = 'default' | 'outline' | 'minimal' | 'link';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  appearance: ButtonAppearance;
  disabled: boolean;
  pill: boolean;
  size: ButtonSize;
  status: ButtonStatuses;
}

const Button = ({
  appearance = 'default',
  disabled = false,
  pill = false,
  size = 'm',
  status = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(classes.button, {
        [classes.outline]: appearance === 'outline',
        [classes.link]: appearance === 'link',
        [classes.minimal]: appearance === 'minimal',

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

import React, { MouseEventHandler, PropsWithChildren } from 'react';
import cn from 'classnames';
import classes from './Button.module.css';

export const ButtonStatuses = {
  PRIMARY: 'primary',
} as const;

export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type ButtonProps = {
  disabled?: boolean;
  size: ButtonSize;
  variant: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps & PropsWithChildren> = ({
  children,
  disabled,
  size = 'm',
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(classes.button, {
        [classes.xs]: size === 'xs',
        [classes.s]: size === 's',
        [classes.m]: size === 'm',
        [classes.l]: size === 'l',
        [classes.xl]: size === 'xl',
      })}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

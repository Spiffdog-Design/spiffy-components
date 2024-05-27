import React, { MouseEventHandler, PropsWithChildren } from 'react';
import cn from 'classnames';
import classes from './Button.module.css';

export type ButtonProps = {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps & PropsWithChildren> = ({
  children,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(classes.success, classes.button)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

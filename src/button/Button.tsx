import React, { MouseEventHandler, PropsWithChildren } from 'react';

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
    <button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;

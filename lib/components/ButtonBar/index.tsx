import React, { Children, cloneElement, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';

import { SIZES, VARIANTS } from '../../types';
import { ButtonProps } from '../Button';

import styles from './styles.module.css';

export interface ButtonBarProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  active?: number;
  variant?: VARIANTS;
  size?: SIZES;
  onActiveClick: (index: number) => unknown;
}

const getButtonProps = (active: boolean): Partial<ButtonProps> => {
  return active ? { appearance: 'SOLID' } : { appearance: 'BASIC' };
};

const ButtonBar = ({
  active = 0,
  size = 'MD',
  variant = 'PRIMARY',
  className,
  children,
  onActiveClick = (index: number) => console.log(index),
  ...props
}: ButtonBarProps) => {
  const [activeIdx, setActiveIdx] = useState(active);

  const handleClick = (idx: number) => () => {
    setActiveIdx(idx);
    onActiveClick(idx);
  };

  useEffect(() => {
    setActiveIdx(active);
  }, [active]);

  return (
    <div
      className={cn(className, styles.buttonbar, {
        [styles.alert]: variant === 'ALERT',
        [styles.primary]: variant === 'PRIMARY',
        [styles.success]: variant === 'SUCCESS',
        [styles.warning]: variant === 'WARNING',
      })}
      {...props}
    >
      {Children.map(children, (child: ReactNode, index: number) => {
        const item = child as React.ReactElement<ButtonProps>;
        const activeProps = getButtonProps(index === activeIdx);
        return cloneElement(item, {
          ...activeProps,
          variant,
          size,
          rounded: false,
          onClick: handleClick(index),
        });
      })}
    </div>
  );
};

export default ButtonBar;

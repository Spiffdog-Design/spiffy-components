import cn from 'classnames';

import styles from './styles.module.css';
import { APPEARANCES, SIZES, VARIANTS } from '../../types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: APPEARANCES;
  variant: VARIANTS;
  size: SIZES;
}

const Button = ({ appearance = 'SOLID', size = 'MD', variant = 'PRIMARY', className, ...props }: ButtonProps) => {
  const cnames = cn(className, styles.button, {
    [styles.basic]: appearance === 'BASIC',
    [styles.outline]: appearance === 'OUTLINE',
    [styles.solid]: appearance === 'SOLID',

    [styles.alert]: variant === 'ALERT',
    [styles.primary]: variant === 'PRIMARY',
    [styles.success]: variant === 'SUCCESS',
    [styles.warning]: variant === 'WARNING',

    [styles.xs]: size === 'XS',
    [styles.sm]: size === 'SM',
    [styles.md]: size === 'MD',
    [styles.lg]: size === 'LG',
    [styles.xl]: size === 'XL',
  });

  return <button className={cnames} {...props} />;
};

export default Button;

import styles from './styles.module.css';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, ...restProps } = props;
  return <button className={`${className} ${styles.button}`} {...restProps} />;
};

export default Button;

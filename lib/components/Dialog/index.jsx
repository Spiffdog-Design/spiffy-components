import cn from 'classnames';

import styles from './styles.module.css';
import { useEffect, useRef } from 'react';

const Dialog = ({
  appearance = 'SOLID',
  variant = 'PRIMARY',
  className,
  onOpen = () => null,
  onClose = () => null,
  ...props
}) => {
  const cnames = cn(className, styles.button, {
    [styles.basic]: appearance === 'BASIC',
    [styles.outline]: appearance === 'OUTLINE',
    [styles.solid]: appearance === 'SOLID',

    [styles.alert]: variant === 'ALERT',
    [styles.primary]: variant === 'PRIMARY',
    [styles.success]: variant === 'SUCCESS',
    [styles.warning]: variant === 'WARNING',
  });

  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const handleCloseClick = (ev) => {
    ev.preventDefault();
    if (onClose != null) {
      onClose();
    }
    dialogRef.current?.close();
  };

  const handleTriggerClick = (ev) => {
    ev.preventDefault();
    if (onOpen != null) {
      onOpen();
    }
    dialogRef.current?.showModal();
  };

  useEffect(() => {
    closeRef.current?.addEventListener('click', handleCloseClick);
    triggerRef.current?.addEventListener('click', handleTriggerClick);

    return () => {
      closeRef.current?.removeEventListener('click', handleCloseClick);
      triggerRef.current?.removeEventListener('click', handleTriggerClick);
    };
  }, []);

  return (
    <div className={cnames} {...props}>
      <button ref={triggerRef}>Trigger</button>
      <dialog ref={dialogRef} autoFocus={true}>
        <h3>I'm a dialog!</h3>
        <button ref={closeRef}>Close</button>
      </dialog>
    </div>
  );
};

export default Dialog;

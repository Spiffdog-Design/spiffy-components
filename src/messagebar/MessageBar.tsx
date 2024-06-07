import { ComponentPropsWithRef } from 'react';
import cn from 'classnames';
import classes from './MessageBar.module.css';
import { Statuses } from '../constants/constants';

export interface MessageBarProps extends ComponentPropsWithRef<'div'> {
  status?: Statuses;
}

const MessageBar = ({ status = 'primary', ...props }: MessageBarProps) => {
  return (
    <div
      className={cn(classes.messageBar, {
        [classes.alert]: status === 'alert',
        [classes.success]: status === 'success',
        [classes.warning]: status === 'warning',
      })}
      {...props}
    />
  );
};

export default MessageBar;

import { forwardRef } from 'react';
import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';
import styled from 'styled-components';
import cn from 'classnames';

const styles = () => ({
    content: {
        backgroundColor: '#ffffff',
        border: '2px solid hsl(217 36% 57%)',
        borderRadius: 4,
        boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
        fontSize: '1rem',
        lineHeight: '1.25rem',
        margin: 8,
        userSelect: 'none',
        minWidth: 200,
        maxWidth: '33vw',
        whiteSpace: 'pre-line',
        zIndex: 1000,
    },
    padded: {
        padding: '12px 20px',
    },
    trigger: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'help',
        '& i': {
            color: '#1279c6',
        },
    },
});

const Tooltip = forwardRef(
    ({ classes, className, open, enabled = true, padded = true, trigger, children, ...props }, ref) => {
        return enabled ? (
            <Provider delayDuration={100}>
                <Root open={open}>
                    <Trigger ref={ref} className={cn(classes.trigger, className)} asChild>
                        {trigger}
                    </Trigger>
                    <Portal>
                        <Content className={cn(classes.content, { [classes.padded]: padded })} {...props}>
                            {children}
                        </Content>
                    </Portal>
                </Root>
            </Provider>
        ) : (
            children
        );
    },
);
export default withStyles(styles)(Tooltip);

import { Corner, Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import * as styles from './ScrollArea.css';

export const ScrollArea = ({ children }) => (
    <Root className={styles.root}>
        <Viewport className={styles.viewport}>{children}</Viewport>
        <Scrollbar className={styles.scrollbar} orientation="vertical">
            <Thumb className={styles.thumb} />
        </Scrollbar>
        <Scrollbar className={styles.scrollbar} orientation="horizontal">
            <Thumb className={styles.thumb} />
        </Scrollbar>
        <Corner className={styles.corner} />
    </Root>
);
ScrollArea.displayName = 'ScrollArea';

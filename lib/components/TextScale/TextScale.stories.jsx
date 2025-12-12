import styles from './TextScale.module.css';
import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Text Scale',
};

export default meta;

export const Demo = {
    args: {
        children: 'The quick brown fox jumps over the lazy dog',
    },
    render: ({ children }) => {
        return (
            <ThemeWrapper title="Text Scale (1.125 ratio -- Major 2nd)">
                <div className={styles['sc-text-scale-container']}>
                    <h1>h1: {children}</h1>
                    <h2>h2: {children}</h2>
                    <h3>h3: {children}</h3>
                    <h4>h4: {children}</h4>
                    <h5>h5: {children}</h5>
                    <h6>h6: {children}</h6>
                    <hr />
                    <strong>strong: {children}</strong>
                    <p>p: {children}</p>
                    <em>em: {children}</em>
                    <hr />
                    <small>small: {children}</small>
                    <span className="text-caption">text-caption: {children}</span>
                    <hr />
                    <pre>This is a pre-formatted section.</pre>
                    <code>This is a code section.</code>
                </div>
            </ThemeWrapper>
        );
    },
};

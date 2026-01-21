import styles from './TextScale.module.css';

const meta = {
    title: 'Base/Text Scale',
    parameters: {
        docs: {
            description: {
                component: `
Typography scale demonstration showing all text size variants available in the design system.

This includes heading levels (h1-h6), body text, emphasis, and utility text classes.
                `.trim(),
            },
        },
    },
};

export default meta;

export const Demo = {
    args: {
        children: 'The quick brown fox jumps over the lazy dog',
    },
    render: ({ children }) => {
        return (
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
        );
    },
};

import ThemeWrapper from '@/components/Storybook/ThemeWrapper';

const meta = {
    title: 'Base/Text Scale',
};

export default meta;

export const Primary = {
    args: {
        children: 'The quick brown fox jumps over the lazy dog',
    },
    render: ({ children }) => {
        return (
            <ThemeWrapper title="Text Scale (1.125 ratio -- Major 2nd)">
                <h1>H1: {children}</h1>
                <h2>H2: {children}</h2>
                <h3>H3: {children}</h3>
                <h4>H4: {children}</h4>
                <h5>H5: {children}</h5>
                <h6>H6: {children}</h6>

                <p>BODY: {children}</p>

                <small>SMALL: {children}</small>
                <p className="text-caption">CAPTION: {children}</p>
            </ThemeWrapper>
        );
    },
};

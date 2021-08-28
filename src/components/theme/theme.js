const ratio = 1.5;
const sizes = [...Array(10)].map((_, i) => Math.pow(ratio, i));
const headings = [...Array(6)].reduce((acc, _, i) => {
    acc[i] = `${sizes[5 - i]}rem`;
    return acc;
}, {});

export default Object.freeze({
    colors: {
        primary: '',
        success: '',
        warning: '',
        alert: '',
    },
    disabled: {
        opacity: 0.65,
    },
    fonts: {
        headings: {
            family: [
                'system-ui',
                '-apple-system',
                '"Segoe UI"',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
            ],
            sizes: headings,
        },
        text: {
            family: [
                'system-ui',
                '-apple-system',
                '"Segoe UI"',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
            ],
            size: `${sizes[1]}rem`,
        },
    },
    ratio,
    sizes,
});

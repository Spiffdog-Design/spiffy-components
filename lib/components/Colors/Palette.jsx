import imageFile from '../../static/checkers.png';

export const Palette = ({ color, children }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateRows: 'repeat(2, 40px)',
                gridTemplateColumns: 'repeat(1, 40px)',
                gap: 4,
                alignItems: 'center',
                justifyItems: 'center',
            }}
        >
            <div style={{ background: `url(${imageFile})`, height: '100%', width: '100%' }}>
                <div style={{ height: '100%', width: '100%', backgroundColor: color }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>{children}</div>
        </div>
    );
};

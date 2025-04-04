import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    background-color: transparent;
    color: var(--base-12);
    font-weight: 700;
    font-size: 0.85em;
    text-transform: uppercase;
    flex-shrink: 0;
    width: fit-content;
    &.required:after {
        position: absolute;
        top: -4px;
        right: -14px;
        color: var(--red-10);
        content: '*';
        font-size: 18px;
        font-weight: 700;
    }
`;

const Label = ({ children, required = false, ...props }) => {
    const requiredClass = required === true ? 'required' : '';
    return (
        <Container className={requiredClass} {...props}>
            {children}
        </Container>
    );
};
Label.displayName = 'Label';

export default Label;

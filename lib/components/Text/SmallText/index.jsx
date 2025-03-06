import styled from 'styled-components';

const SmallText = styled.span`
    color: ${({ theme }) => theme.colors.primary[10]};
    font-size: 1em;
    padding: 0 4px;
`;
SmallText.displayName = 'SmallText';

export default SmallText;

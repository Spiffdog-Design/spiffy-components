import styled, { keyframes } from 'styled-components';
import { CircleNotch } from '@phosphor-icons/react';

const spin = keyframes`
    from {
        transform: scale(1) rotate(0deg);
    }
    to {
        transform: scale(1) rotate(360deg);
    }
`;

const Animated = styled(CircleNotch)`
    animation-name: ${spin};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    height: 100%;
    width: 100%;
`;

const Spinner = ({ size = 24, weight = 'bold' }) => <Animated size={size} weight={weight} />;
Spinner.displayName = 'Spinner';

export default Spinner;

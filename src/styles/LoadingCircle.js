import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

 const LoadingCircle = styled.div`
     border: 2px solid rgba(0, 0, 0, 0.04);
     border-top: 2px solid #0003cd;
     border-radius: 50%;
     width: ${(props) => props.size || '40px'};
     height: ${(props) => props.size || '40px'};
     animation: ${rotate} 600ms linear infinite;
 `;

 export default LoadingCircle;
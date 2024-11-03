import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;


const Skeleton = styled.div`
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(112, 128, 144, 0.28);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.2) 20%,
                rgba(255, 255, 255, 0.5) 60%,
                rgba(255, 255, 255, 0.2) 80%,
                rgba(255, 255, 255, 0) 100%
        );
        animation: ${shimmer} 2s infinite;
    }
`;

export const SkeletonImage = styled(Skeleton)` width: 900px; height: 140px; border-radius: 8px; margin: 1rem 5rem`;


export default Skeleton;
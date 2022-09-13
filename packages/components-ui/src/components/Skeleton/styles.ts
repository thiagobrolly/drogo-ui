import styled, { keyframes } from 'styled-components';
import { SkeletonProps } from '.';

const skeletonLoading = keyframes`
  from {
    background: #D3D6DA;
  }
  to {
    background: #ecedef;
  }
  `;

export const Skeleton = styled.div<SkeletonProps>`
  animation: ${skeletonLoading} 0.6s linear infinite alternate;
  height: ${({ height }) => height};
  margin: 0.3rem;
`;

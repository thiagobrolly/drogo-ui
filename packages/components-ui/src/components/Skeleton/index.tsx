import * as S from './styles';

export type SkeletonProps = {
  height?: string;
};

export const Skeleton = ({ height = '100%' }: SkeletonProps) => (
  <S.Skeleton height={height} role="progressbar" />
);

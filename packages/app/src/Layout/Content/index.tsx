import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Content = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper className="paylivre_content">
      <S.Container className="paylivre_container">{children}</S.Container>
    </S.Wrapper>
  );
};

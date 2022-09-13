import { Logo } from '@drogo-ui/components';
import { PlOutlineList } from '@drogo-ui/icons';
import * as S from './styles';

export interface HeaderProps {
  isOpen?: boolean;
  isOpenFunction?: () => void;
}

export const Header = ({ isOpen, isOpenFunction }: HeaderProps) => {
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.ButtonAsideBar onClick={isOpenFunction}>
        <PlOutlineList size={18} color="#fff" />
      </S.ButtonAsideBar>
      <Logo size="small" color="primary" mt="1rem" />
    </S.Wrapper>
  );
};

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Aside } from './Aside';
import { Header } from './Header';
import { Content } from './Content';
import * as S from './styles';

export interface LayoutProps {
  asideOpen?: boolean;
}

export const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <S.Grid asideOpen={openMenu}>
      <Header isOpenFunction={handleOpenMenu} isOpen={openMenu} />
      <Aside isOpen={openMenu} />
      <Content>
        <Outlet />
      </Content>
    </S.Grid>
  );
};

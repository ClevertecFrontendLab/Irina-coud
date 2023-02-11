import { Outlet } from 'react-router-dom';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import { Wrapper, WrapperBox } from './layout.styled';

export const Layout = () => (
  <Wrapper>
    <Header />
    <WrapperBox>
      <Outlet />
    </WrapperBox>
    <Footer />
  </Wrapper>

);

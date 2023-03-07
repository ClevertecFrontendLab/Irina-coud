import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import { Wrapper, WrapperBox } from './layout.styled';

import { getLoginToken } from '../../utils/get-token';

export const Layout = () => {

  const token = getLoginToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/auth');
    }
  }, [navigate, token]);

  return (
    <Wrapper>
      <Header />
      <WrapperBox>
        <Outlet />
      </WrapperBox>
      <Footer />
    </Wrapper>
  )
};

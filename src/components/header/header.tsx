import { useDispatch, useSelector } from 'react-redux';

import { Burger } from '../burger/burger';

import { changeBurgerMenu } from '../../store/reducers/main-slice';
import { IState } from '../../store/reducers/type';

import avatar from '../../assets/image/avatar.png';
import logo from '../../assets/icon/logo.png';

import {
  HeaderWrapper,
  HeaderContent,
  HeaderLogoBox,
  HeaderTitle,
  HeaderUserBox,
  HeaderWelcome,
  HeaderLogoLink,
  HeaderBurger
} from './header.styled';

export const Header = () => {

  const dispatch = useDispatch();

  const { isBurgerMenuOpen } = useSelector((state: IState) => state.reducer);

  function toggleBurgerMenu() {
    dispatch(changeBurgerMenu(!isBurgerMenuOpen));
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLogoBox>
          <HeaderLogoLink to='/'><img src={logo} alt='logo' /></HeaderLogoLink>
          <HeaderBurger data-menu="toggle" onClick={() => toggleBurgerMenu()} className={isBurgerMenuOpen ? 'active' : ''} data-test-id='button-burger'>
            <span />
          </HeaderBurger>
          <Burger />
          <HeaderTitle>Библиотека</HeaderTitle>
        </HeaderLogoBox>
        <HeaderUserBox>
          <HeaderWelcome >Привет, Иван!</HeaderWelcome>
          <img src={avatar} alt='avatar' />
        </HeaderUserBox>
      </HeaderContent>
    </HeaderWrapper>
  )
};

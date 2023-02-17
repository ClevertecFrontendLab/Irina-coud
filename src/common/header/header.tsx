import { useDispatch, useSelector } from 'react-redux';

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
import avatar from '../../assets/image/avatar.png';
import logo from '../../assets/icon/logo.png';
import { IState } from '../../store/reducers/type';
import { Burger } from './burger/burger';
import { changeBurgerMenu } from '../../store/reducers/main-slice';

export const Header = () => {
  const { isBurgerMenuOpen } = useSelector((state: IState) => state.reducer);
  const dispatch = useDispatch();

  function toggleBurgerMenu() {
    dispatch(changeBurgerMenu(!isBurgerMenuOpen));
  }

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

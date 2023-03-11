import { useState } from 'react';
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
  HeaderBurger,
  UserBox,
  UserLogo,
  UserBoxList,
} from './header.styled';
import { NavigateItem } from '../navigate/navigate.styled';
import { useDeleteToken } from '../../utils/delete-token';


export const Header = () => {

  const dispatch = useDispatch();

  const [isOpenUserBox, setIsOpenUserBox] = useState(false);

  const { isBurgerMenuOpen } = useSelector((state: IState) => state.reducer);

  function toggleBurgerMenu() {
    dispatch(changeBurgerMenu(!isBurgerMenuOpen));
  };

  const unAuthorizedUser = useDeleteToken();

  return (
    <HeaderWrapper className={isOpenUserBox ? 'open' : ''}>
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
          <UserLogo src={avatar} alt='avatar' onClick={() => setIsOpenUserBox(!isOpenUserBox)} />

        </HeaderUserBox>
        <UserBox className={isOpenUserBox ? 'open' : ''} >
          <UserBoxList>
            <NavigateItem>Профиль</NavigateItem>
            {/* <NavigateItem data-test-id='exit-button' onClick={() => unAuthorizedUser()}>Выход</NavigateItem> */}
            <NavigateItem onClick={() => unAuthorizedUser()}>Выход</NavigateItem>
          </UserBoxList>
        </UserBox>
      </HeaderContent>

    </HeaderWrapper>
  )
};

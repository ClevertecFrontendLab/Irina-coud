import { RefObject, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ICategoryBook, useMakeNavigate } from '../../../components/main-layout/navigate/use-make-navigate';
import { useOnClickOutside } from '../../../helper';

import { changeBurgerMenu, changeMenu, changeOpenCategory } from '../../../store/reducer/actions';
import { IState } from '../../../store/reducer/type';

import {
  AccordionButton,
  NavigateBookLink,
  NavigateBooksCount,
  NavigateCategories,
  NavigateCategory,
  NavigateContainer,
  NavigateItem,
  NavigateLink,
  NavigateLinkItem,
  NavigateList,
  NavigateProfile,
} from './burger.styled';

export const Burger = () => {
  const categoryBooks = useMakeNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isSelectedBook = location.pathname.includes('books');
  const { isBurgerMenuOpen, isOpenCategory } = useSelector((state: IState) => state.mainReducer);
  const nav = useRef() as RefObject<HTMLDivElement>;

  function handlerClick(event: { currentTarget: any }) {
    const payload = event.currentTarget.dataset.info;
    dispatch(changeMenu(payload));
    dispatch(changeOpenCategory(!isOpenCategory))
    event.currentTarget.classList.add('active');
  };

  function clickOtherButtonAccordion(event: { currentTarget: any }) {
    if (isSelectedBook) {
      dispatch(changeOpenCategory(!isOpenCategory))
    }
    event.currentTarget.classList.add('active');
  };

  useOnClickOutside(nav, () => {
    if (isBurgerMenuOpen) {
      dispatch(changeBurgerMenu(!isBurgerMenuOpen));
    }
  });

  return (
    <NavigateContainer className={isBurgerMenuOpen ? 'active' : ''} ref={nav} data-test-id='burger-navigation'>
      <NavigateList
        background={isSelectedBook ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'}
        className={isOpenCategory ? 'open' : ''}
      >
        <NavigateItem onClick={(event) => handlerClick(event)} data-info='books'>
          <NavigateBookLink
            to='books/all'
            background={isSelectedBook ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'}
            data-test-id='burger-showcase'
          >
            Витрина книг
          </NavigateBookLink>
          <AccordionButton className={!isSelectedBook ? 'hidden' : isOpenCategory ? 'open' : ''} />
        </NavigateItem>
        <NavigateCategories className={isOpenCategory ? 'active' : ''}>
          {categoryBooks.map((category: ICategoryBook) => (
            <NavigateCategory key={category.id}>
              <NavigateLink
                to={category.to}
                onClick={() => dispatch(changeBurgerMenu(!isBurgerMenuOpen))}
                data-test-id='burger-books'
              >
                {category.title}
              </NavigateLink>
              <NavigateBooksCount>{category.count}</NavigateBooksCount>
            </NavigateCategory>
          ))}
        </NavigateCategories>
        <NavigateItem onClick={(event) => clickOtherButtonAccordion(event)} data-info='rules'>
          <NavigateLinkItem to='rules' data-test-id='burger-terms'>
            Правила пользования
          </NavigateLinkItem>
        </NavigateItem>
        <NavigateItem onClick={(event) => clickOtherButtonAccordion(event)} data-info='offer'>
          <NavigateLinkItem to='offer' data-test-id='burger-contract'>
            Договор оферты
          </NavigateLinkItem>
        </NavigateItem>
      </NavigateList>
      <NavigateProfile>
        <NavigateItem>Профиль</NavigateItem>
        <NavigateItem>Выход</NavigateItem>
      </NavigateProfile>
    </NavigateContainer>
  );
};

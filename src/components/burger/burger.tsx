import { AnchorHTMLAttributes, ReactEventHandler, RefObject, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { CountNavigate } from './count-navigate/count-navigate';

import { useOnClickOutside } from '../../utils/click-outside';

import { useGetBooksQuery, useGetCategoriesQuery } from '../../store/books-info-api';
import { changeBurgerMenu, changeCurrentCategory, changeMenu, changeOpenCategory } from '../../store/reducers/main-slice';
import { IState } from '../../store/reducers/type';

import {
  AccordionButton,
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

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { category } = useParams();

  const isSelectedBook = pathname.includes('books');

  const isSelectedCategory = pathname.includes(`books/${category}`);

  const { isBurgerMenuOpen, isOpenCategory } = useSelector((state: IState) => state.reducer);

  const nav = useRef() as RefObject<HTMLDivElement>;

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

  const { data = [], isSuccess: isSuccessCategories } = useGetCategoriesQuery();
  const { isSuccess: isSuccessBooks } = useGetBooksQuery();

  function handlerClick(event: React.MouseEvent<HTMLElement>) {
    const payload = event.currentTarget.dataset.info as string;

    dispatch(changeMenu(payload));
    event.currentTarget.classList.add('active');
    dispatch(changeOpenCategory(!isOpenCategory))
    if (!isSelectedBook && isOpenCategory) {
      dispatch(changeOpenCategory(!isOpenCategory));
    }
  };

  function handlerClickCategory(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    dispatch(changeBurgerMenu(!isBurgerMenuOpen));
    dispatch(changeCurrentCategory(String(event.currentTarget.innerHTML)));
  };

  return (
    <NavigateContainer
      className={isBurgerMenuOpen ? 'active' : ''}
      ref={nav} data-test-id='burger-navigation'>
      <NavigateList
        className={isOpenCategory ? 'open' : ''}
      >
        <NavigateItem
          onClick={() => handlerClick}
          data-info='books'>
          <NavigateLinkItem
            to='books/all'
            className={isSelectedCategory ? 'active' : ''}
            data-test-id='burger-showcase'
          >
            Витрина книг
          </NavigateLinkItem>
          <AccordionButton className={!isSelectedBook || !isSuccessCategories || !isSuccessBooks ? 'hidden' : isOpenCategory ? 'open' : ''} />
        </NavigateItem>
        {isSuccessCategories && isSuccessBooks ? (<NavigateCategories className={!isSelectedBook ? '' : isOpenCategory ? 'active' : ''}>
          <NavigateCategory>
            <NavigateLink
              to='books/all'
              data-test-id='burger-books'
              onClick={(event) => handlerClickCategory(event)}
            >
              Все книги
            </NavigateLink>
          </NavigateCategory>
          {data.map((item: any) => (
            <NavigateCategory key={item.id}>
              <NavigateLink
                to={`books/${item.path}`}
                onClick={(event) => handlerClickCategory(event)}
                data-test-id={`burger-${item.path}`}
              >
                {item.name}
              </NavigateLink>
              <CountNavigate {...item} />
            </NavigateCategory>
          ))}
        </NavigateCategories>) : ''}
        <NavigateItem
          onClick={() => clickOtherButtonAccordion}
          data-info='rules'>
          <NavigateLinkItem
            to='rules'
            data-test-id='burger-terms'>
            Правила пользования
          </NavigateLinkItem>
        </NavigateItem>
        <NavigateItem
          onClick={() => clickOtherButtonAccordion}
          data-info='offer'>
          <NavigateLinkItem
            to='offer'
            data-test-id='burger-contract'>
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

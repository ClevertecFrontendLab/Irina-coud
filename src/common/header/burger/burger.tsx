import { RefObject, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useOnClickOutside } from '../../../helper';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../../store/books-info-api';
import { changeMenu, changeBurgerMenu, changeOpenCategory } from '../../../store/reducers/main-slice';

import { IState } from '../../../store/reducers/type';

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

  const dispatch = useDispatch();
  const location = useLocation();
  const isSelectedBook = location.pathname.includes('books');
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

  function handlerClick(event: { currentTarget: any }) {
    const payload = event.currentTarget.dataset.info;
    dispatch(changeMenu(payload));
    event.currentTarget.classList.add('active');
    if (!isSelectedBook && isOpenCategory) {
      dispatch(changeOpenCategory(!isOpenCategory));
    }
  };

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
            onClick={() => dispatch(changeOpenCategory(!isOpenCategory))}
            data-test-id='burger-showcase'
          >
            Витрина книг
          </NavigateBookLink>
          <AccordionButton className={!isSelectedBook || !isSuccessCategories || !isSuccessBooks ? 'hidden' : isOpenCategory ? 'open' : ''} />
        </NavigateItem>
        {isSuccessCategories && isSuccessBooks ? (<NavigateCategories className={!isSelectedBook ? '' : isOpenCategory ? 'active' : ''}>
          <NavigateCategory>
            <NavigateLink
              to='books/all'
              data-test-id='burger-books'
            >
              Все книги
            </NavigateLink>
          </NavigateCategory>
          {data.map((item: any) => (
            <NavigateCategory key={item.id}>
              <NavigateLink
                to={`books/${item.path}`}
                onClick={() => dispatch(changeBurgerMenu(!isBurgerMenuOpen))}
                data-test-id='burger-books'
              >
                {item.name}
              </NavigateLink>
              <NavigateBooksCount>{item.count}</NavigateBooksCount>
            </NavigateCategory>
          ))}
        </NavigateCategories>) : ''}
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

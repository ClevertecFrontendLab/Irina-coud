import { RefObject, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { useOnClickOutside } from '../../utils/click-outside';

import { useGetBooksQuery, useGetCategoriesQuery } from '../../store/books-info-api';
import { changeBurgerMenu, changeCurrentCategory, changeMenu, changeOpenCategory } from '../../store/reducers/main-slice';
import { IState } from '../../store/reducers/type';

import {
  AccordionButton,
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

  const { category } = useParams();

  const isSelectedBook = location.pathname.includes('books');

  const isSelectedCategory = location.pathname.includes(`books/${category}`);

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
    dispatch(changeOpenCategory(!isOpenCategory))
    if (!isSelectedBook && isOpenCategory) {
      dispatch(changeOpenCategory(!isOpenCategory));
    }
  };

  return (
    <NavigateContainer className={isBurgerMenuOpen ? 'active' : ''} ref={nav} data-test-id='burger-navigation'>
      <NavigateList
        className={isOpenCategory ? 'open' : ''}
      >
        <NavigateItem onClick={(event) => handlerClick(event)} data-info='books'>
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
              onClick={() => dispatch(changeCurrentCategory('Все книги'))}
            >
              Все книги
            </NavigateLink>
          </NavigateCategory>
          {data.map((item: any, index: number) => (
            <NavigateCategory key={item.id}>
              <NavigateLink
                to={`books/${item.path}`}
                onClick={() => {
                  dispatch(changeBurgerMenu(!isBurgerMenuOpen));
                  dispatch(changeCurrentCategory(item.name))
                }}
                data-test-id='burger-books'
              >
                {item.name}
              </NavigateLink>
              <NavigateBooksCount>{index}</NavigateBooksCount>
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

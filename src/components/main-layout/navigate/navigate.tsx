import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useGetBooksQuery, useGetCategoriesQuery } from '../../../store/books-info-api';
import { changeMenu, changeOpenCategory } from '../../../store/reducers/main-slice';

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
} from './navigate.styled';

export const Navigate = () => {

  const dispatch = useDispatch();

  const location = useLocation();

  const isSelectedBook = location.pathname.includes('books');

  const { isOpenCategory } = useSelector((state: IState) => state.reducer);

  function handlerClick(event: { currentTarget: any }) {
    const payload = event.currentTarget.dataset.info;
    dispatch(changeMenu(payload));
    event.currentTarget.classList.add('active');
    dispatch(changeOpenCategory(!isOpenCategory))
    if (!isSelectedBook && isOpenCategory) {
      dispatch(changeOpenCategory(!isOpenCategory));
    }
  }

  const { data = [], isSuccess: isSuccessCategories } = useGetCategoriesQuery();
  const { isSuccess: isSuccessBooks } = useGetBooksQuery();

  return (
    <NavigateContainer>
      <NavigateList
        background={isSelectedBook ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'}
      >
        <NavigateItem onClick={(event) => handlerClick(event)} data-info='books' >
          <NavigateBookLink
            to='books/all'
            background={isSelectedBook ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'}
            data-test-id='navigation-showcase'
          >
            Витрина книг
          </NavigateBookLink>
          <AccordionButton className={!isSelectedBook || !isSuccessCategories || !isSuccessBooks ? 'hidden' : isOpenCategory ? 'open' : ''} />
        </NavigateItem>
        {isSuccessCategories && isSuccessBooks ? (<NavigateCategories className={!isSelectedBook ? '' : isOpenCategory ? 'active' : ''}>
          <NavigateCategory>
            <NavigateLink
              to='books/all'
              data-test-id='navigation-books'
            >
              Все книги
            </NavigateLink>
          </NavigateCategory>
          {data.map((item: any, index: number) => (
            <NavigateCategory key={item.id}>
              <NavigateLink
                to={`books/${item.path}`}
                data-test-id='navigation-books'
              >
                {item.name}
              </NavigateLink>
              <NavigateBooksCount>{index}</NavigateBooksCount>
            </NavigateCategory>
          ))}
        </NavigateCategories>) : ''}

        <NavigateItem onClick={(event) => handlerClick(event)} data-info='rules'>
          <NavigateLinkItem to='rules' data-test-id='navigation-terms'>
            Правила пользования
          </NavigateLinkItem>
        </NavigateItem>
        <NavigateItem onClick={(event) => handlerClick(event)} data-info='offer'>
          <NavigateLinkItem to='offer' data-test-id='navigation-contract'>
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

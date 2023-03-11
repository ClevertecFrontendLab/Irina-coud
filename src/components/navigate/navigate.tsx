import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { CountNavigate } from './count-navigate/count-navigate';

import { useGetBooksQuery, useGetCategoriesQuery, useLazyGetBooksQuery, useLazyGetCategoriesQuery } from '../../store/books-info-api';
import { changeCurrentCategory, changeMenu, changeOpenCategory } from '../../store/reducers/main-slice';
import { IBooksCategories, IState } from '../../store/reducers/type';

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
} from './navigate.styled';
import { getLoginToken } from '../../utils/get-token';


export const Navigate = () => {

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { category } = useParams();

  const isSelectedBook = pathname.includes('books');

  const isSelectedCategory = pathname.includes(`books/${category}`);

  const { isOpenCategory, booksCategories } = useSelector((state: IState) => state.reducer);

  function handlerClick(event: React.MouseEvent<HTMLElement>) {
    const payload = event.currentTarget.dataset.info as string;

    dispatch(changeMenu(payload));
    event.currentTarget.classList.add('active');
    dispatch(changeOpenCategory(!isOpenCategory))
    if (!isSelectedBook && isOpenCategory) {
      dispatch(changeOpenCategory(!isOpenCategory));
    }
  }

  function handlerClickCategory(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    dispatch(changeCurrentCategory(String(event.currentTarget.innerHTML)));
  };

  // const [triggerCategories, { isSuccess: isSuccessCategories }] = useLazyGetCategoriesQuery();
  // const { isSuccess: isSuccessBooks } = useGetBooksQuery();


  // const token = getLoginToken();

  // useEffect(() => {
  //   if (token) {
  //     triggerCategories()
  //   }

  // }, [triggerCategories, token]);


  const [triggerCategories, { isSuccess: isSuccessCategories }] = useLazyGetCategoriesQuery();
  const [triggerBooks, { isSuccess: isSuccessBooks }] = useLazyGetBooksQuery();


  const token = getLoginToken();

  useEffect(() => {
    if (token) {
      triggerCategories();
      triggerBooks();
    }
  }, [triggerCategories, triggerBooks, token]);




  return (
    <NavigateContainer>
      <NavigateList>
        <NavigateItem
          onClick={() => handlerClick}
          data-info='books' >
          <NavigateLinkItem
            to='books/all'
            className={isSelectedCategory ? 'active' : ''}
            data-test-id='navigation-showcase'
          >
            Витрина книг
          </NavigateLinkItem>
          <AccordionButton className={!isSelectedBook || !isSuccessCategories || !isSuccessBooks ? 'hidden' : isOpenCategory ? 'open' : ''} />
        </NavigateItem>
        {isSuccessCategories && isSuccessBooks ? (<NavigateCategories className={!isSelectedBook ? '' : isOpenCategory ? 'active' : ''}>
          <NavigateCategory>
            <NavigateLink
              to='books/all'
              data-test-id='navigation-books'
              onClick={(event) => handlerClickCategory(event)}
            >
              Все книги
            </NavigateLink>
          </NavigateCategory>
          {booksCategories.map((item: IBooksCategories) => (
            <NavigateCategory key={item.id}>
              <NavigateLink
                to={`books/${item.path}`}
                data-test-id={`navigation-${item.path}`}
                onClick={(event) => handlerClickCategory(event)}
              >
                {item.name}
              </NavigateLink>
              <CountNavigate {...item} />
            </NavigateCategory>
          ))}
        </NavigateCategories>) : ''}
        <NavigateItem
          onClick={() => handlerClick}
          data-info='rules'>
          <NavigateLinkItem to='rules' data-test-id='navigation-terms'>
            Правила пользования
          </NavigateLinkItem>
        </NavigateItem>
        <NavigateItem
          onClick={() => handlerClick}
          data-info='offer'>
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

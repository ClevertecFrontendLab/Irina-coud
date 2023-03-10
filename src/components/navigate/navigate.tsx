import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { CountNavigate } from './count-navigate/count-navigate';

import { useLazyGetBooksQuery, useLazyGetCategoriesQuery } from '../../store/books-info-api';
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

  const [triggerCategories, { isSuccess: isSuccessCategories }] = useLazyGetCategoriesQuery();
  const [triggerBooks, { isSuccess: isSuccessBooks }] = useLazyGetBooksQuery();

  const token = getLoginToken();

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
            ?????????????? ????????
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
              ?????? ??????????
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
            ?????????????? ??????????????????????
          </NavigateLinkItem>
        </NavigateItem>
        <NavigateItem
          onClick={() => handlerClick}
          data-info='offer'>
          <NavigateLinkItem to='offer' data-test-id='navigation-contract'>
            ?????????????? ????????????
          </NavigateLinkItem>
        </NavigateItem>
      </NavigateList>
      <NavigateProfile>
        <NavigateItem>??????????????</NavigateItem>
        <NavigateItem>??????????</NavigateItem>
      </NavigateProfile>
    </NavigateContainer>
  );
};

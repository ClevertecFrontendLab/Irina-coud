import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { changeMenu, changeOpenCategory } from '../../../store/reducer/actions';
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
} from './navigate.styled';

import { useMakeNavigate } from './use-make-navigate';

export const Navigate = () => {
  const categoryBooks = useMakeNavigate();

  const dispatch = useDispatch();

  const location = useLocation();

  const isSelectedBook = location.pathname.includes('books');

  const { isOpenCategory } = useSelector((state: IState) => state.mainReducer);

  function handlerClick(event: { currentTarget: any }) {
    const payload = event.currentTarget.dataset.info;
    dispatch(changeMenu(payload));
    event.currentTarget.classList.add('active');
  }

  return (
    <NavigateContainer>
      <NavigateList
        background={isSelectedBook ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'}
      >
        <NavigateItem onClick={(event) => handlerClick(event)} data-info='books'>
          <NavigateBookLink
            to='books/all'
            background={isSelectedBook ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'}
            onClick={() => dispatch(changeOpenCategory(!isOpenCategory))}
            data-test-id='navigation-showcase'
          >
            Витрина книг
          </NavigateBookLink>
          <AccordionButton className={!isSelectedBook ? 'hidden' : isOpenCategory ? 'open' : ''} />
        </NavigateItem>
        <NavigateCategories className={!isSelectedBook ? '' : isOpenCategory ? 'active' : ''}>
          {categoryBooks.map((category) => (
            <NavigateCategory key={category.id}>
              <NavigateLink
                to={category.to}
                data-test-id='navigation-books'
              >
                {category.title}
              </NavigateLink>
              <NavigateBooksCount>{category.count}</NavigateBooksCount>
            </NavigateCategory>
          ))}
        </NavigateCategories>
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

import { useSelector } from 'react-redux';

import { BookCard } from './book-card/book-card';

import { BooksWrapper } from './books-container.styled';

import { IState } from '../../../store/reducers/type';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../../store/books-info-api';

export const BooksContainer = () => {

  const { isActiveTail } = useSelector((state: IState) => state.reducer);

  const { isSuccess: isSuccessCategories } = useGetCategoriesQuery();
  const { isSuccess: isSuccessBooks } = useGetBooksQuery();


  return (
    <BooksWrapper className={isActiveTail ? 'tail' : 'list'} >
      {isSuccessCategories && isSuccessBooks ? (
        <BookCard />
      ) : ''}
    </BooksWrapper>
  )
};
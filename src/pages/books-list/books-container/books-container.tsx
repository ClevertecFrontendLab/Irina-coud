import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { BookCard } from './book-card/book-card';

import { IState } from '../../../store/reducers/type';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../../store/books-info-api';

import { BooksWrapper } from './books-container.styled';

export const BooksContainer = () => {

  const { isActiveTail } = useSelector((state: IState) => state.reducer);

  const { isSuccess: isSuccessCategories } = useGetCategoriesQuery();
  const { isSuccess: isSuccessBooks, refetch } = useGetBooksQuery();

  const { category, bookId } = useParams();

  const { pathname } = useLocation();

  const refetchLocation = pathname.includes(`books/${category}/${bookId}`)

  useEffect(() => {
    refetch()
  }, [refetchLocation, refetch]);

  return (
    <BooksWrapper className={isActiveTail ? 'tail' : 'list'} >
      {isSuccessCategories && isSuccessBooks ? (
        <BookCard />
      ) : ''}
    </BooksWrapper>
  )
};

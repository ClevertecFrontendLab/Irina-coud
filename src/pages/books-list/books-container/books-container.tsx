import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { BookCard } from './book-card/book-card';

import { IState } from '../../../store/reducers/type';

import { BooksWrapper } from './books-container.styled';

export const BooksContainer = () => {

  const { isActiveTail } = useSelector((state: IState) => state.reducer);

  return (
    <BooksWrapper className={isActiveTail ? 'tail' : 'list'} >
      <BookCard />
    </BooksWrapper>
  )
};

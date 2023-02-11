import { useSelector } from 'react-redux';

import { BookCard } from './book-card/book-card';

import { BooksWrapper } from './books-container.styled';

import { IState } from '../../../store/reducer/type';

export const BooksContainer = () => {

  const { isActiveTail } = useSelector((state: IState) => state.mainReducer);

  return (
    <BooksWrapper className={isActiveTail ? 'tail' : 'list'} >
      <BookCard />
    </BooksWrapper>
  )
};

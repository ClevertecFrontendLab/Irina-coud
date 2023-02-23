import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Rating } from '../../../../components/rating/rating';
import { Highlight } from './highlight/highlight';

import { IState } from '../../../../store/reducers/type';
import { changeIdCurrentBook } from '../../../../store/reducers/main-slice';

import { LINK_HOST } from '../../../../constants';

import emptyCat from '../../../../assets/image/empty.jpg';

import {
  BookAuthor,
  BookBtn,
  BookBtnContainer,
  BookCardWrapper,
  BookImage,
  BookImageContainer,
  BooksCard,
  BookTitle,
  RatingBox
} from './book-card.styled';
import { EmptyFilteredBooks } from '../../../../components/empty-books/empty-books';
import { useFilters } from '../../../../utils/use-filters';
import { EmptySearch } from '../../../../components/empty-search/empty-search';

export const BookCard = () => {

  const dispatch = useDispatch();

  const { isActiveTail, booksInfo, searchValue } = useSelector((state: IState) => state.reducer);

  const currentDisplay = isActiveTail ? 'tail' : 'list';

  const filteredBooks = useFilters(booksInfo);

  return (
    <React.Fragment>
      <BookCardWrapper />
      {filteredBooks.length ? (filteredBooks.map((card) => (
        <BooksCard key={card.id} data-test-id='card' to={String(card.id)} className={currentDisplay} onClick={() => dispatch(changeIdCurrentBook(String(card.id)))}>
          <BookImageContainer className={currentDisplay} >
            <BookImage src={card.image ? `${LINK_HOST}${card.image.url}` : `${emptyCat}`}
              className={currentDisplay} />
          </BookImageContainer>
          <RatingBox className={currentDisplay}>
            <Rating rating={card.rating} />
          </RatingBox>
          <BookTitle className={currentDisplay}><Highlight title={card.title} /></BookTitle>
          <BookAuthor className={currentDisplay}>{card.authors},{card.issueYear}</BookAuthor>
          <BookBtnContainer className={currentDisplay}>
            <BookBtn className={currentDisplay} onClick={(event) => event.preventDefault()}>Забронировать</BookBtn>
          </BookBtnContainer>
        </BooksCard>
      ))) : !filteredBooks.length && searchValue !== '' ? <EmptySearch /> : <EmptyFilteredBooks />}
    </React.Fragment>
  )
};

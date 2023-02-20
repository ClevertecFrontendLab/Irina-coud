import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Rating } from '../rating/rating';

import { IState } from '../../store/reducers/type';
import { changeIdCurrentBook } from '../../store/reducers/main-slice';

import { LINK_HOST } from '../../constants';

import emptyCat from '../../assets/image/empty.jpg';

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

export const BookCard = () => {

  const dispatch = useDispatch();

  const { isActiveTail, booksInfo } = useSelector((state: IState) => state.reducer);

  const currentDisplay = isActiveTail ? 'tail' : 'list';

  return (
    <React.Fragment>
      <BookCardWrapper />
      {booksInfo ? (booksInfo.map((card) => (
        <BooksCard key={card.id} data-test-id='card' to={String(card.id)} className={currentDisplay} onClick={() => dispatch(changeIdCurrentBook(String(card.id)))}>
          <BookImageContainer className={currentDisplay} >
            <BookImage src={card.image ? `${LINK_HOST}${card.image.url}` : `${emptyCat}`}
              className={currentDisplay} />
          </BookImageContainer>
          <RatingBox className={currentDisplay}>
            <Rating rating={card.rating} />
          </RatingBox>
          <BookTitle className={currentDisplay}>{card.title}</BookTitle>
          <BookAuthor className={currentDisplay}>{card.authors},{card.issueYear}</BookAuthor>
          <BookBtnContainer className={currentDisplay}>
            <BookBtn className={currentDisplay} onClick={(event) => event.preventDefault()}>Забронировать</BookBtn>
          </BookBtnContainer>
        </BooksCard>
      ))) : ''}
    </React.Fragment>
  )
};

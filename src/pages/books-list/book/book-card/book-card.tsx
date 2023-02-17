import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { Rating } from './rating/rating';

import { IState } from '../../../../store/reducers/type';
import { changeIdCurrentBook } from '../../../../store/reducers/main-slice';

import emptyCat from '../../../../assets/image/empty.jpg';

export const BookCard = () => {

  const dispatch = useDispatch();

  const { isActiveTail, booksInfo } = useSelector((state: IState) => state.reducer);

  const currentDisplay = isActiveTail ? 'tail' : 'list';

  const host = 'https://strapi.cleverland.by';

  return (
    <React.Fragment>
      <BookCardWrapper />
      {booksInfo ? (booksInfo.map((card) => (
        <BooksCard key={card.id} data-test-id='card' to={String(card.id)} className={currentDisplay} onClick={() => dispatch(changeIdCurrentBook(String(card.id)))}>
          <BookImageContainer className={currentDisplay} >
            <BookImage src={card.image ? `${host}${card.image.url}` : `${emptyCat}`}
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

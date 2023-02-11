import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BookAuthor,
  BookBtn,
  BookBtnContainer,
  BookImage,
  BookImageContainer,
  BooksCard,
  BookTitle,
  RatingBox
} from './book-card.styled';
import { Rating } from './rating/rating';
import { cardInfo } from '../../../../constants/book-info';
import { IState } from '../../../../store/reducer/type';
import { changeIdCurrentBook } from '../../../../store/reducer/actions';

export const BookCard = () => {

  const dispatch = useDispatch();

  const { isActiveTail } = useSelector((state: IState) => state.mainReducer);

  const currentDisplay = isActiveTail ? 'tail' : 'list';

  return (
    <React.Fragment>
      {cardInfo.map((card) => (
        <BooksCard key={card.id} data-test-id='card' to={card.id} className={currentDisplay} onClick={() => dispatch(changeIdCurrentBook(card.id))}>
          <BookImageContainer className={currentDisplay} >
            <BookImage src={card.url[0]} className={currentDisplay} />
          </BookImageContainer>
          <RatingBox className={currentDisplay}>
            <Rating />
          </RatingBox>
          <BookTitle className={currentDisplay}>{card.title}</BookTitle>
          <BookAuthor className={currentDisplay}>{card.author}</BookAuthor>
          <BookBtnContainer className={currentDisplay}>
            <BookBtn className={currentDisplay}>Забронировать</BookBtn>
          </BookBtnContainer>
        </BooksCard>))}
    </React.Fragment>
  )
};

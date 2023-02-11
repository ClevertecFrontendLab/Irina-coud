import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Slider } from './swiper/swiper';

import { BreadCrumbs } from './bread-crumbs/bread-crumbs';

import { Review } from './reviews/review';
import {
  AccordionButton,
  BookAuthor,
  BookBtnBooking,
  BookBtnReview,
  BookDescriptionText,
  BookDetailInfo,
  BookDetailInfoContainer,
  BookDetailList,
  BookDetailListTitle,
  BookDetailListTitleItem,
  BookImageBox,
  BookInfo,
  BookPageWrapper,
  BookRatingBox,
  BookSubtitle,
  BookTitle,
  ReviewBox,
  ReviewsContainer
} from './book-page.styled';
import { Rating } from '../books-list/book/book-card/rating/rating';

import { useMakeReview } from './reviews/use-make-review';

import { IState } from '../../store/reducer/type';
import { changeOpenReview } from '../../store/reducer/actions';

import { cardInfo } from '../../constants/book-info';

export const BookPage = () => {

  const [{ title, author, rating, description }] = cardInfo;

  const dispatch = useDispatch()

  const reviewers = useMakeReview();

  const { isOpenReview } = useSelector((state: IState) => state.mainReducer);

  return (
    <React.Fragment>
      <BreadCrumbs />
      <BookPageWrapper>
        <BookInfo>
          <BookImageBox>
            <Slider />
          </BookImageBox>
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
          <BookBtnBooking>Забронировать</BookBtnBooking>
          <BookSubtitle>О книге</BookSubtitle>
          <BookDescriptionText>{description}</BookDescriptionText>
        </BookInfo>
        <BookSubtitle>Рейтинг</BookSubtitle>
        <BookRatingBox>
          <Rating />
          <span>{rating}</span>
        </BookRatingBox>
        <BookSubtitle>Подробная информация</BookSubtitle>
        <BookDetailInfoContainer>
          <BookDetailInfo>
            <BookDetailListTitle>
              <li>Издательство</li>
              <li>Год издания</li>
              <li>Страниц</li>
              <li>Переплёт</li>
              <li>Формат</li>
            </BookDetailListTitle>
            <BookDetailList>
              <li>Питер</li>
              <li>2019</li>
              <li>288</li>
              <li>Мягкая обложка</li>
              <li>70х100</li>
            </BookDetailList>
          </BookDetailInfo>
          <BookDetailInfo>
            <BookDetailListTitle>
              <BookDetailListTitleItem>Жанр</BookDetailListTitleItem>
              <li>Вес</li>
              <li>ISBN</li>
              <li>Изготовитель</li>
            </BookDetailListTitle>
            <BookDetailList>
              <li>Компьютерная литература</li>
              <li>370 г</li>
              <li>978-5-4461-0923-4</li>
              <li>ООО Питер Мейл. РФ, 198206, г.Санкт-Петербург, Петергофское ш, д.73, лит. А29</li>
            </BookDetailList>
          </BookDetailInfo>
        </BookDetailInfoContainer>
        <ReviewsContainer>
          <BookSubtitle>Отзывы <span>2</span></BookSubtitle>
          <AccordionButton className={isOpenReview ? 'open' : ''} onClick={() => dispatch(changeOpenReview(!isOpenReview))} data-test-id='button-hide-reviews' />
          <ReviewBox className={isOpenReview ? '' : 'close'}>{reviewers.map((item) => (<Review id={item.id} name={item.name} dataTime={item.dataTime} text={item.text} />))}</ReviewBox>
        </ReviewsContainer>
        <BookBtnReview data-test-id='button-rating'>Оценить книгу</BookBtnReview>
      </BookPageWrapper>
    </React.Fragment>
  )
};

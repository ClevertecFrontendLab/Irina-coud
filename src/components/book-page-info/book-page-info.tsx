import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Slider } from '../swiper/swiper';
import { Rating } from '../rating/rating';
import { IReviewer, Review } from '../reviews/review';

import { IState } from '../../store/reducers/type';
import { changeOpenReview } from '../../store/reducers/main-slice';

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
  RatingIsEmpty,
  RatingIsNotEmpty,
  ReviewBox,
  ReviewsContainer
} from './book-page-info.styled';

export interface IBookInfo {
  ISBN: string;
  authors: [string];
  booking: null;
  categories: [string];
  comments: null | [];
  cover: string;
  delivery: null;
  description: string;
  format: string;
  histories: null;
  id: number;
  images: [{ url: string }];
  issueYear: string;
  pages: string;
  producer: string;
  publish: string;
  rating: null;
  title: string;
  weight: string;
}

export const BookPage = ({ data }: { data: IBookInfo }) => {

  const dispatch = useDispatch()

  const { isOpenReview } = useSelector((state: IState) => state.reducer);

  const { title, authors, rating, description, ISBN, publish, pages, cover, weight, format, producer, issueYear, categories, images, comments } = data;

  return (
    <BookPageWrapper>
      <BookInfo>
        <BookImageBox>
          <Slider images={images} />
        </BookImageBox>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{authors}</BookAuthor>
        <BookBtnBooking>Забронировать</BookBtnBooking>
        <BookSubtitle>О книге</BookSubtitle>
        <BookDescriptionText>{description}</BookDescriptionText>
      </BookInfo>
      <BookSubtitle>Рейтинг</BookSubtitle>
      <BookRatingBox>
        <Rating rating={rating} />
        {rating ? <RatingIsNotEmpty>{rating}</RatingIsNotEmpty> : <RatingIsEmpty>еще нет оценок</RatingIsEmpty>}
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
            <li>{publish}</li>
            <li>{issueYear}</li>
            <li>{pages}</li>
            <li>{cover}</li>
            <li>{format}</li>
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
            <li>{categories}</li>
            <li>{weight}</li>
            <li>{ISBN}</li>
            <li>{producer}</li>
          </BookDetailList>
        </BookDetailInfo>
      </BookDetailInfoContainer>
      <ReviewsContainer>
        <BookSubtitle>Отзывы <span>{comments ? comments.length : '0'}</span></BookSubtitle>
        {comments && (<React.Fragment> <AccordionButton className={isOpenReview ? 'open' : ''} onClick={() => dispatch(changeOpenReview(!isOpenReview))} data-test-id='button-hide-reviews' />
          <ReviewBox className={isOpenReview ? '' : 'close'}>{comments?.map((item: IReviewer) => (
            <Review key={item.id} item={item} />))}
          </ReviewBox></React.Fragment>)}
      </ReviewsContainer>
      <BookBtnReview data-test-id='button-rating'>Оценить книгу</BookBtnReview>
    </BookPageWrapper>
  )
};

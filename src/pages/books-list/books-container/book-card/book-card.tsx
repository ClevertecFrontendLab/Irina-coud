import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { Rating } from '../../../../components/rating/rating';
import { Highlight } from './highlight/highlight';
import { EmptyComponent } from '../../../../components/empty-component/empty-component';

import { IState } from '../../../../store/reducers/type';
import { changeIdCurrentBook } from '../../../../store/reducers/main-slice';

import { LINK_HOST } from '../../../../constants';

import { useFilters } from '../../../../utils/use-filters';

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

import { useGetBooksQuery, useGetCategoriesQuery, useLazyGetBooksQuery } from '../../../../store/books-info-api';
import { Loader } from '../../../../components/loader/loader';
import { ErrorPopup } from '../../../../components/error/error';
import { getLoginToken } from '../../../../utils/get-token';

export const BookCard = () => {

  const dispatch = useDispatch();

  const { isActiveTail, booksInfo, searchValue } = useSelector((state: IState) => state.reducer);

  const currentDisplay = isActiveTail ? 'tail' : 'list';

  const filteredBooks = useFilters(booksInfo);

  const isEmptySearch = !filteredBooks.length && searchValue !== '';

  const message: string = isEmptySearch ? 'По запросу ничего не найдено' : 'В этой категории книг ещё нет';

  const testId: string = isEmptySearch ? 'search-result-not-found' : 'empty-category';

  const { category, bookId } = useParams();

  const { pathname } = useLocation();

  const token = getLoginToken();

  const refetchLocation = pathname.includes(`books/${category}/${bookId}`)

  const [triggerBooks, { isLoading: isLoadingBooks, isError: booksError, isSuccess: isSuccessBooks }] = useLazyGetBooksQuery();
  const { isLoading: isLoadingCategories, isError: categoryError, isSuccess: isSuccessCategories } = useGetCategoriesQuery();

  useEffect(() => {
    if (token) {
      triggerBooks()
    }

  }, [refetchLocation, triggerBooks, token]);

  console.log(isLoadingBooks, isLoadingCategories)

  const card = isSuccessBooks && isSuccessCategories || filteredBooks.length ? filteredBooks.map((card) => (
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
    </BooksCard>)) : <EmptyComponent text={message} testId={testId} />;

  return (

    <React.Fragment>

      <BookCardWrapper />
      {isLoadingBooks || isLoadingCategories ? <Loader /> : ''}
      {isSuccessBooks && isSuccessCategories && card}
      {booksError || categoryError ? <ErrorPopup /> : ''}
    </React.Fragment>
  )
};

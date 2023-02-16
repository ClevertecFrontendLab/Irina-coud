import React from 'react';

import { useParams } from 'react-router-dom';
import { ErrorPopup } from '../../common/layout/error/error';
import { Loader } from '../../common/layout/loader/loader';
import { useGetBookQuery } from '../../store/books-info-api';
import { BookPage } from './book-page';
import { BookPageContainerWrapper } from './book-page-container.styled';

export const BookPageContainer = () => {

  const { bookId } = useParams();

  const { data = {}, isLoading, error } = useGetBookQuery(bookId);

  return (
    <BookPageContainerWrapper>
      {isLoading ? <Loader /> : error ? <ErrorPopup /> : <BookPage data={data} />}
    </BookPageContainerWrapper>
  )
};
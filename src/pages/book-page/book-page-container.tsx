import { useParams } from 'react-router-dom';

import { ErrorPopup } from '../../components/error/error';
import { Loader } from '../../components/loader/loader';
import { BookPage } from '../../components/book-page-info/book-page-info';
import { BreadCrumbs } from '../../components/bread-crumbs/bread-crumbs';

import { useGetBookQuery } from '../../store/books-info-api';

import { BookPageContainerWrapper } from './book-page-container.styled';

export const BookPageContainer = () => {

  const { bookId } = useParams();

  const { data = {}, isLoading, error } = useGetBookQuery(bookId);

  return (
    <BookPageContainerWrapper>
      <BreadCrumbs title={data.title} />
      {isLoading ? <Loader /> : error ? <ErrorPopup /> : <BookPage data={data} />}
    </BookPageContainerWrapper>
  )
};

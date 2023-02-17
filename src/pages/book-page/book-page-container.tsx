import { useParams } from 'react-router-dom';
import { ErrorPopup } from '../../common/layout/error/error';
import { Loader } from '../../common/layout/loader/loader';
import { useGetBookQuery } from '../../store/books-info-api';
import { BookPage } from './book-page';
import { BookPageContainerWrapper } from './book-page-container.styled';
import { BreadCrumbs } from './bread-crumbs/bread-crumbs';

export const BookPageContainer = () => {

  const { bookId } = useParams();

  const { data = {}, isLoading, error } = useGetBookQuery(bookId);

  return (
    <BookPageContainerWrapper>
      <BreadCrumbs title={data.title} categories={data.categories} />
      {isLoading ? <Loader /> : error ? <ErrorPopup /> : <BookPage data={data} />}
    </BookPageContainerWrapper>
  )
};
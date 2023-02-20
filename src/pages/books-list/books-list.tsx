import { ControlBar } from '../../components/control-bar/control-bar';
import { BooksContainer } from './books-container/books-container';

import { ContentWrapper } from './books-list.styled';

export const BooksList = () => (
  <ContentWrapper>
    <ControlBar />
    <BooksContainer />
  </ContentWrapper>
);

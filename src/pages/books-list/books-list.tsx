import { ControlBar } from './control-bar/control-bar';
import { BooksContainer } from './book/books-container';

import { ContentWrapper } from './books-list.styled';

export const BooksList = () => (
  <ContentWrapper>
    <ControlBar />
    <BooksContainer />
  </ContentWrapper>
);


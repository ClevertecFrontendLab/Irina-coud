import { EmptyFilteredBooksMessage, EmptyFilteredBooksWrapper } from "./empty-books.styled";

export const EmptyFilteredBooks = () => (
  <EmptyFilteredBooksWrapper>
    <EmptyFilteredBooksMessage data-test-id='empty-category'>В этой категории книг ещё нет</EmptyFilteredBooksMessage>
  </EmptyFilteredBooksWrapper>
);
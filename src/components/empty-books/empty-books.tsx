import { EmptyFilteredBooksMessage, EmptyFilteredBooksWrapper } from "./empty-books.styled";

export const EmptyFilteredBooks = () => (
  <EmptyFilteredBooksWrapper>
    <EmptyFilteredBooksMessage>В этой категории книг ещё нет</EmptyFilteredBooksMessage>
  </EmptyFilteredBooksWrapper>
);
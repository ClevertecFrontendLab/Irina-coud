import { EmptyFilteredBooksMessage, EmptyFilteredBooksWrapper } from "./empty-search.styled";


export const EmptySearch = () => (
  <EmptyFilteredBooksWrapper>
    <EmptyFilteredBooksMessage data-test-id='search-result-not-found'>По запросу ничего не найдено</EmptyFilteredBooksMessage>
  </EmptyFilteredBooksWrapper>
);

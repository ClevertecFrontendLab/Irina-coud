import { useSelector } from 'react-redux';

import { IBook, IState } from '../store/reducers/type';

export function useFilters(cards: IBook[]) {

  const { currentCategory, isSortActive, searchValue } = useSelector((state: IState) => state.reducer);

  const sortBooks = [...cards].sort((a: IBook, b: IBook): any => {
    const sorting = Number(a.rating) > Number(b.rating) ? -1 : 1;
    const reversSorting = Number(a.rating) < Number(b.rating) ? -1 : 1;

    return isSortActive ? sorting : reversSorting;
  })
    .filter((item) => item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  const filteredCards = currentCategory === 'Все книги' ? sortBooks : sortBooks
    .filter((item) => item.categories.includes(currentCategory))

  return filteredCards;
};

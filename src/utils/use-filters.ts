import { useSelector } from 'react-redux';

import { IBook, IState } from '../store/reducers/type';

export function useFilters(cards: IBook[]) {

  const { currentCategory, isSortActive } = useSelector((state: IState) => state.reducer);

  const sortBooks = [...cards].sort((a: IBook, b: IBook): any => {
    if (isSortActive) {
      return (a.rating as number) > (b.rating as number) ? -1 : 1;
    }
    if (!isSortActive) {
      return (a.rating as number) < (b.rating as number) ? -1 : 1;
    }
  })

  const filteredCards = currentCategory === 'Все книги' ? sortBooks : sortBooks
    .filter((item) => item.categories.includes(currentCategory))
  return filteredCards;
};

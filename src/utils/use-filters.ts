import { useSelector } from 'react-redux';

import { IBook, IState } from '../store/reducers/type';

export function useFilters(cards: IBook[]) {

  const { currentCategory } = useSelector((state: IState) => state.reducer);

  const filteredCards = currentCategory === 'Все книги' ? cards : cards
    .filter((item) => item.categories.includes(currentCategory));

  return filteredCards;
};

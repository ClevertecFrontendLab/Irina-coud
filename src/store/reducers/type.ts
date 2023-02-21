export interface IBook {
  authors: [string],
  booking: null,
  categories: [string],
  delivery: null,
  histories: null,
  id: number,
  image: { url: [string] },
  issueYear: string,
  rating: number | null,
  title: string
}

export interface IBooksCategories {
  name: string,
  path: string,
  id: number,
}

export interface IDefaultState {
  isActiveTail: boolean,
  isActiveList: boolean,
  currentItemMenu: string,
  isBurgerMenuOpen: boolean,
  isOpenCategory: boolean,
  isSearchActive: boolean,
  isOpenReview: boolean,
  idCurrentBook: string,
  booksInfo: IBook[],
  booksCategories: IBooksCategories[],
  currentCategory: string
};

export interface IState {
  reducer: IDefaultState;
};

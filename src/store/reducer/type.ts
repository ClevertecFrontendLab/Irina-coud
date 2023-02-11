export interface IDefaultState {
  isActiveTail: boolean,
  isActiveList: boolean,
  currentItemMenu: string,
  isBurgerMenuOpen: boolean,
  isOpenCategory: boolean,
  isSearchActive: boolean,
  isOpenReview: boolean,
  idCurrentBook: string
};

export interface IState {
  mainReducer: IDefaultState;
};

export interface ILocalState {
  [key: string]: object;
};

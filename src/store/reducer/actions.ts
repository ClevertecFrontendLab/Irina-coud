import { createAction } from '@reduxjs/toolkit';

export const CHANGE_DISPLAY = 'CHANGE_DISPLAY';
export const CHANGE_MENU = 'CHANGE_MENU';
export const CHANGE_BURGER_MENU = 'CHANGE_BURGER_MENU';
export const CHANGE_OPEN_CATEGORY = 'CHANGE_OPEN_CATEGORY';
export const CHANGE_ACTIVE_SEARCH = 'CHANGE_ACTIVE_SEARCH';
export const CHANGE_OPEN_REVIEW = 'CHANGE_OPEN_REVIEW';
export const CHANGE_ID_CURRENT_BOOK = 'CHANGE_ID_CURRENT_BOOK';

export const changeDisplay = createAction<boolean, typeof CHANGE_DISPLAY>(
  CHANGE_DISPLAY
);

export const changeMenu = createAction<string, typeof CHANGE_MENU>(
  CHANGE_MENU
);

export const changeBurgerMenu = createAction<boolean, typeof CHANGE_BURGER_MENU>(
  CHANGE_BURGER_MENU
);

export const changeOpenCategory = createAction<boolean, typeof CHANGE_OPEN_CATEGORY>(
  CHANGE_OPEN_CATEGORY
);

export const changeActiveSearch = createAction<boolean, typeof CHANGE_ACTIVE_SEARCH>(
  CHANGE_ACTIVE_SEARCH
);

export const changeOpenReview = createAction<boolean, typeof CHANGE_OPEN_REVIEW>(
  CHANGE_OPEN_REVIEW
);

export const changeIdCurrentBook = createAction<string, typeof CHANGE_ID_CURRENT_BOOK>(
  CHANGE_ID_CURRENT_BOOK
);

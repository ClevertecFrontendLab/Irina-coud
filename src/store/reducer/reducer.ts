import { createReducer } from '@reduxjs/toolkit';

import {
  CHANGE_ACTIVE_SEARCH,
  CHANGE_BURGER_MENU,
  CHANGE_DISPLAY,
  CHANGE_ID_CURRENT_BOOK,
  CHANGE_MENU,
  CHANGE_OPEN_CATEGORY,
  CHANGE_OPEN_REVIEW
} from './actions';
import { IDefaultState } from './type';

export const defaultState: IDefaultState = {
  isActiveTail: true,
  isActiveList: false,
  currentItemMenu: '',
  isBurgerMenuOpen: false,
  isOpenCategory: true,
  isSearchActive: false,
  isOpenReview: true,
  idCurrentBook: '',
};

export const mainReducer = createReducer(defaultState, {
  [CHANGE_DISPLAY]: (
    currentState: IDefaultState
  ) => {
    const state = currentState;

    state.isActiveTail = !state.isActiveTail;
    state.isActiveList = !state.isActiveList;
  },
  [CHANGE_MENU]: (
    currentState: IDefaultState,
    { payload }: { payload: string }
  ) => {
    const state = currentState;

    state.currentItemMenu = payload;
  },
  [CHANGE_BURGER_MENU]: (
    currentState: IDefaultState
  ) => {
    const state = currentState;

    state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
  },
  [CHANGE_OPEN_CATEGORY]: (
    currentState: IDefaultState
  ) => {
    const state = currentState;

    state.isOpenCategory = !state.isOpenCategory;
  },
  [CHANGE_ACTIVE_SEARCH]: (
    currentState: IDefaultState
  ) => {
    const state = currentState;

    state.isSearchActive = !state.isSearchActive;
  },
  [CHANGE_OPEN_REVIEW]: (
    currentState: IDefaultState
  ) => {
    const state = currentState;

    state.isOpenReview = !state.isOpenReview;
  },
  [CHANGE_ID_CURRENT_BOOK]: (
    currentState: IDefaultState,
    { payload }: { payload: string }
  ) => {
    const state = currentState;

    state.idCurrentBook = payload;
  },
});

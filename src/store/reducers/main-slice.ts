import { createSlice } from '@reduxjs/toolkit';

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
  booksInfo: [],
  booksCategories: [],
  currentCategory: 'Все книги',
  isSortActive: true,
  searchValue: ''
};

export const mainSlice = createSlice({
  name: 'main',
  initialState: defaultState,
  reducers: {
    changeDisplay: (currentState: IDefaultState, { payload }: { payload: boolean }) => {
      const state = currentState;

      state.isActiveTail = !state.isActiveTail;
      state.isActiveList = !state.isActiveList;
    },
    changeMenu: (currentState: IDefaultState, { payload }: { payload: string }) => {
      const state = currentState;

      state.currentItemMenu = payload;
    },
    changeBurgerMenu: (currentState: IDefaultState, { payload }: { payload: boolean }) => {
      const state = currentState;

      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
    },
    changeOpenCategory: (currentState: IDefaultState, { payload }: { payload: boolean }) => {
      const state = currentState;

      state.isOpenCategory = !state.isOpenCategory;
    },
    changeActiveSearch: (currentState: IDefaultState, { payload }: { payload: boolean }) => {
      const state = currentState;

      state.isSearchActive = !state.isSearchActive;
    },
    changeOpenReview: (currentState: IDefaultState, { payload }: { payload: boolean }) => {
      const state = currentState;

      state.isOpenReview = !state.isOpenReview;
    },
    changeIdCurrentBook: (currentState: IDefaultState, { payload }: { payload: string }) => {
      const state = currentState;

      state.idCurrentBook = payload;
    },
    loadBooks: (currentState: IDefaultState, { payload }: { payload: [] }) => {
      const state = currentState;

      state.booksInfo = payload;
    },
    loadBooksCategories: (currentState: IDefaultState, { payload }: { payload: [] }) => {
      const state = currentState;

      state.booksCategories = payload;
    },
    changeCurrentCategory: (currentState: IDefaultState, { payload }: { payload: string }) => {
      const state = currentState;

      state.currentCategory = payload;

    },
    changeActiveSort: (currentState: IDefaultState, { payload }: { payload: boolean }) => {
      const state = currentState;

      state.isSortActive = !state.isSortActive;

    },
    changeSearchValue: (currentState: IDefaultState, { payload }: { payload: string }) => {
      const state = currentState;

      state.searchValue = payload;

    },

  }
});

const { actions } = mainSlice;

export const {
  changeDisplay,
  changeMenu,
  changeBurgerMenu,
  changeOpenCategory,
  changeActiveSearch,
  changeOpenReview,
  changeIdCurrentBook,
  loadBooks,
  loadBooksCategories,
  changeCurrentCategory,
  changeActiveSort,
  changeSearchValue
} = actions;

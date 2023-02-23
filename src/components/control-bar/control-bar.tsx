import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../store/reducers/type';
import { changeActiveSearch, changeActiveSort, changeDisplay, changeSearchValue } from '../../store/reducers/main-slice';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../store/books-info-api';

import {
  ButtonSearch,
  ControlBarDisplay,
  ControlBarFilters,
  ControlBarSearch,
  ControlBarSort,
  ControlBarWrapper,
  ControlButtonDisplay,
  StyleCloseIcon,
  StyleListIcon,
  StyleTailIcon
} from './control-bar.styled';

export const ControlBar = () => {

  const dispatch = useDispatch();

  const { isActiveTail, isActiveList, isSearchActive, isSortActive } = useSelector((state: IState) => state.reducer);

  function handlerClick(event: React.MouseEvent<HTMLElement>) {
    const current = event.currentTarget.id;

    if (current === 'tail' && isActiveTail !== true || current === 'list' && isActiveList !== true) {
      dispatch(changeDisplay(true))
    }
  }

  const { isSuccess: isSuccessCategories } = useGetCategoriesQuery();
  const { isSuccess: isSuccessBooks } = useGetBooksQuery();

  return (
    <ControlBarWrapper>
      {isSuccessCategories && isSuccessBooks ? (<React.Fragment>  <ControlBarFilters>
        <ButtonSearch onClick={() => dispatch(changeActiveSearch(!isSearchActive))} data-test-id='button-search-open' />
        <ControlBarSearch
          type="text"
          placeholder='Поиск книги или автора…'
          autoComplete="off"
          className={isSearchActive ? 'active' : ''}
          data-test-id='input-search'
          onChange={(event) =>
            dispatch(changeSearchValue(String(event.currentTarget.value)))
          } />
        <StyleCloseIcon className={isSearchActive ? 'active' : ''} onClick={() => dispatch(changeActiveSearch(!isSearchActive))} data-test-id='button-search-close' />
        <ControlBarSort className={isSortActive ? '' : 'change'} onClick={() => dispatch(changeActiveSort(!isSortActive))} data-test-id='sort-rating-button' ><span>По рейтингу</span></ControlBarSort>
      </ControlBarFilters>
        <ControlBarDisplay>
          <ControlButtonDisplay data-test-id='button-menu-view-window' onClick={(e) => handlerClick(e)} id='tail' background={isActiveTail ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : 'white'}><StyleTailIcon color={isActiveTail ? 'white' : '#A7A7A7'} /></ControlButtonDisplay>
          <ControlButtonDisplay data-test-id='button-menu-view-list' onClick={(e) => handlerClick(e)} id='list' background={isActiveList ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : 'white'}><StyleListIcon color={isActiveList ? 'white' : '#A7A7A7'} /></ControlButtonDisplay>
        </ControlBarDisplay></React.Fragment>) : ''}
    </ControlBarWrapper>
  )
};

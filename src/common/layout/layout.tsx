import { Outlet } from 'react-router-dom';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../store/books-info-api';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { ErrorPopup } from './error/error';

import { Wrapper, WrapperBox } from './layout.styled';
import { Loader } from './loader/loader';

export const Layout = () => {

  const { isLoading: isLoadingBooks, error: booksError } = useGetBooksQuery();
  const { isLoading: isLoadingCategories, error: categoryError } = useGetCategoriesQuery();

  return (
    <Wrapper>
      <Header />
      <WrapperBox>
        {isLoadingBooks && isLoadingCategories ? <Loader /> : <Outlet />}
        {booksError || categoryError ? <ErrorPopup /> : ''}
      </WrapperBox>
      <Footer />
    </Wrapper>
  )
};

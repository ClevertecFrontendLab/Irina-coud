import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';


import { MainLayout } from './components/main-layout/main-layout';
import { BooksList } from './pages/books-list/books-list';
import { Documentation } from './pages/documentation/documentation';
import { Layout } from './components/layout/layout';
import { BookPageContainer } from './pages/book-page/book-page-container';

import { IState } from './store/reducers/type';

export const App = () => {

  const { currentItemMenu } = useSelector((state: IState) => state.reducer);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Navigate to='books/all' />} />
          <Route path='books/:category' element={<BooksList />} />
          <Route path='rules' element={<Documentation title={currentItemMenu} />} />
          <Route path='offer' element={<Documentation title={currentItemMenu} />} />
        </Route>
        <Route path='books/:category/:bookId' element={<BookPageContainer />} />
      </Route>
    </Routes>
  )
};

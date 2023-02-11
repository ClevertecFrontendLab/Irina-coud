import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './common/layout/layout';
import { MainLayout } from './components/main-layout/main-layout';
import { BooksList } from './pages/books-list/books-list';
import { Documentation } from './pages/documentation/documentation';
import { BookPage } from './pages/book-page/book-page';
import { IState } from './store/reducer/type';

export const App = () => {

  const { currentItemMenu } = useSelector((state: IState) => state.mainReducer);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Navigate to='books/all' />} />
          <Route path='books/:category' element={<BooksList />} />
          <Route path='rules' element={<Documentation title={currentItemMenu} />} />
          <Route path='offer' element={<Documentation title={currentItemMenu} />} />
        </Route>
        <Route path='books/:category/:bookId' element={<BookPage />} />
      </Route>
    </Routes>
  )
};

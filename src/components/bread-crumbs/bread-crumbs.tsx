import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IState } from '../../store/reducers/type';

import { BreadCrumbsContainer, BreadCrumbsItem } from './bread-crumbs.styled';

export const BreadCrumbs = ({ title }: { title: string }) => {

  const { category } = useParams();


  const { booksCategories } = useSelector((state: IState) => state.reducer);

  let categoryName = '';

  if (category === 'all') {
    categoryName = 'Все книги'
  }
  else {
    const [{ name }] = booksCategories.filter((item) => item.path === category);

    categoryName = name;
  }

  return (
    <BreadCrumbsContainer>
      <BreadCrumbsItem to={`/books/${category}`} data-test-id='breadcrumbs-link'>{categoryName}</BreadCrumbsItem>
      <p>/</p>
      <p data-test-id='book-name'>{title}</p>
    </BreadCrumbsContainer>
  )
};

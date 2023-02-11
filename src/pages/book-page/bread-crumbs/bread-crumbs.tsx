import { BreadCrumbsContainer, BreadCrumbsItem } from './bread-crumbs.styled';

import { cardInfo } from '../../../constants/book-info';

export const BreadCrumbs = () => {

  const [{ category, title }] = cardInfo;

  return (
    <BreadCrumbsContainer>
      <BreadCrumbsItem to='/'>{category}</BreadCrumbsItem>
      <p>/</p>
      <p>{title}</p>
    </BreadCrumbsContainer>
  )
};

import { useParams } from 'react-router-dom';

import { BreadCrumbsContainer, BreadCrumbsItem } from './bread-crumbs.styled';

export const BreadCrumbs = ({ title, categories }: { title: string, categories: [string] }) => {

  const { category } = useParams();

  return (
    <BreadCrumbsContainer>
      <BreadCrumbsItem to='/'>{categories ? categories : category}</BreadCrumbsItem>
      <p>/</p>
      <p>{title}</p>
    </BreadCrumbsContainer>
  )



}
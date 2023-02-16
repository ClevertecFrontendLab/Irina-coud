import { BreadCrumbsContainer, BreadCrumbsItem } from './bread-crumbs.styled';

export const BreadCrumbs = ({ title, categories }: { title: string, categories: [string] }) => (
  <BreadCrumbsContainer>
    <BreadCrumbsItem to='/'>{categories}</BreadCrumbsItem>
    <p>/</p>
    <p>{title}</p>
  </BreadCrumbsContainer>
);

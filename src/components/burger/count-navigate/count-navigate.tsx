import { useSelector } from "react-redux";

import { IBooksCategories, IState } from "../../../store/reducers/type";
import { NavigateBooksCount } from "./count-navigate.styled";

export const CountNavigate = (props: IBooksCategories) => {

  const { booksInfo } = useSelector((state: IState) => state.reducer);

  return (
    <NavigateBooksCount data-test-id={`burger-book-count-for-${props.path}`}>{booksInfo.filter((book) => book.categories.includes(props.name)).length}</NavigateBooksCount>
  );
};

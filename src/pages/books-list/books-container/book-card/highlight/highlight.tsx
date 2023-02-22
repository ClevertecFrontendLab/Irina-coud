import React from "react";
import { useSelector } from "react-redux";

import { IState } from "../../../../../store/reducers/type";

import { HighlightText } from "./highlight.styled";

export interface IHighlight {
  title: string
}

export const Highlight = (props: IHighlight) => {

  const { title } = props;

  const { searchValue } = useSelector((state: IState) => state.reducer);

  if (!searchValue) return <>{title}</>;
  const regexp = new RegExp(searchValue, 'ig');
  const matchValue = title.match(regexp);

  if (matchValue) {
    return <>
      {
        title.split(regexp).map((item, index, array) => {
          if (index < array.length - 1) {
            const itemValue = matchValue.shift()
            return <>{item}<HighlightText>{itemValue}</HighlightText></>
          }
          return <>{item}</>;
        })
      }

    </>
  }
  return <>{title}</>;
};
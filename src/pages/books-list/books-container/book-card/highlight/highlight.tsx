import React from 'react';

import { useSelector } from 'react-redux';

import { IState } from '../../../../../store/reducers/type';

import { HighlightText, Title } from './highlight.styled';

export interface IHighlight {
  title: string
}

export const Highlight = (props: IHighlight) => {

  const { title } = props;

  const { searchValue } = useSelector((state: IState) => state.reducer);

  if (!searchValue) return <Title>{title}</Title>;
  const regexp = new RegExp(searchValue, 'ig');
  const matchValue = title.match(regexp);

  if (matchValue) {
    return <React.Fragment>
      {
        title.split(regexp).map((item, index, array) => {
          if (index < array.length - 1) {
            const itemValue = matchValue.shift()

            return <React.Fragment>{item}<HighlightText data-test-id='highlight-matches'>{itemValue}</HighlightText></React.Fragment>
          }

          return <Title>{item}</Title>;
        })
      }

    </React.Fragment>
  }

  return <Title>{title}</Title>;
};
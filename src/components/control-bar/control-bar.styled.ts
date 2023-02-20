import styled from 'styled-components';

import search from '../../assets/icon/search.svg';
import sort from '../../assets/icon/sort.svg';

import { ReactComponent as TailIcon } from '../../assets/icon/tile.svg';
import { ReactComponent as ListIcon } from '../../assets/icon/list.svg';
import { ReactComponent as CloseIcon } from '../../assets/icon/close-icon.svg';

interface ButtonProps {
  background: string
};

export const ControlBarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
        @media screen and (max-width: 680px) {
         flex-wrap: nowrap;
      }
`;

export const ControlBarFilters = styled.div`
  display: flex;
  column-gap: 16px;
  max-width: 516px;
  width: 100%; 
    @media screen and (max-width: 330px) {
        column-gap: 6px;
      max-width: 80px;
    justify-content: space-between;
    }
`;

export const ControlBarSearch = styled.input`
  width: 350px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;
  background: url(${search}) 16px center / 16px no-repeat;
  padding: 0 0 0 40px;
      height: 38px;
    @media screen and (max-width: 780px) {
      max-width: 274px;
    }
    @media screen and (max-width: 680px) {
      width: 0;
      height: 0;
      overflow: hidden;
        padding: 0;
      ::placeholder{
        color: transparent;
      }
    }
    @media screen and (max-width: 330px) {
    &.active{    
  position: absolute;
    z-index: 500;
        max-width: 288px;
        width: 100%;
        height: 38px;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;
  background: white;
  padding: 0 0 0 16px;
    caret-color: #F83600;
        ::placeholder{
        color: #A7A7A7;
      }
    }
    
    }
`;

export const ButtonSearch = styled.button`
display: none;
   @media screen and (max-width: 680px) {
    display: block;
       width: 32px;
      height: 32px;
       background: url(${search}) center center / 16px no-repeat;
       box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
      border-radius: 50%;
   }
    
`

export const ControlBarSort = styled.button`
  max-width: 150px;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  background: url(${sort}) 16px center / 16px no-repeat;
  border-radius: 599px;
  padding: 0 0 0 23px;
  cursor: pointer;
    @media screen and (min-width: 680px) {
      ::after {
        content: 'По рейтингy';
        display: inline-block;
      }
     }
    @media screen and (max-width: 680px) {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-position: center center;
    }
`;

export const ControlBarDisplay = styled.div`
  display: flex;
  gap: 16px;
`;

export const ControlButtonDisplay = styled.button<ButtonProps> `
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  cursor: pointer;
    &{
      background: ${({ background }) => background};
    }
    @media screen and (max-width: 680px) {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
`;

export const StyleCloseIcon = styled(CloseIcon)`
  overflow: hidden;
height: 0;
width: 0;


&.active{
  position: absolute;
  z-index: 999;
    left: 270px;
    top: 94px;
    height: 16px;
    width: 16px;
}

`

export const StyleTailIcon = styled(TailIcon)`
  display: flex;
  margin: 0 auto;
  width: 20px;
  height: 20px;
    & path{
      fill: #A7A7A7
    }
    & path {
      fill: ${({ color }) => color};
    }
`;

export const StyleListIcon = styled(ListIcon)`
  display: flex;
  margin: 0 auto;
  width: 20px;
  height: 20px;
    & path{
      fill: #A7A7A7
    }
    & path {
      fill: ${({ color }) => color};
    }
`;

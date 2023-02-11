import styled from 'styled-components';

interface IDisplayProps {
  className: string
}

export const BooksWrapper = styled.ul<IDisplayProps>`
  display: flex;
  &.tail {
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 21px;
      @media screen and (max-width: 885px) {
        justify-content: space-between;
        row-gap: 32px;
      }
      @media screen and (max-width: 480px) {
        justify-content: center;
        row-gap: 29px;
      }
      @media screen and (max-width: 330px) {
        row-gap: 16px;
      }
   }
  &.list{
    flex-direction: column;
    row-gap: 11px;
      @media screen and (max-width: 450px) {
        justify-content: center;
      }
  }
`;

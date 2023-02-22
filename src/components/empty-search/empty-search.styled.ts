import styled from 'styled-components';

export const EmptyFilteredBooksWrapper = styled.div`
display: flex;
justify-content: center;
transform: translateY(200px);
text-align: center;
width: 100%;
  @media screen and (max-width: 330px) {
   max-width: 250px;
   margin: 0 auto;
  }
`;

export const EmptyFilteredBooksMessage = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 40px;
color: #A7A7A7;
  @media screen and (max-width: 330px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
import styled from 'styled-components';

export const EmptyWrapper = styled.div`
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

export const EmptyMessage = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 40px;
color: #A7A7A7;
  @media screen and (max-width: 330px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
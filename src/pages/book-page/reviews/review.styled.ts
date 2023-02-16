import styled from 'styled-components';

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 0;
  gap: 16px;
  max-width: 730px;
  width: 100%;
    p{
      font-size: 16px;
      line-height: 24px;
        @media screen and (max-width: 330px) {
          font-size: 15px;
          line-height: 20px;
        }
      }
    @media screen and (max-width: 770px) {
      margin: 0 0 24px 0;
    }
`;

export const ReviewerInfo = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
    @media screen and (max-width: 770px) {
      gap: 24px;
    }
    img{
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
`;

export const ReviewerInfoBox = styled.div`
  display: flex;
  column-gap: 16px;
    li{
      font-size: 16px;
      line-height: 24px;
        @media screen and (max-width: 330px) {
          font-size: 15px;
          line-height: 20px;
        }
      }
    @media screen and (max-width: 380px) {
      display: flex;
      flex-direction: column;
    }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 31px);
  row-gap: 55px;
      padding: 31px 0px 0 0px;
    @media screen and (max-width: 330px) {
      gap: 32px;
          padding: 24px 0px 0 0px;
    }
`;

export const WrapperBox = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
    @media screen and (max-width: 1180px) {
      justify-content: center;
    }
`;

import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  max-width: 825px;
  width: 100%;
    @media screen and (max-width: 770px) {
      max-width: 640px;
      margin: 0 auto;
    }
    @media screen and (max-width: 440px) {
      gap: 19px;
    }
    @media screen and (max-width: 330px) {
      max-width: 288px;
      min-height: 483px;
    }
`;

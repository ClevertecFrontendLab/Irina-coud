import styled from 'styled-components';

export const FooterLine = styled.footer`
 ::before {
  content: " ";
  display: block;
  height: 1px;
  background-color: #BFC4C9;
  max-width: 1110px;
  width: 100%;
  position: relative;
  top: 6px;
  left: 50%;
  transform: translate(-50%);
    @media screen and (max-width: 770px) {
      max-width: 640px;
      width: 100%
    }
    @media screen and (max-width: 440px) {
      top: -10px;
    }
    @media screen and (max-width: 440px) {
     max-width: 288px;
    }
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1110px;
  display: flex;
  justify-content: space-between;
  height: 67px;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
    @media screen and (max-width: 770px) {
      max-width: 640px;
      width: 100%
    }
    @media screen and (max-width: 640px) {
      justify-content: center;
      row-gap: 15px;
    }
`;

export const FooterInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
    @media screen and (max-width: 440px) {
      text-align: center;
      max-width: 200px;
      font-size: 15px;
      line-height: 20px;
    }
`;

export const FooterSocialBox = styled.div`
  display: flex;
  max-width: 168px;
  width: 100%;
  justify-content: space-between;
`;

export const FooterSocialIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

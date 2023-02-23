import styled from 'styled-components';

import closeError from '../../assets/icon/close-error.png';
import warningError from '../../assets/icon/warning-circle.png';

export const ErrorWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 32px;
max-width: 1110px;
width: 100%;
height: 80px;
background: #FEEBEA;
border: 1.5px solid #F42C4F;
border-radius: 5px;
position: absolute;
top: 68px;
left: 50%;
transform: translateX(-50%);
z-index: 120;
  @media screen and (max-width: 770px) {
max-width: 640px;
padding: 0 16px;
  }
  @media screen and (max-width: 330px) {
max-width: 280px;
    top: 56px
  }
`;

export const ErrorMessage = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
:before{
  content: '';
  display: block;
  width: 32px;
height:32px;
  background: url(${warningError}) center center / 32px no-repeat;
  margin: 0 24px 0 0;
    @media screen and (max-width: 330px) {
        width: 50px;
background-size: 24px;
  margin: 0 12px 0 0;
    transform: translateY(-50%);
  }
}
  @media screen and (max-width: 770px) {
    font-size: 14px;
    line-height: 18px;
  }
    @media screen and (max-width: 330px) {
width: 222px;
  }
`;

export const ErrorIconClose = styled.button`
width: 24px;
height:24px;
background: url(${closeError}) center center / 24px no-repeat;
cursor: pointer;
    @media screen and (max-width: 330px) {
    transform: translateY(-50%);
  }
`;
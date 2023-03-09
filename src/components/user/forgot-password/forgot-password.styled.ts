import styled from 'styled-components';

import goBack from '../../../assets/icon/go-back.svg';
import { TextHelper } from '../registration/registration.styled';

export const GoBackBox = styled.div`
background: #F9F9FA;
height: 64px;
border-radius: 16px 16px 0 0;
`;

export const GoBackTitle = styled.button`
font-weight: 600;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.2px;
text-transform: uppercase;
color: #727272;
background-color: transparent;
cursor: pointer;
    padding: 23px 52px 23px 21px;
    display: flex;
    align-items: center;
    column-gap: 15px;
::before{
  content: '';
  display: block;
background: url(${goBack}) 0px 0px / 20px no-repeat;
width: 20px;
height: 20px;
}
`

export const TextHelperError = styled(TextHelper)`

 span{
    color: red;
    }

 
`;
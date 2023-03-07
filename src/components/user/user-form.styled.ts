import styled from 'styled-components';

import arrow from '../../assets/icon/register-arrow.svg';
import openEye from '../../assets/icon/open-eye.svg';
import closeEye from '../../assets/icon/close-eye.svg';

export const Wrapper = styled.div`
background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
row-gap: 59px;
width: 100wh;
height: 100vh;
`;

export const Title = styled.p`
font-weight: 700;
font-size: 32px;
line-height: 40px;
color: #FFFFFF;
`;

export const FormBox = styled.div`
max-width: 528px;
width: 100%;
`;

export const Form = styled.form`
min-height: 266px;
background: #FFFFFF;
border-radius: 16px;
padding: 48px 56px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

export const FormTitle = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 30px;
margin: 0 0 16px 0;
`;

export const FormWrapper = styled.div`
min-height: 76px;
position: relative;
::after{
  content: "";
  display: block;
  height: 1px;
  background: #BFC4C9;
 max-width: 416px;
 width: 100%;
 position: relative;
 top: 0;
 left: 0;
}
&.error{
  ::after{
    background: red;
  }
}
`;

export const Input = styled.input`
background: #F9F9FA;
border-radius: 4px;
padding: 19px 12px;
max-width: 416px;
width: 100%;
position: relative;
:focus + label,
:not(:placeholder-shown) ~ label{
top: 0; 
color:#BFC4C9;
}

`;

export const InputIcon = styled.input`
position: absolute;
width: 25px;
height: 20px;
top: 19px;
left: 90%;
cursor: pointer;
&.visible{
background: url(${openEye});
}
&.hidden{
background: url(${closeEye});
}
`;

export const InputLabel = styled.label`
position: absolute;
top: 19px;
left: 12px;
cursor: text;
`;

export const FormButton = styled.button`
max-width: 416px;
min-height: 52px;
cursor: pointer;
background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
border-radius: 30px;
font-weight: 600;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.2px;
text-transform: uppercase;
color: #FFFFFF;
margin: 16px 0 0 0;
text-align: center;
&.step1{
  margin: 24px 0 0 0;
}
`;

export const BoxInfo = styled.div`
display: flex;
align-items: center;
column-gap: 16px;

`;

export const TextHelp = styled.p`
font-size: 16px;
line-height: 24px;
color: #727272;
`;

export const Button = styled.button`
display: flex;
cursor: pointer;
max-width: 161px;
width: 100%;
font-weight: 600;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.2px;
text-transform: uppercase;
color: #363636;
background: url(${arrow}) 115px center / 20px no-repeat;
&.authorization{
  max-width: 84px;
background: url(${arrow}) 60px center / 20px no-repeat;
}
`;
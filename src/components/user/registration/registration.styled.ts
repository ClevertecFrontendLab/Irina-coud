import styled from 'styled-components';

import InputMask from 'react-input-mask';

export const StepsInfo = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 18px;
margin: -24px 0 0 0;
`;

export const TextHelper = styled.p`
/* display: block; */
font-weight: 500;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.2px;
color: #A7A7A7;
padding: 0 0 0 12px;
margin: -32px 0 0 0;
&.active{

  span{
color: red;
}
}
&.forgot{
margin: -18px 0 0 0;
}

`;

export const ErrorHighlight = styled.span`
&.active{
  color: red;
}
`;

export const InputPhone = styled(InputMask)`
    background: #F9F9FA;
    padding: 19px 12px;
    width: 100%;
    :focus + label,
:not(:placeholder-shown) ~ label{
top: 0; 
color:#BFC4C9;
}
`;
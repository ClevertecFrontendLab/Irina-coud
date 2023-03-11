import styled from 'styled-components';

export const UpdateButton = styled.button`
font-weight: 500;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.2px;
color: #A7A7A7;
margin: -16px 0 0px 0;
padding: 0 12px;
background-color: transparent;
display: flex;
justify-content: flex-start;
cursor: pointer;
`;

export const ErrorBox = styled.div`

`;

export const TextError = styled(UpdateButton)`
display: flex;
flex-direction: column;
color: #363636;
/* >span{
color: #F42C4F;
} */
`
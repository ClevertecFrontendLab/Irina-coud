import styled from 'styled-components';
import { BookBtn } from '../../book-page-info/book-page-info.styled';

export const Popup = styled.div`
max-width: 600px;
width: 100%;
background: #FFFFFF;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    align-items: center;
    justify-content: center;
`;

export const PopupTitle = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 30px;
text-align: center;
`;

export const PopupText = styled.p`
max-width: 416px;
width: 100%;
font-size: 16px;
line-height: 24px;
text-align: center;
`;

export const PopupButton = styled(BookBtn)`
max-width: 410px;
`
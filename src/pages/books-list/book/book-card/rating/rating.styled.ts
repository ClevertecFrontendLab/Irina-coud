import styled from 'styled-components';

export const RatingWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const RatingItem = styled.span`
	padding: 0;
	font-size: 32px;
	line-height: 1;
color: #A7A7A7;
	text-shadow: 1px 1px #bbb;
  cursor: pointer;
    @media screen and (max-width: 330px) {
       font-size: 15px;
    }
`;

export const RatingIsEmpty = styled.div`
color: #A7A7A7;
     @media screen and (max-width: 770px) {
       margin: 5px 0 0 0;
      }
`;

export const RatingIcon = styled.svg`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
    path:hover{
      fill: #FFBC1F;
    }
`;

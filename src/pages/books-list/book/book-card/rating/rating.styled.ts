import styled from 'styled-components';

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 5px;
`;

export const RatingItem = styled.span`
	padding: 0;
	font-size: 32px;
	line-height: 1;
	color: lightgrey;
	text-shadow: 1px 1px #bbb;
  cursor: pointer;
    :hover~label svg path{
      fill: #FFBC1F;
    }
    @media screen and (max-width: 330px) {
       font-size: 15px;
    }
`;

export const RatingIcon = styled.svg`
  width: 24px;
  height: 24px;
    path:hover{
      fill: #FFBC1F;
    }
`;

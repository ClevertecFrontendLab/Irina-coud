import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BreadCrumbsContainer = styled.div`
  background-color: #F9F9FA;
  display: flex;
  height: 64px;
  align-items: center;
  gap: 15px;
  padding: 0 0 0 164px;
  margin: -20px 0 0 0;
    p{
      color: #A7A7A7;
      cursor: pointer;
    }    
    @media screen and (max-width: 770px) {
      padding: 0 0 0 64px;
      height: 88px;
      margin: 17px 0 0 0;
    }
    @media screen and (max-width: 325px) {
      padding: 0 0 0 16px;
      height: 92px;
      margin: -3px 0 0 0;
    }
`;

export const BreadCrumbsItem = styled(Link)`
  color: #A7A7A7;
  cursor: pointer;
    @media screen and (max-width: 325px) {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    }
`;

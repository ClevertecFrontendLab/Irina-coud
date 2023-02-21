import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavigateContainer = styled.nav`
  @media screen and (max-width: 1180px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const NavigateList = styled.ul`
  >li:first-child{
    margin: 0 0 20px 0;
  }
  >li:last-child{
    margin: 44px 0 0px 0;
  }
  :hover>li:first-child::after{
    background: #FF5253;
  }
`;

export const NavigateItem = styled.li`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;
  position: relative;
`;

export const AccordionButton = styled.span`
  ::after,
  ::before{
    content: '';
    display: block;
    width: 10px;
    height: 2px;
    position: absolute;
    background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
  }
  ::after{
    top: 14px;
    left: 228px;
    transform: rotate(-45deg);
  }
  ::before{
    top: 14px;
    left: 222px;
    transform: rotate(45deg);
  }
  &.open{
    :after{
      transform: rotate(45deg);
    }
    ::before{
      transform: rotate(-45deg);
    }
  }
  &.hidden{     
    display : none;
  }
`;

export const NavigateLink = styled(NavLink)`
  color: inherit;
    :hover{
      color: #FF5253;
    }
    &.active{
      background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
`;

export const NavigateLinkItem = styled(NavigateLink)`
  &.active{
      ::after{
        content: " ";
        display: block;
        height: 2px;
        max-width: 255px;
        width: 100%;
        background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
        position: relative;
        top: 8px;
        left: 0; 
      }
    }
`;

export const NavigateCategories = styled.ul`
  overflow: hidden;
  height: 0;
    &.active{
      margin: 0px 0 40px 23px;
      display: flex;
      flex-direction: column;
     height: 100%;
     row-gap: 16px;
    }
`;

export const NavigateCategory = styled.li`
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
    :hover{
      color: #FF5253;
    }
`;

export const NavigateBooksCount = styled.span`
  line-height: 24px;
  color: #A7A7A7;
  margin: 0 0 0 5px;
`;

export const NavigateProfile = styled.ul`
  display: none
;
`;

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

interface IMenuItem {
  background: string
}

export const NavigateContainer = styled.nav`
  position: absolute;
  left: -100%;  
    @media screen and (max-width: 1180px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 870px) {
      left: -100%;  
      width: 100%;   
      min-height: 442px;
      border-radius: 10px;   
      z-index: 100;
      padding: 32px 32px 52px 32px;  
      transition: left 0.3s ease 0s; 
      overflow: auto; 
      background: #F9F9FA;
      box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
      top: 90px;
      max-width: 502px;
        &.active{
          left: 64px;
        }
     }
    @media screen and (max-width: 325px) {
      padding: 32px 16px 52px 16px;  
      top: 76px;
      max-width: 288px;
        &.active{
          left: 16px;
        }
     }
`;

export const NavigateList = styled.ul<IMenuItem>`
  width: 100%;
  >li:first-child{
    margin: 0 0 40px 0;
  }
  >li:last-child{
    margin: 44px 0 0px 0;
  }
  :hover>li:first-child::after{
    background: #FF5253;
  }
  @media screen and (max-width: 770px) {
    ::after{
      content: "";
      display: block;
      height: 2px;
      max-width:502px;
      width: 100%;
      background-color: #BFC4C9;
      position: absolute;
      left: 0;
      top: 248px;
    }
  }
  &.open{
    @media screen and (max-width: 770px) {
      ::after{
        content: "";
        display: block;
        height: 2px;
        max-width:502px;
        width: 100%;
        background-color: #BFC4C9;
        position: absolute;
        left: 0;
        top: 711px;
      }
    }
    @media screen and (max-width: 330px) {
      ::after{
        top: 737px;
      }    
    }
}
  &.active{
    >li::after{
      content: " ";
      display: block;
      height: 2px;
      max-width: 255px;
      width: 100%;
      background: ${({ background }) => background};
      position: relative;
      top: 8px;
      left: 0;
    }
    >li:first-child{
      margin: 0 0 19px 0;
    }
  }
  @media screen and (max-width: 770px) {
     max-width: 260px;
  }
  @media screen and (max-width: 330px) {
     max-width: 250px;
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
    ::after{
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

export const NavigateBookLink = styled(NavigateLinkItem) <IMenuItem>`
  background: ${({ background }) => background};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
        @media screen and (max-width: 770px) {
          max-width: 279px;
          width: 100%;
        }
        @media screen and (max-width: 330px) {
          margin: 0px 0 38px 23px;
          max-width: 266px;
        }
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
  display: none;
    @media screen and (max-width: 870px) {
      display: flex;
      flex-direction: column;
      margin: 84px 0 0 0;
      row-gap: 40px;
    }
`;

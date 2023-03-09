import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
 
  height: 105px;
      @media screen and (max-width: 330px) {
    height: 76px;
    }
  &.open{
    box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
       @media screen and (max-width: 870px) {
        box-shadow: none;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1110px;
  width: 100%; 
  position: relative;
`;

export const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
  flex-wrap: wrap;
    @media screen and (max-width: 1180px) {
      gap: 30px;
      padding: 0 0 0 30px;
    }
    @media screen and (max-width: 770px) {
      padding: 0 0 0 64px;
    }
    @media screen and (max-width: 440px) {
      padding: 0 0 0 16px;
    }
`;

export const HeaderLogoLink = styled(Link)`
  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h1`
 font-weight: 700;
  font-size: 32px;
  line-height: 40px;
    @media screen and (max-width: 440px) {
      font-size: 18px;
      line-height: 28px;
    }
`;

export const HeaderUserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
    @media screen and (max-width: 870px) {
      display: none;
    }
`;

export const HeaderWelcome = styled.p`
  font-weight: 600;
`;

export const HeaderBurger = styled.div`
  display: none;
    @media screen and (max-width: 870px) {
      display: block;
      z-index: 5;
      position: relative;
      width: 27px;
      height: 18px;
      cursor: pointer;
      right: 0;

      ::before,
      ::after,
      span {
       right: 0;
       position: absolute;
       height: 10%;
       width: 100%;
       transition: all 0.3s ease 0s;
       background-color: #363636;
       }

      ::before,
      ::after {
        content: "";
       }

      ::before {
        top: 0;
      }

      ::after {
        bottom: 0;
      }

       span {
         top: 50%;
         transform: scale(1) translate(0px, -50%);
       }

       &.active {
          span{
            display: none;
          }
          ::after {
          transform: rotate(45deg);
          width: 20px;
          background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
          top: 10px;
          height: 2px;
      }
             ::before {
          transform: rotate(-45deg);
            width: 20px;
            background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
                top: 10px;
                  height: 2px;
      }
       }
     }
    @media screen and (max-width: 330px) {
      width: 23px;
      height: 16px;
       &.active {
          span{
            display: none;
          }
          ::after {
          transform: rotate(45deg);
          width:14px;
          background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
          top: 7px;
          height: 2px;
      }
             ::before {
          transform: rotate(-45deg);
            width: 14px;
            background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
                top: 7px;
                  height: 2px;
      }
       }
    }
`;

export const UserLogo = styled.img`
cursor: pointer;
`

export const UserBox = styled.div`

  display: none;
&.open{
  display: block;
background: #FFFFFF;
box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
border-radius: 0px 0px 10px 10px;
width: 270px;
height: 152px;
  position: absolute;
  z-index: 999999999;
  right: 0;
  top: 105px;   
   @media screen and (max-width: 870px) {
      display: none;
    }
}
`;

export const UserBoxList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    max-height: 270px;
    height: 100%;
    row-gap: 32px;
    padding: 0 24px;
`;

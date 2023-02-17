import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1110px;
  width: 100%;
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
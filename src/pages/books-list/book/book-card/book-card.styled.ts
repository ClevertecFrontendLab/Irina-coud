import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const BookCardWrapper = styled.div`
display: none;
`;

export const BooksCard = styled(Link)`
  display: grid;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 10px;
  &.tail{
    max-width: 190px;
    height: 470px;
    padding: 0 8px 16px 8px;
      @media screen and (max-width: 770px) {
        grid-template-rows: 5fr 1fr 1fr 1fr;
        padding: 0 8px 21px 8px;
      }
      @media screen and (max-width: 440px) {
        max-width: 288px;
        width: 100%;
        height: 470px;
      }
      @media screen and (max-width: 325px) {
        grid-template-rows: 5.5fr 1fr 1fr 1fr;
        padding: 0 8px 16px 8px;
      }
   }
   &.list{
     max-width: 825px;
     height: 218px;
     grid-template-areas: 
     ". image title title"
     ". image author ."
     ". image rating button";
     grid-template-columns: 3% 16% 57%;
     grid-template-rows: 39% 35% 0% 0%;
     padding: 24px 5px 24px 0;
      @media screen and (max-width: 770px) {
        max-width: 640px;
        height: 240px;
        grid-template-areas: 
        ". image title title"
        ". image author ."
        ". image rating button";
        grid-template-columns: 3% 21% 45%;
        padding: 16px 0;
        grid-template-rows: 60% 19% 0% 0%;
      }
      @media screen and (max-width: 330px) {
        max-width: 288px;
        height: 182px;
        grid-template-areas: 
        ". image title"
        ". image author"
        ". image rating"
        ". image button";
        grid-template-columns: 3% 27% 70%;
        grid-template-rows: 26% 26% 21% 10%;
      }
   }
`;

export const BookImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  padding: 8px 0 0 0;
  &.list{
    display: block;
    grid-area: image;
    padding: 0;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  border: 1px solid #A7A7A7;
  border-radius: 10px;
  &.tail{
    max-width: 174px;
    height: 242px;    
      @media screen and (max-width: 770px) {
        max-width: 174px;
      }
  }
  &.list{
    max-width: 120px;
    width: 100%;
    height: 170px;
      @media screen and (max-width: 770px) {
        height: 172px;
      }
      @media screen and (max-width: 330px) {
        max-width: 70px;
        height: 100px;
      }
  }
`;

export const RatingBox = styled.div`
  &.tail{
    padding: 0 0 0 8px;
      @media screen and (max-width: 770px) {
       margin: 5px 0 0 0;
      }
  }
  &.list{
    grid-area: rating;
  }
`;

export const BookTitle = styled.p`
  color: #363636;
  &.tail{
    padding: 0 0 0 8px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
        max-height: 54px;
      @media screen and (max-width: 770px) {
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
      }
      @media screen and (max-width: 330px) {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        min-height: 54px;
      }
   }
  &.list{
    grid-area: title;
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
        overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
      @media screen and (max-width: 770px) {
        font-size: 24px;
        line-height: 30px;
      }
      @media screen and (max-width: 330px) {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
      }
    }
`;

export const BookAuthor = styled.p`
  color: #727272;
  &.tail{
    padding: 0 0 0 8px;
      overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
        margin: 10px 0 0 0;
      @media screen and (max-width: 770px) {
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
      }
      @media screen and (max-width: 330px) {
        font-weight: 400;
        text-transform: none;
      }
   }
  &.list{
    grid-area: author;
    font-size: 16px;
    line-height: 24px;
        overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
      @media screen and (max-width: 330px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
`;

export const BookBtnContainer = styled.div`
  display: flex;
  &.tail{
    justify-content: flex-end;
         align-items: end;
      @media screen and (max-width: 770px) {
        justify-content: center;
      }
    }
  &.list{
    grid-area: button;
    }
`;

export const BookBtn = styled.button`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
  border-radius: 20px;
  max-width: 166px;
  width: 100%;
  height: 40px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.tail{
    @media screen and (max-width: 330px) {
      max-width: 256px;
    }
  }
  &.list{
    max-width: 174px;
    width: 100%;
      @media screen and (max-width: 330px) {
        max-width: 186px;
      }
    }
`;

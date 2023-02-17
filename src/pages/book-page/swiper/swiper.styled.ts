import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

export const StyledSwiperWrapper = styled.div`
  max-width: 445px;
  width: 100%;
  display: flex;
  justify-content: center;
    @media screen and (max-width: 325px) {
      max-width: 288px;
      width: 100%;
    }
`;

export const StyledMainSwiper = styled(Swiper)`
  margin: 0 0 15px 0;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  &.swiper-slide-active img{
    border: 1px solid red;
    border-radius: 10px;
  }
  @media screen and (max-width: 780px) {
    display: flex;
  }
`;

export const StyledScrollSwiperWrapper = styled.div`
  max-width: 445px;
  width: 100%;
    @media screen and (max-width: 780px) {
      overflow: hidden;
      height: 0;
      width: 0;
    }
`;

export const ImageSlider = styled.img`
  max-width: 445px;
  max-height: 594px;
  width: 100%;
  border-radius: 10px;
    @media screen and (max-width: 1180px) {
      max-width: 250px;
    }
    @media screen and (max-width: 770px) {
      max-width: 136px;
     height:198px;
    }
    @media screen and (max-width: 650px) {
      max-width: 188px;
    }
    @media screen and (max-width: 325px) {
      margin: 0 auto;
      height: 260px;
    }
`;

export const SliderPagination = styled.div`
  height: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
    @media screen and (min-width: 780px) {
      display: none;
    }
  span.swiper-pagination-bullet-active{
    background-color: #363636;
  }
`;

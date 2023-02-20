import React, { useState } from 'react';

import { Navigation, FreeMode, Thumbs, Scrollbar, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import { LINK_HOST } from '../../constants';

import emptyCat from '../../assets/image/empty.jpg';

import {
  ImageSlider,
  StyledMainSwiper,
  StyledScrollSwiperWrapper,
  StyledSwiperSlide,
  StyledSwiperWrapper,
  SliderPagination,
} from './swiper.styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export interface ISliderImage {
  images: [{ url: string }]
}

export const Slider = (props: ISliderImage) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const url = props.images;

  return (
    <React.Fragment>
      <StyledSwiperWrapper>
        <StyledMainSwiper
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          scrollbar={false}
          spaceBetween={50}
          navigation={true}
          grabCursor={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          breakpoints={{
            320: {
              pagination: {
                el: '.slider-pagination',
                type: 'bullets',
              },
            },
          }}
          data-test-id='slide-big'>
          {url.map((item) => (
            <StyledSwiperSlide data-test-id='slide-mini'><ImageSlider src={item.url ? `${LINK_HOST}${item.url}` : `${emptyCat}`} alt='sliderImage' /></StyledSwiperSlide>
          ))}
        </StyledMainSwiper>
      </StyledSwiperWrapper>
      {url.length > 1 ? (
        <StyledScrollSwiperWrapper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={30}
            slidesPerView={5}
            width={445}
            freeMode={true}
            centerInsufficientSlides={true}
            watchSlidesProgress={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            modules={[FreeMode, Navigation, Thumbs, Scrollbar, Pagination]}
            data-test-id='slide-mini'
          >
            {url.map((item) => (
              <StyledSwiperSlide data-test-id='slide-mini'><img src={item.url ? `${LINK_HOST}${item.url}` : ''} alt='sliderImage' height='86' /></StyledSwiperSlide>
            ))}
          </Swiper>
        </StyledScrollSwiperWrapper>
      ) : ('')}
      <SliderPagination className='slider-pagination' />
    </React.Fragment>
  )
};

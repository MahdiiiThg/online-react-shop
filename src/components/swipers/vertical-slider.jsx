import React from 'react'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


// default image
import noimage from '../../assets/images/noimage.png'

// Swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

export default function VerticalSlider(props) {
  return (
    <React.Fragment>
      <Swiper
        style={{height: "55vh"}}
        spaceBetween={5}
        effect="fade"
        slidesPerView={1}
        direction='vertical'
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
              slidesPerView: 1,
              spaceBetween: 1
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 5
          },
        }}
      >
        <SwiperSlide>
          {props.children}
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  )
}

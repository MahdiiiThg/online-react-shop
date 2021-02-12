import React from 'react'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// components
import Product from '../products/Product'

// default image
import noimage from '../../assets/images/noimage.png'

// Swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

export default function ProductSlider(props) {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={5}
        slidesPerView={1.5}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
              slidesPerView: 2.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3.5,
          },
        }}
      >
        {
          props.data.data
          &&
            props.data.data.slice(1, 10).map((data, index) => {
              console.log(data)
              return (
                <SwiperSlide key={index}>
                  <Product data={data}/>
                </SwiperSlide>
              )
            })
        }
      </Swiper>
    </React.Fragment>
  )
}

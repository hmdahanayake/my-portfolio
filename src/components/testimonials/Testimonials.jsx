import React from 'react';
import './Testimonials.css';
import { Data } from './Data.jsx';

// Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Correct import for Swiper modules (Swiper v8+)
import { Pagination } from 'swiper/modules';

function Testimonials() {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">My Client Says</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper
        className="testimonial__container"
        modules={[Pagination]}
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}

        breakpoints={{
          576:{
            slidesPerView:2,
          },
          768:{
            slidesPerView:2,
            spaceBetween:48,
          },
        }}
        
      >
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;

import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVTR1,
    name: 'Harsha PVJ',
    review: 'Thank you for being an active part of our team. Your efforts are being noticed and we are sure that you will be the wind of change. Keep pushing the limits.'
  },
  {
    avatar: AVTR2,
    name: 'Shashwat Raizada',
    review: 'Soundarya is a hard-working engineer. She joined our team as a fresher but with her continuous hard work was able to perform at par with other experienced team members.'
  },
  {
    avatar: AVTR3,
    name: 'Shrinidhi Rao Aroor',
    review: 'Your growth has been commendable, and it has been an extreme joy to work with you on multiple challenging tasks. Your problem solving skills and go-getter attitude has a positive impact on the team which yields great results. Thank you for being a team player and for always focusing on the greater good.'
  },
  {
    avatar: AVTR4,
    name: 'Ramakumar R',
    review: 'Your efforts have brought us good results. Thank you!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]} // Add Navigation module
        pagination={{ clickable: true }} // Enable clickable dots
        navigation // Add navigation arrows
        spaceBetween={40} // Adjust spacing between slides
        slidesPerView={1} // Only one slide visible at a time
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
{/*             <div className="client__avatar">
              <img src={avatar} alt={`${name}'s avatar`} />
            </div> */}
            <h3 className='client__name'>{name}</h3>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials

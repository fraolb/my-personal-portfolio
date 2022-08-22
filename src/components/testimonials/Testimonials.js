import React from "react";
import "./Testimonials.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Twitter from "../../assets/Twitter.jpg";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review of clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <Swiper
          modules={[ Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
        
          pagination={{ clickable: true }}
          
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={Twitter} alt="" />
              </div>
              <h5 client__name>Abebe Beso</h5>
              <small className="client__review">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={Twitter} alt="" />
              </div>
              <h5 client__name>kebe Beso</h5>
              <small className="client__review">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={Twitter} alt="" />
              </div>
              <h5 client__name>dgfhhjk Beso</h5>
              <small className="client__review">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={Twitter} alt="" />
              </div>
              <h5 client__name>2 Beso</h5>
              <small className="client__review">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={Twitter} alt="" />
              </div>
              <h5 client__name>1 Beso</h5>
              <small className="client__review">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </small>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

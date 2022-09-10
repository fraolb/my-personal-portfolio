import React, { useState, useEffect} from "react";
import "./Testimonials.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export default function Testimonials() {

  const [comp, setComp] = useState([]);
  const compColl = collection(db, "testimonials");

  useEffect(() => {
    const getFile = async () => {
      const data = await getDocs(compColl);
      setComp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFile();
  }, []);

  SwiperCore.use([Autoplay])
  return (
    <section id="testimonials">
      <h5>Review of clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <Swiper
          
          autoplay={
          {  delay: 2000,
            disableOnInteraction: false}
            }
          modules={[ Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          speed={4000}
          pagination={{ clickable: true }}
          
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {comp.map((arr) => {
              return (
          <SwiperSlide key={arr.id}>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={arr.img} alt="" />
              </div>
              <h5 client__name>{arr.name}</h5>
              <small className="client__review">
                {arr.txt}<a href={arr.link}>Link</a>
              </small>
            </article>
          </SwiperSlide>
        );
      })}
        </Swiper>
      </div>
    </section>
  );
}

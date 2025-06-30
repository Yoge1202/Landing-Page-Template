import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperConfig = {
  loop: true,
  speed: 600,
  autoplay: { delay: 5000 },
  slidesPerView: "auto",
  pagination: { clickable: true },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 40 },
    480: { slidesPerView: 3, spaceBetween: 60 },
    640: { slidesPerView: 4, spaceBetween: 80 },
    992: { slidesPerView: 6, spaceBetween: 120 },
  },
  modules: [Autoplay, Pagination],
};

export default function ClientsSwiper() {
  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper {...swiperConfig} className="init-swiper align-items-center">
          <SwiperSlide>
            <img src="/assets/img/clients/client-1.png" className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/clients/client-2.png" className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/clients/client-3.png" className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/clients/client-4.png" className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/clients/client-5.png" className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/clients/client-6.png" className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/clients/client-7.png" className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/clients/client-8.png" className="img-fluid" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
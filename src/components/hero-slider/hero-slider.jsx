import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { SLIDES } from "../../data/slides";
import React from "react";

import "./hero-slider.scss";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      speed={2000}
      preloadImages={false}
      lazy={true}
    >
      {SLIDES.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <Link to={slide.path}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchpriority={index === 0 ? "high" : "low"}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default React.memo(HeroSlider);

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import {SLIDES} from "../../data/slides"

import "./hero-slider.scss";

const HeroSlider = () => {


  return (
    <Swiper
      modules={[ Pagination,Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
      slidesPerView={1}
    >
      {SLIDES.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link to={slide.path}>
            <img src={slide.image} alt={`Slide ${slide.id}`} style={{ width: "100%", display: "block" }} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;

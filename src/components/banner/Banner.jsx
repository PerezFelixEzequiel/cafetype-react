import "./Banner.css";


import latinCombo from "../../assets/hero_banner/latin-combo.png";
import bannerGeneral from "../../assets/hero_banner/banner-general-2.png";
import cafeColombia from "../../assets/hero_banner/cafe-colombia.png";
import cafeFrancia from "../../assets/hero_banner/cafe-francia.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="container-inf">
      <section className="banner">
        <Swiper 
           modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            navigation={{
              nextEl: ".banner-next",
              prevEl: ".banner-prev",
            }}
            pagination={{
              el: ".banner-pagination",
              clickable: true,
              type: "bullets",
            }}
              autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}

            className="bannerSwiper"
        >
          <SwiperSlide>
            <Link to="/tienda" className="banner-link">
              <img
                src={latinCombo}
                alt="Banner principal"
                className="img-banner"
              />            
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/tienda" className="banner-link">
              <img
                src={bannerGeneral}
                alt="Banner general CAFETYPE"
                className="img-banner"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/tienda" className="banner-link">
              <img
                src={cafeColombia}
                alt="Café Colombia"
                className="img-banner"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/tienda" className="banner-link">
              <img
                src={cafeFrancia}
                alt="Café Francia"
                className="img-banner"
              />
            </Link>
          </SwiperSlide>

          <div className="banner-controls">
            <button className="banner-prev" type="button">
              ‹
            </button>

            <div className="banner-pagination"></div>

            <button className="banner-next" type="button">
              ›
            </button>
          </div>
        </Swiper>
      </section>
    </div>
  );
}

export default Banner;
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/modules";
import { Pagination } from "swiper/modules";
import "./styles.css";

// imgs
import corte1 from "/img/corte/corte1.webp";
import corte2 from "/img/corte/corte2.jpg";
import corte3 from "/img/corte/corte3.jpeg";
import corte4 from "/img/corte/corte4.jpg";

export function PhotoSlide() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div className="w-full h-96 md:h-29.75">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="bg-cover bg-center"
              src={corte1}
              alt="corte de cabelo 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={corte2} alt="corte de cabelo 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={corte3} alt="corte de cabelo 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={corte4} alt="corte de cabelo 4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

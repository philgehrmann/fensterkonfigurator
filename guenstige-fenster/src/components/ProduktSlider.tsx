"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import content from "../content/mainslider.json";
import "swiper/css";
import "swiper/css/bundle";
export default function MainSlider() {
  return (
    <div className="max-w-[80%] mx-auto text-center  h-[600px] my-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="https://picsum.photos/seed/picsum/2000/600" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/seed/picsum/2000/600" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

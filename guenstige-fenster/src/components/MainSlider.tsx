"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import content from "../content/mainslider.json";
import { Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
export default function MainSlider({ page = "home" }) {
  return (
    <div className="w-full lg:max-w-[80%] mx-auto text-center h-[400px] mb-12 lg:mb-0">
      <Swiper
        modules={[Navigation, Virtual]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[400px]"
        virtual
      >
        {content.mainslider.map((item, index) => {
          return (
            item.page === page && (
              <>
                {item.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index} className="relative h-[400px]">
                      <h2>{slide.headline}</h2>
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="absolute w-full left-0 right-0 top-0 bottom-0 h-[600px]"
                      />
                    </SwiperSlide>
                  );
                })}
              </>
            )
          );
        })}
      </Swiper>
    </div>
  );
}

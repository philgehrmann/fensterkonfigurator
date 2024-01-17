"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Virtual } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";
export default function DetailImageSlider({ article }: { article: any }) {
  return (
    <div className="mx-auto text-center my-4">
      <div className="lg:max-w-[80%] ">
        <Swiper
          modules={[Pagination, Virtual]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className=""
          virtual
        >
          {article[0].details[0].image.map((slide: any, index: any) => {
            return (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={800}
                  height={800}
                  className="max-w-[60%] mx-auto lg:max-w-[80%] h-auto"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

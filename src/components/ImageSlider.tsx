"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/bundle";
export default function ImageSlider() {
  return (
    <div className="mx-auto text-center my-4">
      <div className="ml-6 mt-12">
        <Swiper
          modules={[Pagination, Autoplay, FreeMode]}
          spaceBetween={5}
          freeMode={true}
          grabCursor={true}
          slidesPerView={1.25}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="lg:h-[600px]"
          breakpoints={{
            768: {
              slidesPerView: 1.25,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide key={1} className="group relative overflow-hidden">
            <Image
              src={"/images/fenster/bg-fenster-slider-before.jpg"}
              alt={"Fenster - Neubauwohnung Energieeffizient"}
              width={1300}
              height={1000}
              className="hover:scale-125 -z-[1] transition-all duration-1000 ease-in-out"
            />
            <h2 className="absolute uppercase text-[16px] text-white lg:text-[24px] mb-0 font-light left-[5%] bottom-[5%] z-[1]">
              <p className="text-left mb-0">01</p>
              Aluminiumfenster
            </h2>
          </SwiperSlide>
          <SwiperSlide key={2} className="relative">
            <Image
              src={"/images/fenster/bg-fenster-slider-before.jpg"}
              alt={"Fenster - Neubauwohnung Energieeffizient"}
              width={1000}
              height={1000}
              className=""
            />
            <h2 className="absolute uppercase text-[16px] text-white lg:text-[24px] mb-0 font-light left-[5%] bottom-[5%] z-[1]">
              <p className="text-left mb-0">02</p>
              Kunsstofffenster
            </h2>
          </SwiperSlide>
          <SwiperSlide key={2} className="relative">
            <Image
              src={"/images/fenster/bg-fenster-slider-before.jpg"}
              alt={"Fenster - Neubauwohnung Energieeffizient"}
              width={1000}
              height={1000}
              className=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

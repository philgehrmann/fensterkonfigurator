"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import content from "../content/mainslider.json";
import { Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export default function MainSlider({ page }: { page: any }) {
  return (
    <div className="w-full mx-auto text-center h-[75vh] lg:h-[100vh]  relative top-0 ">
      <Swiper
        navigation={true}
        modules={[Navigation, Virtual]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[75vh] lg:h-[100vh] fenster-slider relative overflow-hidden"
        virtual
      >
        {content.mainslider.map((item, index) => {
          return (
            item.page === page && (
              <>
                {item.slides.map((slide, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="relative h-[75vh] lg:h-[100vh]"
                    >
                      <p>{slide.description}</p>
                      <Image
                        src={slide.image}
                        alt={slide.name}
                        width={1600}
                        height={400}
                        className="absolute w-full left-0 right-0 top-0 bottom-0 h-[800px] z-[2]"
                      />
                      <div className="text-white z-[300] absolute">
                        <h2 className=" text-white top-[20%]">
                          {slide.headline}
                        </h2>
                      </div>
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

"use client";
import { Cabin } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import content from "../content/mainslider.json";
import { Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const cabin = Cabin({
  weight: ["400", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MainSlider({ page }: { page: any }) {
  return (
    <div className="w-full mx-auto text-center h-[75vh] lg:h-[100vh] mb-12 mainslider relative top-0 ">
      <Swiper
        pagination={true}
        modules={[Pagination, Virtual, Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[75vh] lg:h-[100vh] fenster-slider relative overflow-hidden"
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: false,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: false,
          },
        }}
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
                      className="relative h-[75vh] lg:h-[100vh] p-24"
                    >
                      <p className="relative z-[300]">{slide.description}</p>
                      <div className="img-wrapper">
                        <Image
                          src={slide.image}
                          alt={slide.name}
                          width={1600}
                          height={400}
                          className="absolute w-full left-0 right-0 top-0 bottom-0 z-[2]"
                        />
                      </div>
                      <div className="text-white z-[800] absolute mx-auto grid items-center w-[100%] h-[75vh] lg:h-[100%] justify-items-center align-items-center">
                        <div>
                          <p className="uppercase">
                            {" "}
                            Willkommen bei der Sg Bau GmbH
                          </p>
                          <h2
                            className={
                              "text-white uppercase text-[6em] " +
                              cabin.className
                            }
                          >
                            Fenster
                          </h2>
                          <h2
                            className={
                              "text-white uppercase text-[6em] " +
                              cabin.className
                            }
                          >
                            {" "}
                            Türen
                          </h2>
                          <h2
                            className={
                              "text-white uppercase text-[6em] " +
                              cabin.className
                            }
                          ></h2>
                        </div>
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

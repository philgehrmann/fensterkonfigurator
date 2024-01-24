"use client";
import { Cabin } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import content from "../content/mainslider.json";
import { Virtual } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
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
    <div className="w-full mx-auto  text-center  pb-24 mb-12 mainslider relative top-[175px] bg-white border-black">
      <Swiper
        pagination={true}
        modules={[Pagination, Virtual, Autoplay]}
        spaceBetween={0}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-[60vh] fenster-slider relative mb-24"
        breakpoints={{
          768: {
            slidesPerView: 1.5,
            spaceBetween: 0,
            pagination: false,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 20,
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
                      className="relative rounded-[40px] lg:h-[100vh]"
                    >
                      <p className="relative z-[300]">{slide.description}</p>
                      <div className="img-wrapper relative rounded-[40px]">
                        <Image
                          src={slide.image}
                          alt={slide.name}
                          width={1600}
                          height={400}
                          className="absolute w-full left-0 right-0 top-0 bottom-0 z-[2] rounded-2xl drop-shadow-md"
                        />
                      </div>
                      <div className="text-white z-[800] absolute mx-auto grid content-left grid-cols-1 w-[100%] h-[full] lg:h-[100%]">
                        <div className="h-full pt-64 ml-12">
                          <p className="uppercase text-[16px] text-left lg:text-[24px] mb-4 text-white">
                            <TypeAnimation
                              sequence={[
                                // Same substring at the start will only be typed once, initially

                                "einfach,",
                                10,
                                "einfach, schnell,",
                                10,
                                "einfach, schnell, unkompliziert",
                                10,
                              ]}
                              speed={20}
                              cursor={false}
                              className=""
                              repeat={0}
                            />
                          </p>
                          <h2 className="uppercase text-[42px] text-left leading-[42px] lg:text-[42px] text-white font-bold mt-0 lg:leading-[42px] w-[90%]">
                            Jetzt Ihre
                            <br />
                            <span className="text-[42px] leading-[42px] lg:leading-[42px] lg:text-[42px] text-[#c82778]">
                              Traumfenster
                            </span>{" "}
                            <br />
                            <span className="text-[42px] leading-[42px] lg:leading-[42px] lg:text-[42px]">
                              konfigurieren
                            </span>
                          </h2>
                          <section className="text-left">
                            <Link
                              href="konfigurator"
                              className="btn bg-[#c82778] w-auto inline text-[16px] p-4"
                            >
                              Zum Konfigurator
                            </Link>
                          </section>
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

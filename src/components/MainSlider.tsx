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
    <div className="w-full mx-auto  text-center pb-24 mb-12 mainslider relative top-[0px] xl:top-[133px]  border-black">
      <Swiper
        pagination={true}
        modules={[Pagination, Virtual, Autoplay]}
        spaceBetween={0}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className="mx-auto fenster-slider relative mb-24 lg:h-[100vh]"
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: false,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: false,
          },
        }}
        virtual
      >
        {content.mainslider.map((item, index) => {
          return (
            item.page === page && (
              <div key={index}>
                {item.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index} className="relative lg:h-[100vh]">
                      <div className="grid lg:grid-cols-2 w-full">
                        <div className="text-white z-[800] mx-auto w-[100%] h-[full] ">
                          <div className="h-full pt-80 lg:pt-64 ml-6 lg:ml-12">
                            <p className="uppercase text-[16px]  lg:ml-[25%] text-left lg:text-[24px] mb-4 text-black">
                              <TypeAnimation
                                sequence={[
                                  // Same substring at the start will only be typed once, initially

                                  "einfach,",
                                  10,
                                  "einfach, preiswert,",
                                  10,
                                  "einfach, preiswert, unkompliziert",
                                  10,
                                ]}
                                speed={20}
                                cursor={false}
                                className=""
                                repeat={0}
                              />
                            </p>
                            <h2 className=" lg:ml-[25%] uppercase text-[42px] text-left leading-[42px] lg:text-[72px] text-black font-bold mt-0 mb-0 lg:leading-[72px] w-full lg:w-[90%]">
                              Jetzt Ihre
                              <br />
                              <span className="text-[42px] leading-[42px] lg:leading-[72px] lg:text-[72px] text-orange">
                                Traumfenster
                              </span>{" "}
                              <br />
                              <span className="text-[42px] leading-[42px] lg:leading-[72px] lg:text-[72px]">
                                konfigurieren
                              </span>
                            </h2>
                            <p className=" text-[14px] lg:ml-[25%] text-left lg:text-[20px] mt-4 mb-12 text-black">
                              Erstellen Sie Ihre persönlichen Wunschfenster für
                              Ihre Immobilie und lassen Sie sich ein
                              unverbindliches Angebot erstellen.
                            </p>
                            <section className="text-left lg:ml-[25%] pb-[50px] lg:pb-0">
                              <Link
                                href="konfigurator"
                                className="btn bg-orange w-auto inline text-[16px] p-4"
                              >
                                Zum Konfigurator
                              </Link>
                            </section>
                          </div>
                        </div>
                        <div className="img-wrapper  absolute h-[100%] right-0">
                          <Parallax
                            speed={-20}
                            startScroll={0}
                            endScroll={400}
                            opacity={[1, 0.3]}
                            translateY={[0, 10]}
                          >
                            <Image
                              src={slide.image}
                              alt={slide.name}
                              width={1600}
                              priority={true}
                              height={800}
                              className=" w-full left-0 -right-0 top-0 bottom-0 z-[2] slidermask"
                            />
                          </Parallax>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            )
          );
        })}
      </Swiper>
    </div>
  );
}

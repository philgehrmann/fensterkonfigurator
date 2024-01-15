"use client";
import content from "../../content/fenster.json";
import MainSlider from "@/components/MainSlider";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Page() {
  return (
    <>
      <MainSlider page="fenster" />
      <div className=" lg:max-w-[75%] mx-auto">
        <h2 className="h2 text-center">Fenster</h2>
        {content.fenster.map((item, index) => {
          return (
            <section
              key={index}
              className="hover:cursor-pointer rounded-r-xl pl-6"
            >
              <h3 className="h3 mb-0" key="">
                {item.title}
              </h3>
              <div className="fensterwrapper rounded-xl">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1.5}
                  breakpoints={{
                    768: {
                      slidesPerView: 2.5,
                      spaceBetween: 15,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 25,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {item.fenster.map((window, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Link
                          href={
                            "/fensterdetail/" + encodeURIComponent(window.id)
                          }
                          className=" hover:shadow-xl p-5"
                        >
                          <img
                            src={window.image}
                            alt={window.name}
                            className="w-full h-auto"
                          />
                          <p className="mt-2">{window.name}</p>
                          <p className="mt-2 text-[24px] justify-self-start">
                            ab {window.price} €
                          </p>
                          <p className="mt-2  text-[12px] justify-self-end">
                            zu den Details
                          </p>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

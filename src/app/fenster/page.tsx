"use client";
import content from "../../content/fenster.json";
import MainSlider from "@/components/MainSlider";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Page() {
  return (
    <>
      <MainSlider page="fenster" />
      <h3> Wir setzen bei unseren Fenstern auf Qualität und Langlebig</h3>
      <div className=" lg:max-w-[75%] mx-auto">
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
                  slidesPerView={2.5}
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
                >
                  {item.fenster.map((window, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Link
                          href={
                            "/fensterdetail/" + encodeURIComponent(window.id)
                          }
                          className=" hover:shadow-xl p-5 text-center"
                        >
                          <Image
                            src={window.image}
                            alt={window.name}
                            width={200}
                            height={200}
                            className="w-[80%] lg:w-[80%] h-auto mx-auto"
                          />
                          <p className="mt-6 text-[13px] lg:text-[15px]">
                            {window.name}
                          </p>
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

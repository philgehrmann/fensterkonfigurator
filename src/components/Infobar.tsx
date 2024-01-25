"use client";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
export default function Infobar() {
  return (
    <>
      <div className="xl:hidden bg-orange py-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
        >
          <SwiperSlide
            key={1}
            className="relative text-center"
            data-swiper-autoplay="4000"
          >
            <FontAwesomeIcon
              className="inline-block pr-1 self-center text-[12px] text-bermuda"
              icon={faCheck}
            />{" "}
            <span className="text-[12px] text-white">
              einfacher Bestellvorgang
            </span>
          </SwiperSlide>
          <SwiperSlide
            key={2}
            className="relative text-center"
            data-swiper-autoplay="4000"
          >
            <FontAwesomeIcon
              className="inline-block pr-1 self-center text-[12px] text-white"
              icon={faCheck}
            />{" "}
            <span className="text-[12px] text-white">schnelle Abwicklung</span>
          </SwiperSlide>
          <SwiperSlide
            key={3}
            className="relative text-center"
            data-swiper-autoplay="4000"
          >
            <FontAwesomeIcon
              className="inline-block pr-1 self-center text-[12px] text-white"
              icon={faCheck}
            />{" "}
            <span className="text-[12px] text-white">höchste Qualität</span>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden xl:block max-w-full mx-auto bg-orange w-full z-[25]">
        <div className="px-12 mx-auto py-2">
          <div className="grid lg:grid-cols-[375px_1fr_1fr] items-center">
            <div className="hidden lg:block text-white justify-items-center align-items-center text-[12px]">
              <p>Ihre Fensterprofis im Internet</p>
            </div>
            <div className="grid grid-flow-col justify-self-end gap-4">
              <div>
                <FontAwesomeIcon
                  className="inline-block pr-1 self-center text-[12px] text-white"
                  icon={faCheck}
                />{" "}
                <span className="text-[12px] text-white">
                  einfache Konfiguration
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  className="inline-block pr-1 self-center text-[12px] text-white"
                  icon={faCheck}
                />{" "}
                <span className="text-[12px] text-white">
                  schnelle Lieferung
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  className="inline-block pr-1 self-center text-[12px] text-white"
                  icon={faCheck}
                />{" "}
                <span className="text-[12px] text-white">höchste Qualität</span>
              </div>
            </div>
            <div>
              <div className=" grid-flow-col hidden lg:grid justify-items-end">
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    className="inline-block pr-1 self-center text-[22px] text-white"
                    icon={faFacebookSquare}
                  />{" "}
                  <FontAwesomeIcon
                    className="inline-block pr-1 self-center text-[22px] text-white"
                    icon={faInstagramSquare}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

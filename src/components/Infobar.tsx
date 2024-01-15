"use client";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
export default function Infobar() {
  return (
    <>
      <div className="lg:hidden bg-black py-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
              einfache Konfiguration
            </span>
          </SwiperSlide>
          <SwiperSlide
            key={2}
            className="relative text-center"
            data-swiper-autoplay="4000"
          >
            <FontAwesomeIcon
              className="inline-block pr-1 self-center text-[12px] text-bermuda"
              icon={faCheck}
            />{" "}
            <span className="text-[12px] text-white">schnelle Lieferung</span>
          </SwiperSlide>
          <SwiperSlide
            key={3}
            className="relative text-center"
            data-swiper-autoplay="4000"
          >
            <FontAwesomeIcon
              className="inline-block pr-1 self-center text-[12px] text-bermuda"
              icon={faCheck}
            />{" "}
            <span className="text-[12px] text-white">höchste Qualität</span>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:block max-w-full mx-auto bg-black w-full z-[25]">
        <div className="lg:max-w-[75%] mx-auto py-4">
          <div className="grid lg:grid-cols-[440px_1fr_1fr]">
            <div className="grid grid-flow-col">
              <div>
                <FontAwesomeIcon
                  className="inline-block pr-1 self-center text-[12px] text-bermuda"
                  icon={faCheck}
                />{" "}
                <span className="text-[12px] text-white">
                  einfache Konfiguration
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  className="inline-block pr-1 self-center text-[12px] text-bermuda"
                  icon={faCheck}
                />{" "}
                <span className="text-[12px] text-white">
                  schnelle Lieferung
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  className="inline-block pr-1 self-center text-[12px] text-bermuda"
                  icon={faCheck}
                />{" "}
                <span className="text-[12px] text-white">höchste Qualität</span>
              </div>
            </div>
            <div className="hidden lg:block"></div>
            <div>
              <div className=" grid-flow-col hidden lg:grid justify-items-end">
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    className="inline-block pr-1 self-center text-[12px] text-bermuda"
                    icon={faEnvelope}
                  />{" "}
                  <span className="text-[12px] text-white">Kontakt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

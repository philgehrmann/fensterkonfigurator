"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";
import content from "../content/bestseller.json";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";
export default function Produktslider() {
  return (
    <div className="max-w-[90%] xl:max-w-[75%]  text-center my-4 ml-12 xl:mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        navigation={true}
        slidesPerView={1.5}
        className="pb-4 "
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {content.bestseller.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-white  rounded-lg text-center grid items-center justify-items-center mb-4 drop-shadow-xl hover:drop-shadow-xl cursor-pointer hover:scale-100"
            >
              <Link href={"fensterdetail/" + item.link}>
                <div className="w-[55px] absolute top-[10px] left-[10px]">
                  <img
                    src={"/images/logos/logo_" + item.logo + ".webp"}
                    alt={item.alt}
                  />
                </div>
                <Image
                  src={item.image}
                  width={100}
                  loading="lazy"
                  height={80}
                  alt={item.id}
                  className="mx-auto w-[100px] h-[130px] "
                />

                <div className="justify-items-start p-4 text-left">
                  <h3 className="text-[16px] mt-2 mb-1">{item.name}</h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

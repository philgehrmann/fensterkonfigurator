"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";
import content from "../content/bestseller.json";
import Image from "next/image";
import {
  faCalendar,
  faPhone,
  faSliders,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "swiper/css/bundle";
export default function Produktslider() {
  return (
    <div className="max-w-[100%] xl:max-w-[75%] text-center my-4 ml-6 xl:mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        pagination={true}
        slidesPerView={1.5}
        className="pb-4  pl-12"
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {content.bestseller.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className=" rml-2 lg:mr-2 text-center grid items-center justify-items-center mb-4 cursor-pointer hover:scale-100 group"
            >
              <div className=" bg-white rounded-lg drop-shadow-md group-hover:drop-shadow-lg">
                <Link href={"fensterdetail/" + item.link}>
                  <div className="w-[55px] absolute top-[10px] left-[10px]">
                    <Image
                      src={"/images/logos/logo_" + item.logo + ".webp"}
                      width={100}
                      loading="lazy"
                      height={80}
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
                    <h3 className="text-[14px] mt-2 mb-1">{item.name}</h3>
                    <ul className="text-[12px] list-outside relative productslider-details">
                      <li className="flex justify-items-start items-start">
                        {" "}
                        <FontAwesomeIcon
                          className={" mr-3 mt-1 text-[12px] text-orange"}
                          icon={faCheck}
                        />
                        5-Kammer-Profil mit 70 mm Basis-Bautiefe asdasd
                      </li>
                      <li className="flex justify-items-start items-start">
                        {" "}
                        <FontAwesomeIcon
                          className={" mr-3 mt-1 text-[12px] text-orange"}
                          icon={faCheck}
                        />
                        5-Kammer-Profil mit 70 mm Basis-Bautiefe asdasd
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="bg-orange rounded-b-lg py-2 text-white text-[12px] lg:opacity-75 group-hover:opacity-100 max-w-[90%] mx-auto ">
                mehr Details{" "}
                <FontAwesomeIcon
                  className={"inline-block ml-3 mt-1 text-[12px] text-white"}
                  icon={faArrowRight}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

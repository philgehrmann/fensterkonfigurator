"use client";
import {
  faXmark,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import content from "../content/navigation.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";

export default function MobileNavigation({
  setShowNavigation,
}: {
  setShowNavigation: Function;
}) {
  return (
    <>
      <div className="mobile-nav absolute w-full h-screen bg-white z-[500]  pt-8 transform transition-all duration-550 ease-out">
        <div className="grid grid-cols-[65%_40%] pr-12">
          <div></div>
          <div className="justify-self-end self-center">
            <a
              className="text-[16px]"
              onClick={() => {
                setShowNavigation(false);
              }}
            >
              <span>schließen</span>
              <FontAwesomeIcon
                className="inline-block pl-2 text-[16px]"
                icon={faXmark}
              />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] text-black uppercase px-12">Navigation</h3>

          <div className="mb-12 pl-12">
            <div>
              <Swiper modules={[]} spaceBetween={15} slidesPerView={2.5}>
                <SwiperSlide className="mobile-nav-slide-bg rounded-xl relative h-[75px] shadow-2xl">
                  <Image
                    src="https://picsum.photos/seed/picsum/400/400"
                    alt="Fenster"
                    width={200}
                    height={75}
                    className="object-contain absolute rounded-xl "
                  />
                  <h2 className="text-[14px] m-0 py-2 px-2 absolute z-[5] text-white bottom-[10px]">
                    Aluminium{" "}
                  </h2>
                </SwiperSlide>
                <SwiperSlide className="mobile-nav-slide-bg rounded-xl relative h-[75px] shadow-2xl">
                  <Image
                    src="https://picsum.photos/seed/picsum/400/400"
                    alt="Fenster"
                    width={200}
                    height={200}
                    className="object-contain absolute rounded-xl "
                  />
                  <h2 className="text-[14px] m-0 py-2 px-2 absolute z-[5] text-white bottom-[10px]">
                    Stahl{" "}
                  </h2>
                </SwiperSlide>
              </Swiper>
            </div>
            <div></div>
          </div>
          <div className="px-12">
            {content.navigation.map((item, index) => {
              return (
                <Link href={item.path} key={index}>
                  <li
                    className="grid content-center grid-flow-col border-b-2 text-[22px] py-4 border-transparent  font-[500]  hover:text-bermuda cursor-pointer"
                    data-hover={item.subnavIdent}
                  >
                    {item.name}
                    <span className="justify-self-end">
                      <FontAwesomeIcon
                        className="inline-block pl-2 text-[16px] text-bermuda"
                        icon={faChevronRight}
                      />
                    </span>
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
export default function Partnersection() {
  return (
    <section className="w-full bg-white mt-6 mb-6 g:mt-12 lg:mb-12 ">
      <div className="lg:max-w-[60%] mx-auto ">
        <div className="p-12">
          <h3 className="font-bold mb-2">Hersteller</h3>
          <p>
            Qualität steht an erster Stelle! Bei unserer Auswahl von Produzenten
            legen wir höchsten Wert auf exzellente Qualität in jedem Schritt des
            Produktionsprozesses. Nur die besten Hersteller, die sich durch
            herausragende Handwerkskunst, erstklassige Materialien und eine
            nachhaltige Produktionsweise auszeichnen, schaffen es in unser
            Sortiment.
          </p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="text-center h-[300px]"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          <SwiperSlide
            key={1}
            className="relative flex justify-items-center content-center h-[300px]"
          >
            <Image
              src="/images/partner/aluplast.jpg"
              alt="Aluplast Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide
            key={1}
            className="relative h-[300px] flex justify-items-center content-center "
          >
            <Image
              src="/images/partner/schueco.jpeg"
              alt="Schüco Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide key={1} className="relative h-[300px]">
            <Image
              src="/images/partner/veka.jpeg"
              alt="Veka Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

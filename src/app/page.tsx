"use client";
import { useEffect } from "react";
import Image from "next/image";
import MainSlider from "@/components/MainSlider";
import Partnersection from "@/components/Parnersection";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Parallax } from "react-scroll-parallax";
import ImageSlider from "@/components/ImageSlider";
import ScrollTrigger from "react-scroll-trigger";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

export default async function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MainSlider page="home" />
      <section className="grid grid-cols-1 lg:grid-cols-2  ">
        <div className="mt-[1rem] lg:mt-[6rem] max-w-[80%] mx-auto">
          <Parallax
            speed={10}
            translateY={[-5, 0]}
            easing="easeInOut"
            startScroll={300}
            endScroll={600}
            opacity={[0, 1]}
          >
            <p className="uppercase text-[16px] lg:text-[24px] mb-4 font-light">
              01 - Fenster
            </p>

            <h2 className="uppercase text-[42px] leading-[42px] lg:text-[110px] font-bold mt-0 lg:leading-[100px] ">
              Wir
              <br />
              bringen
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Licht",
                  2000,
                  "Freude",
                  2000,
                  "Wohlfühlen",
                  2000,
                ]}
                speed={2}
                cursor={false}
                className=" text-bermuda lg:text-[110px]"
                repeat={Infinity}
              />
              <br />
              <span className="text-[42px] leading-[42px] lg:leading-[100px] lg:text-[110px]">
                ins dunkle
              </span>
            </h2>

            <p className=" text-[18px] leading-[22px] lg:text-[22px] font-regular mt-0 lg:leading-[36px] lg:max-w-[75%]">
              Unsere <span className="font-bold ">modernen</span>,{" "}
              <span className="font-bold ">preiswerten</span>,{" "}
              <span className="font-bold ">energieeffizienten</span> Fenster
              kommen so schnell zu Ihnen nach Hause, dass sie noch bevor Sie
              "Energieeffizienz" sagen können, bereits eingebaut sind – denn bei
              uns ist nicht nur das Licht schnell, sondern auch der{" "}
              <span className="font-bold ">Service.</span>
            </p>
          </Parallax>
        </div>
        <div>
          <Parallax
            speed={10}
            translateY={[0, 20]}
            translateX={[0, 0]}
            easing="easeInOut"
            startScroll={300}
            endScroll={900}
            opacity={[0, 1]}
          >
            <div className="lg:max-w-[60%] mx-auto h-[700px] bg-[url('/images/fenster/bg-fenster-slider-before.jpg')] background-center lg:mt-[8rem] shadow-2xl"></div>
          </Parallax>
        </div>
      </section>
      <section className="mt-[1rem] lg:mt-[6rem]">
        <ImageSlider />
      </section>
      <section className="w-full bg-lightgray">
        <div className="content max-w-[60%] mx-auto py-24 text-center text-[18px] lg:text-[24px]">
          <span className="font-bold ">Wir</span> stehen für{" "}
          <span className="font-bold ">moderne</span>,
          <span className="font-bold ">energieeffiziente Fensterlösungen</span>,
          die nicht nur stilvolles Design verkörpern, sondern auch höchste
          Standards in puncto{" "}
          <span className="font-bold">Energieeinsparung</span>
          und <span className="font-bold">Nachhaltigkeit</span> erfüllen.
        </div>
      </section>
      <Partnersection />
    </div>
  );
}

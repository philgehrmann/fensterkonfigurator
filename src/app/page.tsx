import Image from "next/image";
import { getStoryblokApi } from "@storyblok/react/rsc";
import MainSlider from "@/components/MainSlider";
import Partnersection from "@/components/Parnersection";

export default async function Home() {
  return (
    <div>
      <MainSlider page="home" />
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

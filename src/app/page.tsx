"use client";
import { useEffect } from "react";
import Image from "next/image";
import MainSlider from "@/components/MainSlider";
import Partnersection from "@/components/Parnersection";
import Link from "next/link";
import Produktslider from "@/components/ProduktSlider";
import Marquee from "react-fast-marquee";

export default async function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MainSlider page="home" />
      <section className="-mt-[185px] lg:-mt-[100px] z-20">
        <h2 className="h2 text-black font-bold z-[600] text-[18px] lg:text-[22px] max-w-[75%] mx-auto mb-1 relative">
          Entdecken Sie unsere Bestseller
        </h2>
        <Produktslider />
      </section>
      <section className="mt-[1rem] lg:mt-[6rem] max-w-[80%]  text-center mx-auto">
        <Marquee gradient={true}>
          <Image
            src="/images/logos/logo_sch.webp"
            width={300}
            height={300}
            alt="Schueco Fenster"
            className="filter-black"
          ></Image>
          <Image
            src="/images/logos/logo_veka.webp"
            width={300}
            height={300}
            alt="Schueco Fenster"
            className="filter-black"
          ></Image>
          <Image
            src="/images/logos/logo_kom.webp"
            width={300}
            height={300}
            alt="Schueco Fenster"
            className="filter-black"
          ></Image>
          <Image
            src="/images/logos/logo_sala.webp"
            width={300}
            height={300}
            alt="Schueco Fenster"
            className="filter-black"
          ></Image>
          <Image
            src="/images/logos/logo_gea.webp"
            width={300}
            height={300}
            alt="Schueco Fenster"
            className="filter-black"
          ></Image>
        </Marquee>
      </section>
      <section className="">
        <div className="mt-[1rem] lg:mt-[6rem] max-w-[80%]  text-center mx-auto">
          <h2 className="h2">Hallo</h2>
          <p>
            Herzlich Willkommen bei [Ihrem Unternehmen] – Ihrem
            vertrauenswürdigen Partner für Fensterlösungen! Wenn Sie auf der
            Suche nach hochwertigen Fenstern zu unschlagbaren Preisen sind, sind
            Sie bei uns genau richtig. Wir möchten Ihnen gerne einige Gründe
            vorstellen, warum der Kauf von Fenstern bei uns die beste
            Entscheidung für Sie ist:
          </p>
        </div>
      </section>

      <Partnersection />
    </div>
  );
}

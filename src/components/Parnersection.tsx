"use client";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/effect-coverflow";
import Marquee from "react-fast-marquee";
export default function Partnersection() {
  return (
    <section className="w-full mt-6 mb-6 g:mt-12 lg:mb-12 ">
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
        <section className="mt-[1rem] lg:mt-[6rem] text-center mx-auto">
          <Marquee gradient={true}>
            <Image
              src="/images/logos/logo_sch.webp"
              width={200}
              height={200}
              alt="Schueco Fenster"
              className="filter-black"
            ></Image>
            <Image
              src="/images/logos/logo_veka.webp"
              width={200}
              height={200}
              alt="Schueco Fenster"
              className="filter-black"
            ></Image>
            <Image
              src="/images/logos/logo_kom.webp"
              width={200}
              height={200}
              alt="Schueco Fenster"
              className="filter-black"
            ></Image>
            <Image
              src="/images/logos/logo_sala.webp"
              width={200}
              height={200}
              alt="Schueco Fenster"
              className="filter-black"
            ></Image>
            <Image
              src="/images/logos/logo_gea.webp"
              width={200}
              height={200}
              alt="Schueco Fenster"
              className="filter-black"
            ></Image>
          </Marquee>
        </section>
      </div>
    </section>
  );
}

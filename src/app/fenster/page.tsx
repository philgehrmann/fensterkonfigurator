"use client";
import content from "../../content/fenster.json";
import MainSlider from "@/components/MainSlider";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Page() {
  return (
    <>
      <MainSlider page="fenster" />
      <div className=" lg:max-w-[75%] mx-auto text-center p-6">
      <h3 className="font-bold"> Wir setzen bei unseren Fenstern auf Qualität und Langlebig</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
        <div>Unsere Fenster werden aus hochwertigen Materialien hergestellt, die nicht nur robust und langlebig sind, sondern auch dazu beitragen, den Energieverbrauch zu reduzieren und somit Ihre Energiekosten zu senken. Mit einer Vielzahl von Designs und Optionen können Sie sicher sein, dass wir die perfekten Fenster für Ihre individuellen Bedürfnisse haben.</div>
        <div>Was uns von anderen unterscheidet, ist nicht nur unsere Qualität, sondern auch unsere unschlagbaren Preise. Wir glauben fest daran, dass jeder Zugang zu erstklassigen Fensterlösungen haben sollte, ohne dabei ein Vermögen ausgeben zu müssen. Deshalb bemühen wir uns, unsere Produkte zu den wettbewerbsfähigsten Preisen auf dem Markt anzubieten, ohne dabei Kompromisse bei der Qualität einzugehen.</div>
        <div>Kundenorientierter Service steht bei uns an erster Stelle. Unser Team von Fachleuten steht Ihnen bei der Auswahl der richtigen Fenster für Ihre Bedürfnisse zur Seite und sorgt dafür, dass der gesamte Prozess vom Kauf bis zur Installation reibungslos und stressfrei verläuft.
</div>
      </div>
      </div>
      <div className=" lg:max-w-[75%] mx-auto">
        {content.fenster.map((item, index) => {
          return (
            <section
              key={index}
              className="hover:cursor-pointer rounded-r-xl pl-6"
            >
              <h3 className="h3 mb-0" key="">
                {item.title}
              </h3>
              <div className="fensterwrapper rounded-xl grid grid-cols-2 gap-4">
                  {item.fenster.map((window, index) => {
                    return (
                        <Link
                          href={
                            "/fensterdetail/" + encodeURIComponent(window.id)
                          }
                          key={index}
                          className=" text-center"
                        >
                          <Image
                            src={window.image}
                            alt={window.name}
                            width={800}
                            height={800}
                            className="h-auto mx-auto"
                          />
                          <p className="mt-6 text-[13px] lg:text-[15px]">
                            {window.name}
                          </p>
                          <p className="mt-2 text-[24px] justify-self-start">
                          
                          </p>
                          <p className="mt-2  text-[12px] justify-self-end">
                            zu den Details
                          </p>
                        </Link>
                    );
                  })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

"use client";
import { Parallax } from "react-scroll-parallax";

export default function Howto() {
  return (
    <Parallax
      speed={-10}
      startScroll={200}
      endScroll={1200}
      opacity={[1, 0.4]}
      translateY={[0, 20]}
      className="relative z-40"
    >
      <section className="wave bg-orange mt-[300px] relative z-20">
        <div className="max-w-[75%] bg-orange text-center mx-auto py-24">
          <h2 className=" uppercase text-[42px] text-left leading-[42px] lg:text-[42px] text-black font-bold mt-0 mb-0 lg:leading-[42px] w-full lg:w-[90%]">
            Willkommen bei [Firmenname] <br />
            Ihr Fensterexperte für einfaches und persönliches Fensterkaufen!
          </h2>

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
    </Parallax>
  );
}

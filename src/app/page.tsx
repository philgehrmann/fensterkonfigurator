import MainSlider from "@/components/MainSlider";
import Partnersection from "@/components/Parnersection";
import Produktslider from "@/components/ProduktSlider";
import Howto from "@/components/startpage/Howto";

export default async function Home() {
  return (
    <div>
      <MainSlider page="home" />
      <section className="-mt-[185px] lg:-mt-[200px] z-20">
        <h2 className="h2 text-black font-bold z-[600] text-[18px] lg:text-[22px] max-w-[75%] mt-36 mx-auto mb-1 relative">
          Entdecken Sie unsere Bestseller
        </h2>
        <Produktslider />
      </section>
      <section>
        <Howto />
      </section>
      <Partnersection />
    </div>
  );
}

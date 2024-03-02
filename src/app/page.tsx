import MainSlider from "@/components/MainSlider";
import Partnersection from "@/components/Parnersection";
import Produktslider from "@/components/ProduktSlider";
import Howto from "@/components/startpage/Howto";

export default async function Home() {
  return (
    <div>
      <MainSlider page="home" />
      <section>
        <Howto />
      </section>
    </div>
  );
}

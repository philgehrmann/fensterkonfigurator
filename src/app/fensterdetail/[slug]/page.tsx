import content from "../../../content/fensterdetail.json";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import DetailImageSlider from "@/components/DetailImageSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug;

  // fetch data
  const product = content.fenster.filter((item) => item.id === params.slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product[0].details[0].name,
    openGraph: {
      images: [product[0].details[0].image[0].src, ...previousImages],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  let windowContent = content.fenster.filter((item) => item.id === params.slug);

  return (
    <section className="lg:max-w-[80%] mx-auto mt-[100px] lg:mt-[150px]">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] w-full lg:p-12 text-white">
        <div className="image-layer">
          <DetailImageSlider article={windowContent} />
        </div>
        <div className="info-layer p-6 text-black">
          <h2 className="text-black text-[24px] lg:text-[32px]">
            {windowContent[0].details[0].name}
          </h2>

          <ul>
            <li> Detail1</li>
            <li> Detail2</li>
            <li> Detail3</li>
            <li> Detail4</li>
          </ul>
          <h3 className="mb-4 text-bermuda pb-2 border-b-2 border-width-[50%] border-bermuda">
            Produktbeschreibung
          </h3>
          <p>
            Entdecken Sie unser exklusives Fensterdesign, das nicht nur
            Funktionalität, sondern auch Ästhetik auf höchstem Niveau bietet.
            Mit modernster Technologie und hochwertigen Materialien gefertigt,
            erfüllt dieses Fenster die anspruchsvollsten Anforderungen an
            Energieeffizienz und Stil. Die mehrfachverglasten Fensterscheiben
            sorgen für eine optimale Wärme- und Schalldämmung, wodurch Ihr
            Zuhause nicht nur energieeffizienter, sondern auch ruhiger wird. Die
            edle Rahmenkonstruktion aus robustem Material gewährleistet nicht
            nur Stabilität, sondern verleiht dem Fenster auch eine zeitlose
            Eleganz. Die innovative Öffnungsmechanik ermöglicht eine mühelose
            Bedienung, während die hochwertige Verarbeitung eine lange
            Lebensdauer gewährleistet. Genießen Sie mit unserem Fenster nicht
            nur eine optimale Lichtdurchlässigkeit, sondern auch einen
            unvergleichlichen Blick nach draußen.
          </p>
        </div>
      </div>
    </section>
  );
}

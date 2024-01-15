import content from "../../../content/fensterdetail.json";
import type { Metadata, ResolvingMetadata } from "next";

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
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  let windowContent = content.fenster.filter((item) => item.id === params.slug);

  return (
    <footer className="max-w-[80%] mx-auto">
      <div className="grid grid-cols-3 p-12 text-white">
        {windowContent[0].details[0].name}
      </div>
    </footer>
  );
}

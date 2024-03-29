import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import { Suspense } from "react";
import { Providers } from "./providers";

import "./globals.css";
import "./windows.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { storyblokInit, apiPlugin } from "@storyblok/react";

const inter = Inter({ subsets: ["latin"] });
const openSans = Karla({
  weight: ["400", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Günstige Fenster aus Polen",
  description:
    "Günstige Fenster aus Polen, direkt vom Hersteller zu Ihnen nach Hause, großes Sortiment an verschiedenen Fenstertypen.",
  keywords:
    "Energiesparfenster, Fenster, Polnische Fensterqualität, Polnische Fenster, Fensterservice, Fensterglas, guenstige Fenster, günstige Fenster, preiswerte Fenster, Fensterrahmen, Fensterglas, Fensterhersteller, Fensterdesign, Doppelverglasung, Aluminiumfenster, Kunststofffenster, Fensterkauf, Fensterlösungen, Fensterangebote",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],
  });
  return (
    <html lang="de">
      <body className={openSans.className + " text-black"}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

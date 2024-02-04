"use client";
import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import { Providers } from "../providers";
import { KonfiguratorContextProvider } from "../context/konfigurator.context";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <NextUIProvider>
          <KonfiguratorContextProvider>{children}</KonfiguratorContextProvider>
        </NextUIProvider>
        <Footer />
      </body>
    </html>
  );
}

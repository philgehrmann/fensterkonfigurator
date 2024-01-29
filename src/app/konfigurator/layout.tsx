import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import { Providers } from "../providers";
import { KonfiguratorContextProvider } from "../context/konfigurator.context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <KonfiguratorContextProvider>{children}</KonfiguratorContextProvider>
      </body>
    </html>
  );
}

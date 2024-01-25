"use client";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
import {
  faCalendar,
  faPhone,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Infobar from "./Infobar";

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [scrolltopdata, setscrolltopdata] = useState(false);

  useEffect(() => {
    setscrolltopdata(true);
    let elem = document.querySelector(".mainslider") || undefined;
    if (elem !== undefined) {
      let rect = elem!.getBoundingClientRect().height;
      window.addEventListener("scroll", () => {
        if (window.scrollY > rect) {
          setscrolltopdata(false);
        } else {
          setscrolltopdata(true);
        }
      });
    }
  }, []);
  return (
    <>
      <header className="xl:fixed top-0 w-full z-[200]">
        <Infobar />
        <div
          className={
            scrolltopdata
              ? "max-w-full mx-auto w-full z-[200] px-6 pb-6 pt-6 bg-white transition-all  border-[1px] border-gray ease-in-out top-0"
              : "max-w-full mx-auto w-full z-[200] px-6 pb-2 pt-2  bg-white transition-all  border-[1px] border-gray ease-in-out top-0"
          }
        >
          {showNavigation && (
            <MobileNavigation setShowNavigation={setShowNavigation} />
          )}
          <div className="grid grid-cols-2 lg:grid-cols-[10%_60%_30%] mx-auto text-black">
            <div className="justify-self-start self-center lg:block">
              <Image
                src="/images/logo-full-white@2x.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="justify-self-start hidden lg:justify-self-end pr-12 lg:pr-0 self-center lg:block">
              <Navigation scrolltopdata={scrolltopdata} />
            </div>
            <div className="xl:hidden justify-self-end">asd</div>
            <div className="self-center hidden xl:block justify-self-end border-l-[1px] border-gray pl-4">
              <Link
                href="/"
                className={
                  scrolltopdata
                    ? "cursor-pointer  w-auto border-[1px] border-lightgray bg-orange btn inline-block"
                    : "cursor-pointer ml-2 border-[1px] border-lightgray bg-orange btn mr-1 inline-block"
                }
              >
                <FontAwesomeIcon
                  className={
                    scrolltopdata
                      ? "inline-block pr-4 text-[12px]"
                      : "inline-block p-1 text-[12px]"
                  }
                  icon={faSliders}
                />
                {scrolltopdata && "Fenster konfigurieren"}
              </Link>
              <Link
                href="/"
                className={
                  scrolltopdata
                    ? " cursor-pointer  border-[1px] border-lightgray bg-orange btn inline-block"
                    : "cursor-pointer border-[1px]  border-lightgray bg-orange btn  btn inline-block"
                }
              >
                <FontAwesomeIcon
                  className={
                    scrolltopdata
                      ? "inline-block pr-4 text-[12px]"
                      : "inline-block p-1 text-[12px]"
                  }
                  icon={faPhone}
                />
                {scrolltopdata && "Jetzt Termin vereinbaren"}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

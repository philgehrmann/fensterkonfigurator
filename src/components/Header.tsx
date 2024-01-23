"use client";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
import { faCalendar, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [scrolltopdata, setscrolltopdata] = useState(false);

  useEffect(() => {
    setscrolltopdata(true);
    let elem = document.querySelector(".mainslider");
    let rect = elem!.getBoundingClientRect().height - 60;
    window.addEventListener("scroll", () => {
      if (window.scrollY > rect) {
        setscrolltopdata(false);
      } else {
        setscrolltopdata(true);
      }
    });
  }, []);
  return (
    <>
      <header
        className={
          scrolltopdata
            ? "max-w-full mx-auto  fixed w-full z-[200] px-24 pb-12 pt-12  transition-all  ease-in-out top-0"
            : "max-w-full mx-auto  fixed w-full z-[200] px-24 pb-2 pt-2  bg-white transition-all  border-[1px] border-gray ease-in-out top-0"
        }
      >
        {showNavigation && (
          <MobileNavigation setShowNavigation={setShowNavigation} />
        )}
        <div className="grid grid-cols-2 lg:grid-cols-[20%_60%_20%] mx-auto text-black">
          <div className="justify-self-start hidden self-center lg:block">
            <Image
              src="/images/logo-full-white@2x.png"
              alt="Logo"
              width={100}
              height={50}
            />
          </div>
          <div className="justify-self-start hidden lg:justify-self-center pr-12 self-center lg:block">
            <Navigation scrolltopdata={scrolltopdata} />
          </div>
          <div className="self-center justify-self-end">
            <Link
              href="/"
              className={
                scrolltopdata
                  ? " cursor-pointer border-[1px] w-[200px] border-lightgray bg-transparent btn"
                  : "cursor-pointer bg-black btn"
              }
            >
              <FontAwesomeIcon
                className={
                  scrolltopdata
                    ? "inline-block pr-4 text-[12px]"
                    : "inline-block pr-4 text-[12px]"
                }
                icon={faPhone}
              />
              Jetzt Termin vereinbaren
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

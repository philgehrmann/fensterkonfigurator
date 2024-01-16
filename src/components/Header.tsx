"use client";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Infobar from "./Infobar";

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [scrolltopdata, setscrolltopdata] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        console.log("größer");
        setscrolltopdata(false);
        console.log(scrolltopdata);
      } else {
        console.log("kleiner");
        setscrolltopdata(true);
        console.log(scrolltopdata);
      }
    });
  }, []);
  return (
    <>
      <header
        className={
          scrolltopdata
            ? "max-w-full mx-auto  w-full z-[200] border-b-2 border-white fixed bg-transparent"
            : "max-w-full mx-auto  w-full z-[200] border-b-2 border-white fixed bg-white"
        }
      >
        {showNavigation && (
          <MobileNavigation setShowNavigation={setShowNavigation} />
        )}
        <Infobar />
        <div className="grid grid-cols-2 lg:grid-cols-[30%_10%_60%] max-w-full  mx-auto text-black">
          <div className="self-center px-4 lg:px-12">
            <h1 className="uppercase font-extrabold text-[18px] lg:text-[24px]">
              <p className="bg-bermuda inline-block text-white p-2 font-bold -skew-x-12 transform-gpu">
                POLENFENSTER24
              </p>
            </h1>
          </div>

          <div className="justify-self-end block lg:justify-self-center self-center lg:hidden px-4 lg:px-0">
            <div
              className="navMobile_wrapper hover:cursor-pointer py-6 pt-8 flex flex-col items-center"
              onClick={() => setShowNavigation(true)}
            >
              <p className="w-[28px] block -mt-[12px] h-[2px] bg-black"></p>
              <p className="w-[20px] block mt-[6px] h-[2px] bg-black self-end"></p>
              <p className="w-[28px] block -mt-[-6px] h-[2px] bg-black"></p>
            </div>
          </div>
          <div className="justify-self-end hidden self-center lg:block"></div>
          <div className="justify-self-end hidden lg:justify-self-end pr-12 self-center lg:block">
            <Navigation scrolltopdata={scrolltopdata} />
          </div>
        </div>
      </header>
    </>
  );
}

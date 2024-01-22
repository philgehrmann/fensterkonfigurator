"use client";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Infobar from "./Infobar";
import Salebar from "./Salebar";

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [scrolltopdata, setscrolltopdata] = useState(false);

  useEffect(() => {
    setscrolltopdata(true);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
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
          scrolltopdata ? "max-w-full mx-auto  fixed w-full z-[200] px-24 pb-12 pt-12  bg-white top-0": "max-w-full mx-auto  fixed w-full z-[200] px-24 pt-6 bg-white top-0"}
      >
        {showNavigation && (
          <MobileNavigation setShowNavigation={setShowNavigation} />
        )}
        <div className="grid grid-cols-2 lg:grid-cols-[60%_20%_20%] mx-auto text-black">
        <div className="justify-self-start hidden lg:justify-self-start pr-12 self-center lg:block">
            <Navigation scrolltopdata={scrolltopdata} />
          </div>
          <div className="justify-self-end hidden self-center lg:block"></div>
        
          <div className="self-center px-4 lg:px-12">
            <h1 className="uppercase font-extrabold text-[18px] lg:text-[24px]">
              <p className="bg-bermuda inline-block text-white p-2 font-bold -skew-x-12 transform-gpu">
                POLENFENSTER24
              </p>
            </h1>
          </div>

        </div>
        {!scrolltopdata && <Salebar />}
      </header>
    </>
  );
}

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
          scrolltopdata
            ? "max-w-full mx-auto  w-full z-[200] fixed bg-transparent top-0"
            : "max-w-full mx-auto  w-full z-[200] fixed bg-white top-0"
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
              <p
                className={
                  scrolltopdata
                    ? "w-[28px] block -mt-[12px] h-[2px] bg-white"
                    : "w-[28px] block -mt-[12px] h-[2px] bg-black"
                }
              ></p>
              <p
                className={
                  scrolltopdata
                    ? "w-[20px] block mt-[6px] h-[2px] bg-white self-end"
                    : "w-[20px] block mt-[6px] h-[2px] bg-black self-end"
                }
              ></p>
              <p
                className={
                  scrolltopdata
                    ? "w-[28px] block -mt-[-6px] h-[2px] bg-white"
                    : "w-[28px] block -mt-[-6px] h-[2px] bg-black"
                }
              ></p>
            </div>
          </div>
          <div className="justify-self-end hidden self-center lg:block"></div>
          <div className="justify-self-end hidden lg:justify-self-end pr-12 self-center lg:block">
            <Navigation scrolltopdata={scrolltopdata} />
          </div>
        </div>
        {!scrolltopdata && <Salebar />}
      </header>
    </>
  );
}

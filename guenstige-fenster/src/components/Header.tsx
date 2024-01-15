"use client";
import { useState } from "react";
import Navigation from "./Navigation";
import Infobar from "./Infobar";

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <>
      <header className="max-w-full mx-auto bg-white w-full z-[200] border-b-2 border-[#d0e1eb] ">
        <Infobar />
        <div className="grid grid-cols-2 lg:grid-cols-[20%_60%_20%]  max-w-full xl:max-w-[75%] mx-auto text-black">
          <div className="self-center px-4 lg:px-0">a</div>
          <div className="justify-self-end hidden lg:justify-self-center self-center lg:block">
            <Navigation />
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
        </div>
      </header>
    </>
  );
}

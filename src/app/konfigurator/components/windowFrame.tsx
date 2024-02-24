"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/type.json";

export default function WindowFrame({ frame }: { frame: string }) {
  const { state, dispatch } = useContext(KonfiguratorContext);
  return (
    <section className="frame lg:ml-32">
      {frame === "1d" && (
        <div className="massewrapper relative">
          <div className="w-full border-b-[2px] mb-2 border-black text-center text-[11px]">
            {state.width} mm
          </div>
          <div className={"fenster-basic " + state.colorClass}></div>
          <div className=" h-[400px] grid items-center  border-l-[2px] mb-0 border-black text-center text-[11px] absolute -right-[15%] top-[6%]">
            <p className="rotate-90"> {state.height} mm</p>
          </div>
        </div>
      )}
      {frame === "2d" && (
        <div className="fenster-wrapper zweier grid grid-cols-2">
          <div className={"fenster-basic zweier " + state.colorClass}></div>
          <div className={"fenster-basic zweier " + state.colorClass}></div>
        </div>
      )}
      {frame === "3d" && (
        <div className="fenster-wrapper  grid grid-cols-3">
          <div className={"fenster-basic dreier " + state.colorClass}></div>
          <div className={"fenster-basic dreier " + state.colorClass}></div>
          <div className={"fenster-basic dreier " + state.colorClass}></div>
        </div>
      )}
    </section>
  );
}

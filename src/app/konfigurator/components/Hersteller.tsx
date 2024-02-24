"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/konfigurator.json";
import Image from "next/image";

export default function Hersteller() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateHersteller = (id: any) => {
    if (state.hersteller !== id || state.hersteller === "") {
      dispatch({ type: "REMOVE_GLOBALCONFIG", payload: "" });
      dispatch({ type: "UPDATE_HERSTELLER", payload: id });
    } else {
      dispatch({ type: "UPDATE_HERSTELLER", payload: "" });
    }
  };

  return (
    <div className="self-center">
      <h3 className="m-0">Hersteller</h3>
      <p className="text-[12px]"> Wählen Sie einen Fensterhersteller</p>
      <div className="grid grid-cols-1 gap-6 items-center justify-items-center mt-6">
        {content.hersteller.map((marke, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer grid grid-cols-2 items-center"
              onClick={() => updateHersteller(marke.id)}
            >
              <Image
                src={marke.image}
                alt={marke.name}
                width={200}
                height={200}
                className={
                  "w-[100%] lg:w-[100%] h-auto mx-auto border-[3px] rounded-xl p-6 bg-white drop-shadow-lg" +
                  (marke.id === state.hersteller
                    ? " border-[3px] border-orange"
                    : "")
                }
              />
              <p className="text-[12px] px-4">{marke.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

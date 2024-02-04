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
    <section>
      <h2> Wähle einen Hersteller</h2>
      <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
        {content.hersteller.map((marke, index) => {
          return (
            <div className="rounded-xl p-6 bg-white drop-shadow-lg cursor-pointer">
              <p
                className={state.hersteller === marke.id ? "text-orange" : ""}
                onClick={() => updateHersteller(marke.id)}
              >
                <Image
                  src={marke.image}
                  alt={marke.name}
                  width={200}
                  height={200}
                  className="w-[80%] lg:w-[80%] h-auto mx-auto"
                />
                {marke.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

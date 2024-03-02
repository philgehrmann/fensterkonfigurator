"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/glas.json";
import Image from "next/image";

export default function Verglasung() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateGlas = (id: any, price: any) => {
    if (state.verglasung !== id || state.verglasung === "") {
      dispatch({ type: "UPDATE_VERGLASUNG", payload: id });
      dispatch({ type: "UPDATE_VERGLASUNGPREIS", payload: price });
    } else {
      dispatch({ type: "UPDATE_VERGLASUNG", payload: "" });
      dispatch({ type: "UPDATE_VERGLASUNGPREIS", payload: 0 });
    }
  };

  return (
    <div className="self-center">
      <h3 className="m-0">Verglasung</h3>
      <p className="text-[12px]"> Wählen Sie Ihre Verglasung</p>
      <div className="grid grid-cols-1 gap-6  mt-6">
        {content.variants.map((glas, index) => {
          return (
            <div
              key={index}
              className={
                " cursor-pointer grid grid-cols-[80%_20%] drop-shadow-md bg-white p-4" +
                (glas.id === state.verglasung
                  ? " border-[3px] border-orange"
                  : "")
              }
              onClick={() => updateGlas(glas.id, glas.price)}
            >
              <p className="text-[12px] px-4">{glas.name}</p>
              <p className="text-[12px] px-4 justify-self-end">
                {glas.price !== 0 && "+" + glas.price.toFixed(2) + "€"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

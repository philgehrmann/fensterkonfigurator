"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/farbe.json";
import Image from "next/image";
import "../../colors.css";

export default function Farbe() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateColor = (name: any, preis: any) => {
    if (state.color !== name || state.color === "") {
      dispatch({ type: "UPDATE_COLOR", payload: name });
      dispatch({ type: "UPDATE_COLORPREIS", payload: preis });
    } else {
      dispatch({ type: "UPDATE_COLOR", payload: "" });
      dispatch({ type: "UPDATE_COLORPREIS", payload: "" });
    }
  };

  const colors =
    content.farbe.filter((hersteller) => hersteller.id === state.hersteller) ||
    [];
  return (
    <div className="self-center">
      <h3 className="m-0">Farbe</h3>

      <p>Basisfarben</p>
      <div className="grid grid-cols-2 gap-2 items-center justify-items-center mt-6">
        {colors[0].farbenbasic.map((color, index) => {
          return (
            <div
              key={index}
              className={
                "grid grid-cols-1 cursor-pointer items-center justify-items-center min-h-[120px] p-4 w-full  " +
                (color.name === state.color ? " bg-white drop-shadow-lg" : "")
              }
              onClick={() => updateColor(color.name, color.price)}
            >
              <div
                className={
                  "w-[55px] h-[55px] rounded-full " +
                  color.class +
                  (color.name === state.color
                    ? " border-[5px] border-orange drop-shadow-md"
                    : " border-[5px] border-transparent")
                }
              ></div>
              <p className="text-[11px]"> {color.name}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-6">Premiumfarben</p>
      <div className="grid grid-cols-2 gap-2 items-center justify-items-center mt-6">
        {colors[0].farbenpremium.map((color, index) => {
          return (
            <div
              key={index}
              className={
                "grid grid-cols-1 cursor-pointer items-center justify-items-center min-h-[120px] p-4 w-full  " +
                (color.name === state.color ? " bg-white drop-shadow-lg" : "")
              }
              onClick={() => updateColor(color.name, color.price)}
            >
              <div
                key={index}
                className={
                  "w-[55px] h-[55px] rounded-full " +
                  color.class +
                  (color.name === state.color
                    ? " border-[5px] border-orange drop-shadow-md"
                    : " border-[5px] border-transparent")
                }
              ></div>
              <p className="text-[11px]"> {color.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

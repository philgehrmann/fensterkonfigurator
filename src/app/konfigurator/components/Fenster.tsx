"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/konfigurator.json";
import { AnyARecord } from "dns";
import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";

export default function Fenster() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateFenster = (id: any, name: any) => {
    if (state.fenster !== id || state.fenster === "") {
      dispatch({ type: "UPDATE_FENSTER", payload: id });
      dispatch({
        type: "UPDATE_TRANSLATION",
        payload: name,
        key: "translationModell",
      });
    } else {
      dispatch({ type: "UPDATE_FENSTER", payload: "" });
      dispatch({
        type: "UPDATE_TRANSLATION",
        payload: "",
        key: "translationModell",
      });
    }
  };
  const fenster =
    content.hersteller.filter(
      (hersteller) => hersteller.id === state.hersteller
    ) || [];

  return (
    <div className="self-center">
      <h3 className="m-0">Fenstermodell</h3>
      <p className="text-[12px]"> Wählen Sie ein Fenstermodell</p>
      <div className="grid grid-cols-2 gap-6 items-center justify-items-center mt-6">
        {fenster[0].konfiguration.map((fenster: any, index: any) => {
          return (
            <div
              key={index}
              className={" cursor-pointer grid grid-cols-1 "}
              onClick={() => updateFenster(fenster.id, fenster.name)}
            >
              <Image
                src={fenster.image}
                alt={fenster.name}
                width={200}
                height={200}
                className={
                  "w-[100%] lg:w-[100%] max-h-[175px] h-auto mx-auto rounded-xl p-6 bg-white drop-shadow-lg  border-[3px]  items-center" +
                  (fenster.id === state.fenstermodell
                    ? " border-[3px] border-orange"
                    : " border-white")
                }
              />
              <p className="text-[14px] px-4 text-center pt-6">
                <span className="font-bold">{fenster.name}</span>
                <ScrollShadow
                  hideScrollBar
                  className="w-[150px] h-[200px]"
                ></ScrollShadow>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/variants.json";
import { AnyARecord } from "dns";
import { Input } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";

export default function Fenstermasse() {
  const { state, dispatch } = useContext(KonfiguratorContext);
  const [heightError, setHeightError] = useState(false);
  const [widthError, setWidthError] = useState(false);

  const inRange = (x: any, min: number, max: number) => {
    return (x - min) * (x - max) <= 0;
  };

  const updateWidth = (e: any) => {
    if (!inRange(e.target.value, state.minwidth, state.maxwidth)) {
      console.log("error");
      setWidthError(true);
      return;
    } else {
      setWidthError(false);
      dispatch({ type: "UPDATE_FENSTERWIDTH", payload: e.target.value });
    }
  };
  const updateHeight = (e: any) => {
    if (!inRange(e.target.value, state.minheight, state.maxheight)) {
      setHeightError(true);
      return;
    } else {
      setHeightError(false);
      dispatch({ type: "UPDATE_FENSTERHEIGHT", payload: e.target.value });
    }
  };

  return (
    <>
      <div className="self-center">
        <h3 className="m-0">Maße</h3>
        <p className="text-[12px]">
          {" "}
          Wählen Sie die Breite und Höhe des Fensters
        </p>
        <div className="grid grid-cols-1 items-center justify-items-center mt-24">
          <p className="text-[14px] mb-2 mt-2 ml-2 self-start justify-self-start">
            Breite des Fensters
          </p>
          <Input
            type="number"
            isRequired
            className=""
            min={state.minwidth}
            max={state.maxwidth}
            isInvalid={widthError}
            placeholder={state.minwidth}
            onChange={(e) => updateWidth(e)}
          />
          <p className="text-[12px] mb-6 mt-2 ml-2">
            {" "}
            zulässiger Bereich in mm: {state.minwidth} - {state.maxwidth}
          </p>
          <p className="text-[14px] mb-2 mt-2 ml-2 self-start justify-self-start">
            Höhe des Fensters
          </p>
          <Input
            type="number"
            isRequired
            min={state.minheight}
            max={state.maxheight}
            isInvalid={heightError}
            placeholder={state.minheight}
            onChange={(e) => updateHeight(e)}
          />
          <p className="text-[12px] mb-6 mt-2 ml-2">
            {" "}
            zulässiger Bereich in mm: {state.minheight} - {state.maxheight}
          </p>
        </div>
      </div>
    </>
  );
}

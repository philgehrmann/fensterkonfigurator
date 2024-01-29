"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/variants.json";
import { AnyARecord } from "dns";
import { Slider } from "@nextui-org/react";

export default function Fenstermasse() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateWidth = (e: any) => {
    dispatch({ type: "UPDATE_FENSTERWIDTH", payload: e.target.value });
  };
  const updateHeight = (e: any) => {
    dispatch({ type: "UPDATE_FENSTERHEIGHT", payload: e.target.value });
    console.log(state.height);
  };

  return (
    <section>
      <input
        type="range"
        step={1}
        max={1200}
        min={350}
        defaultValue={350}
        className="max-w-md"
        onChange={(e) => updateWidth(e)}
      />
      <input
        type="range"
        step={1}
        max={1200}
        min={350}
        defaultValue={350}
        className="max-w-md"
        onChange={(e) => updateHeight(e)}
      />
    </section>
  );
}

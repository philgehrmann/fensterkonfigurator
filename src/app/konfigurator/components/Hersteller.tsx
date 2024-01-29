"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/konfigurator.json";

export default function Hersteller() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateHersteller = (id: any) => {
    if (state.hersteller !== id || state.hersteller === "") {
      dispatch({ type: "UPDATE_HERSTELLER", payload: id });
    } else {
      dispatch({ type: "UPDATE_HERSTELLER", payload: "" });
    }
  };

  return (
    <section>
      {content.hersteller.map((marke, index) => {
        return (
          <p
            className={state.hersteller === marke.id ? "text-orange" : ""}
            onClick={() => updateHersteller(marke.id)}
          >
            {marke.name}
          </p>
        );
      })}
    </section>
  );
}
